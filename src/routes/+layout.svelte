<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import "../app.css";
</script>

<div class="min-h-screen flex flex-col items-center">
  <div class="w-4/5 max-w-[1200px] flex flex-col">
    <Header />
    <div class="mt-8 md:mt-16">
      <slot />
    </div>
    <div class="sm:hidden flex justify-center">
      <ThemeSwitcher />
    </div>
    <Footer />
  </div>
</div>
