<script lang="ts">
  import { onMount } from "svelte";
  import IconAirplane from "~icons/bi/airplane";
  import IconSun from "~icons/bi/sun";
  import IconMoon from "~icons/bi/moon";
  import IconCamera from "~icons/bi/camera";
  import IconTree from "~icons/bi/tree";
  import IconCloud from "~icons/bi/cloud";
  import HeroiconsPaintBrush from "~icons/heroicons/paint-brush";

  // Array of themes
  const themes = ["light", "dark", "retro", "pastel", "nord", "forest"];

  // Array of icons corresponding to themes
  const icons = [
    IconSun, // Icon for light theme
    IconMoon, // Icon for dark theme
    IconCamera, // Icon for retro theme
    HeroiconsPaintBrush, // Icon for pastel theme
    IconCloud, // Icon for nord theme
    IconTree, // Icon for forest theme
  ];

  // Reactive variable to store the active theme
  let activeTheme: string = "light";

  // Function to set the active theme
  const setTheme = (theme: string) => {
    activeTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Store the selected theme in localStorage
  };

  // On component mount, check and apply the theme from localStorage
  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme); // Apply the theme from localStorage
    } else {
      setTheme(activeTheme); // Set to the default theme if no theme is found in localStorage
    }
  });
</script>

<div class="flex gap-2 text-xs">
  {#each themes as theme, index}
    <button
      on:click={() => setTheme(theme)}
      class={`${activeTheme === theme ? "text-primary" : "hover:text-primary"}`}
    >
      <span class="mx-1 hidden lg:block">
        {theme}
      </span>
      <svelte:component this={icons[index]} class=" ml-2" />
    </button>
  {/each}
</div>

<style>
  .text-accent {
    color: #ffcc00; /* Example color for active theme */
  }
  .hover\:text-accent:hover {
    color: #ffcc00; /* Same hover effect for non-active buttons */
  }
</style>
