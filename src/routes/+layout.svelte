<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import "../app.css";
</script>

<div class="min-h-screen flex flex-col gap-4">
  <Header />
  <div class="flex flex-col items-center mt-8">
    <slot />
  </div>
  <div class="sm:hidden flex justify-center">
    <ThemeSwitcher />
  </div>
  <Footer />
</div>
