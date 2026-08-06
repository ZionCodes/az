/**
 * Minimal clsx-style class combiner — accepts strings, arrays, and
 * objects (keys kept when their value is truthy), joins everything
 * with spaces. Hand-rolled to avoid an npm dependency.
 */
export function cn(...inputs) {
	return inputs
		.flatMap((input) => {
			if (!input) return [];
			if (typeof input === 'string') return [input];
			if (Array.isArray(input)) return input.flat(Infinity).filter(Boolean);
			if (typeof input === 'object') {
				return Object.entries(input)
					.filter(([, value]) => Boolean(value))
					.map(([key]) => key);
			}
			return [];
		})
		.filter(Boolean)
		.join(' ');
}
