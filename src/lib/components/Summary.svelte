<script>
  import SkillsGrid from "$lib/components/SkillsGrid.svelte";
</script>

<div class="flex flex-col items-center gap-8 w-2/3">
  <img
    src="/src/assets/bikejake.JPG"
    alt=""
    class=" filter grayscale rounded-full hover:grayscale-0 max-h-[500px] transition-all duration-300"
  />
  <p class="text-3xl font-bold">hi, i'm jake! 👋</p>

  <p class="text-lg text-center">
    i'm a simple guy with simple needs - 2 wheels, <a
      href="https://open.spotify.com/user/ejake370/playlists"
      class="hover:text-emerald-600">spotify premium</a
    >, my fender
    <a
      href="https://en.wikipedia.org/wiki/Fender_Stratocaster"
      class="hover:text-red-400">strat 🎸</a
    > and a bucket of side projects somewhere around 80% done.
  </p>
  <p>these are some of the tools i've used for work/school/hobby development</p>
  <SkillsGrid />
</div>
