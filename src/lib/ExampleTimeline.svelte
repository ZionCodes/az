<script>
    import Timeline from "./Timeline.svelte";
    import Content1 from "./Content1.svelte";
    import Content2 from "./Content2.svelte";
    import Content3 from "./Content3.svelte";
    import Content4 from "./Content4.svelte";
  
    let timelineData = [
      {
        title: "Discovery & Consultation",
        content: Content1,
      },
      {
        title: "System Design",
        content: Content2,
      },
      {
        title: "Implementation",
        content: Content3,
      },
      {
        title: "Optimization & Support",
        content: Content4,
      },
    ];
  </script>
  
  <Timeline {timelineData} />
  