<script>
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="min-h-screen flex flex-col px-12 gap-4">
  <Header />
  <slot />
</div>
