<script lang="ts">
  import { onMount } from "svelte";
  import IconSun from "~icons/bi/sun";
  import IconMoon from "~icons/bi/moon";
  import IconCamera from "~icons/bi/camera";
  import IconTree from "~icons/bi/tree";
  import IconCloud from "~icons/bi/cloud";
  import HeroiconsPaintBrush from "~icons/heroicons/paint-brush";

  const themes = ["nord", "light", "dark", "retro", "pastel", "forest"];

  const icons = [
    IconCloud,
    IconSun,
    IconMoon,
    IconCamera,
    HeroiconsPaintBrush,
    IconTree,
  ];

  let activeTheme: string = "nord";

  const setTheme = (theme: string) => {
    activeTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(activeTheme);
    }
  });
</script>

<div class="flex gap-2 text-lg sm:text-sm">
  {#each themes as theme, index}
    <button
      on:click={() => setTheme(theme)}
      class={`${activeTheme === theme ? "text-primary" : "hover:text-primary"}`}
    >
      <svelte:component this={icons[index]} class="w-6 h-5" />
    </button>
  {/each}
</div>
