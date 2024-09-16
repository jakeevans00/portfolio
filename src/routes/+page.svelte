<script>
  import Summary from "$lib/components/Summary.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Projects from "$lib/components/Projects.svelte";

  import { themeChange } from "theme-change";
  import { onMount } from "svelte";

  onMount(() => themeChange(false));
</script>

<div class="flex flex-col gap-16">
  <Summary />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
</div>
