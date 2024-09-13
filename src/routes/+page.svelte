<script>
  import { themeChange } from "theme-change";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";

  onMount(() => themeChange(false));
</script>

<main class="min-h-screen flex flex-col"></main>
