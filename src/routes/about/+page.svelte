<script>
  import Contact from "$lib/components/Contact.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Summary from "$lib/components/Summary.svelte";
</script>

<div class="w-full flex flex-col items-center gap-8">
  <h1 class="text-5xl font-bold">about</h1>

  <Summary />
  <Experience />
  <Contact />
</div>
