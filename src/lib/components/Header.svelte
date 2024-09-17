<script lang="ts">
  import { onMount } from "svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import MingcuteMenuFill from "~icons/mingcute/menu-fill";

  let detailsElement: HTMLDetailsElement;

  onMount(() => {
    const handleClick = (event: MouseEvent) => {
      if (detailsElement && !detailsElement.contains(event.target as Node)) {
        detailsElement.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
</script>

<div class="navbar px-0 py-2">
  <div class="flex-1">
    <a href="/">
      <div class="font-extrabold text-xl text-primary">
        jake<span class="text-secondary">_</span><span class="text-accent"
          >evans</span
        >
      </div>
    </a>
  </div>
  <div class="flex-none">
    <div class="hidden sm:block">
      <ThemeSwitcher />
    </div>

    <ul class="menu menu-horizontal px-1 ml-4">
      <li>
        <details bind:this={detailsElement}>
          <summary><MingcuteMenuFill class="text-2xl" /></summary>
          <ul class="bg-base-100 rounded-t-none p-2 z-10">
            <li><a href="/#projects">projects</a></li>
            <li><a href="/#contact">contact</a></li>
            <li><a href="/notes">notes</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
