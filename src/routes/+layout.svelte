<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import "../app.css";
</script>

<div class="min-h-screen flex flex-col">
  <div class="flex-grow flex flex-col items-center">
    <div class="w-5/6 sm:w-4/5 max-w-[1200px] flex flex-col flex-grow">
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
      <div class="sm:hidden flex justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
  <Footer />
</div>
