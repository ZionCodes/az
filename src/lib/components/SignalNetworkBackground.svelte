<script>
	import { browser } from '$app/env';

	let { className = '' } = $props();

	let canvasEl = $state(null);
	let containerEl = $state(null);

	$effect(() => {
		if (!browser || !canvasEl || !containerEl) return;

		const ctx = canvasEl.getContext('2d');
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let W = 0,
			H = 0;
		const DPR = Math.min(window.devicePixelRatio || 1, 2);

		const NODE_COUNT = 40;
		const MAX_DIST = 170;
		const CURSOR_RADIUS = 190;
		const PULSE_COUNT = 3;

		let nodes = [];
		let pulses = [];
		const mouse = { x: -9999, y: -9999, active: false };

		function mulberry32(seed) {
			return function () {
				seed |= 0;
				seed = (seed + 0x6d2b79f5) | 0;
				let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
				t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
				return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
			};
		}

		function buildNodes() {
			const rand = mulberry32(2024);
			nodes = [];
			for (let i = 0; i < NODE_COUNT; i++) {
				nodes.push({
					bx: rand() * W,
					by: rand() * H,
					x: 0,
					y: 0,
					ax: 8 + rand() * 14,
					ay: 8 + rand() * 14,
					fx: 0.00016 + rand() * 0.00022,
					fy: 0.00016 + rand() * 0.00022,
					px: rand() * Math.PI * 2,
					py: rand() * Math.PI * 2,
					r: 1.5 + rand() * 1.4,
					pushX: 0,
					pushY: 0
				});
				nodes[i].x = nodes[i].bx;
				nodes[i].y = nodes[i].by;
			}
			pulses = [];
			for (let i = 0; i < PULSE_COUNT; i++) {
				pulses.push({ a: null, b: null, t: rand(), speed: 0.004 + rand() * 0.003 });
			}
		}

		function resize() {
			const rect = containerEl.getBoundingClientRect();
			W = rect.width;
			H = rect.height;
			canvasEl.width = Math.round(W * DPR);
			canvasEl.height = Math.round(H * DPR);
			canvasEl.style.width = W + 'px';
			canvasEl.style.height = H + 'px';
			ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
			buildNodes();
		}

		function pickEdgeFor(pulse) {
			const candidates = [];
			for (let a = 0; a < nodes.length; a++) {
				for (let b = a + 1; b < nodes.length; b++) {
					const dx = nodes[a].x - nodes[b].x,
						dy = nodes[a].y - nodes[b].y;
					if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) candidates.push([a, b]);
				}
			}
			if (!candidates.length) return;
			const pick = candidates[(Math.random() * candidates.length) | 0];
			pulse.a = pick[0];
			pulse.b = pick[1];
			pulse.t = 0;
		}

		function isDark() {
			return document.documentElement.classList.contains('dark');
		}

		function draw() {
			ctx.clearRect(0, 0, W, H);
			const dark = isDark();
			const base = dark ? '255,255,255' : '20,20,20';
			const accent = '255, 89, 65';

			for (const n of nodes) {
				const driftX = reducedMotion ? 0 : Math.sin(performance.now() * n.fx + n.px) * n.ax;
				const driftY = reducedMotion ? 0 : Math.cos(performance.now() * n.fy + n.py) * n.ay;

				if (mouse.active) {
					const dx = n.bx + driftX - mouse.x;
					const dy = n.by + driftY - mouse.y;
					const dist = Math.sqrt(dx * dx + dy * dy) || 1;
					if (dist < CURSOR_RADIUS) {
						const pull = (1 - dist / CURSOR_RADIUS) * 22;
						n.pushX += ((-dx / dist) * pull - n.pushX) * 0.08;
						n.pushY += ((-dy / dist) * pull - n.pushY) * 0.08;
					} else {
						n.pushX *= 0.9;
						n.pushY *= 0.9;
					}
				} else {
					n.pushX *= 0.9;
					n.pushY *= 0.9;
				}

				n.x = n.bx + driftX + n.pushX;
				n.y = n.by + driftY + n.pushY;
			}

			ctx.lineWidth = 1;
			for (let a = 0; a < nodes.length; a++) {
				for (let b = a + 1; b < nodes.length; b++) {
					const dx = nodes[a].x - nodes[b].x,
						dy = nodes[a].y - nodes[b].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < MAX_DIST) {
						const o = (1 - dist / MAX_DIST) * 0.1;
						ctx.strokeStyle = `rgba(${base},${o.toFixed(3)})`;
						ctx.beginPath();
						ctx.moveTo(nodes[a].x, nodes[a].y);
						ctx.lineTo(nodes[b].x, nodes[b].y);
						ctx.stroke();
					}
				}
			}

			if (mouse.active) {
				for (const n of nodes) {
					const dx = n.x - mouse.x,
						dy = n.y - mouse.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < CURSOR_RADIUS) {
						const o = (1 - dist / CURSOR_RADIUS) * 0.55;
						ctx.strokeStyle = `rgba(${accent},${o.toFixed(3)})`;
						ctx.beginPath();
						ctx.moveTo(mouse.x, mouse.y);
						ctx.lineTo(n.x, n.y);
						ctx.stroke();
					}
				}
			}

			if (!reducedMotion) {
				for (const p of pulses) {
					if (p.a === null || p.t >= 1) {
						pickEdgeFor(p);
						continue;
					}
					p.t += p.speed;
					const A = nodes[p.a],
						B = nodes[p.b];
					if (!A || !B) continue;
					const dx = A.x - B.x,
						dy = A.y - B.y;
					if (Math.sqrt(dx * dx + dy * dy) > MAX_DIST * 1.4) {
						p.a = null;
						continue;
					}
					const px = A.x + (B.x - A.x) * p.t;
					const py = A.y + (B.y - A.y) * p.t;
					const fade = Math.sin(Math.min(1, p.t) * Math.PI);
					ctx.fillStyle = `rgba(${accent},${(fade * 0.9).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(px, py, 2.1, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			for (const n of nodes) {
				let dist = Infinity;
				if (mouse.active) {
					const dx = n.x - mouse.x,
						dy = n.y - mouse.y;
					dist = Math.sqrt(dx * dx + dy * dy);
				}
				const near = dist < CURSOR_RADIUS;
				const glow = near ? 1 - dist / CURSOR_RADIUS : 0;
				if (glow > 0) {
					ctx.fillStyle = `rgba(${accent},${(0.1 + glow * 0.75).toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(n.x, n.y, n.r + glow * 1.6, 0, Math.PI * 2);
					ctx.fill();
				} else {
					ctx.fillStyle = `rgba(${base},0.16)`;
					ctx.beginPath();
					ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		}

		let raf;
		function loop() {
			draw();
			raf = requestAnimationFrame(loop);
		}

		function onPointerMove(e) {
			const rect = containerEl.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
			mouse.active = true;
		}
		function onPointerLeave() {
			mouse.active = false;
		}

		resize();

		// mirror Hero's own rotating-phrase pill: reduced motion means fully
		// static, not just slower -- no drift, no pulses, no cursor reactivity
		if (reducedMotion) {
			draw();
		} else {
			raf = requestAnimationFrame(loop);
		}

		// listen on window, not the container itself: this layer sits behind
		// every section (-z-10, position: fixed), so real page content always
		// paints on top of it and would otherwise intercept the pointer first.
		// window-level pointermove always fires regardless of what's stacked
		// above, and onPointerMove still maps it to local canvas coordinates.
		window.addEventListener('resize', resize);
		if (!reducedMotion) {
			window.addEventListener('pointermove', onPointerMove);
			document.addEventListener('mouseleave', onPointerLeave);
		}

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
			if (!reducedMotion) {
				window.removeEventListener('pointermove', onPointerMove);
				document.removeEventListener('mouseleave', onPointerLeave);
			}
		};
	});
</script>

<div bind:this={containerEl} class="pointer-events-none fixed inset-0 -z-10 {className}">
	<canvas bind:this={canvasEl} class="h-full w-full"></canvas>
</div>
