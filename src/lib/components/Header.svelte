<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<header
  class="sticky left-0 top-0 z-50 w-full flex justify-between items-center pt-8 pb-4"
>
  <div class="logo-text font-extrabold text-xl text-primary">
    <span class="underline">j</span>ake<span class="text-secondary">_</span
    ><span class="text-accent">evans</span>
  </div>
  <div class="hidden sm:block">
    <ThemeSwitcher />
  </div>
  <nav class="text-lg">
    <ul class="flex gap-6">
      <nav>
        <a class="hover:text-accent" href="/">projects</a>
        <a class="hover:text-accent" href="/notes">notes</a>
        <a class="hover:text-accent" href="/about">about</a>
      </nav>
    </ul>
  </nav>
</header>
<div class="h-1 bg-primary"></div>
