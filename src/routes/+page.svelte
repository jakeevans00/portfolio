<script>
  import Summary from "$lib/components/Summary.svelte";
  import SkillsGrid from "$lib/components/SkillsGrid.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Contact from "$lib/components/Contact.svelte";

  import { themeChange } from "theme-change";
  import { onMount } from "svelte";
  import Projects from "$lib/components/Projects.svelte";

  onMount(() => themeChange(false));
</script>

<div class="flex flex-col gap-16">
  <Summary />
  <div class="h-1 bg-primary"></div>
  <SkillsGrid />
  <Projects />
  <Experience />
  <Contact />
</div>
