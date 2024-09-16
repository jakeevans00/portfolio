<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="navbar px-0 py-2">
  <div class="flex-1">
    <a href="#about">
      <div class="font-extrabold text-xl text-primary">
        jake<span class="text-secondary">_</span><span class="text-accent"
          >evans</span
        >
      </div>
    </a>
  </div>
  <div class="flex-none">
    <ThemeSwitcher />

    <ul class="menu menu-horizontal px-1 ml-4">
      <li>
        <details>
          <summary>view</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="#projects">projects</a></li>
            <li><a href="/#contact">contact</a></li>
            <li><a href="/notes">notes</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
