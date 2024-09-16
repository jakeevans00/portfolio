<script>
  import SkillsGrid from "$lib/components/SkillsGrid.svelte";
  import image from "$lib/assets/bikejake.jpg";
</script>

<div class="">
  <div
    class="flex flex-col-reverse md:flex-row gap-16 items-center justify-between"
  >
    <div class="flex flex-col gap-8">
      <p class="text-4xl font-bold text-center md:text-start">
        hi, i'm jake 👋
      </p>
      <p class="text-xl">
        software developer & dog dad. crafting elegant solutions to digital
        conundrums, between walks. if you need a developer who can navigate both
        legacy systems and modern frameworks with equal parts skill and silent
        judgment, look no further.
      </p>
      <a href="#contact">
        <button class="btn btn-primary w-max px-8 rounded-full"
          >let's talk</button
        >
      </a>
    </div>
    <img
      src={image}
      alt="Jake on his bike"
      class="filter rounded-full hover:grayscale-0 h-[300px] md:h-[425px] transition-all duration-300"
    />
  </div>
</div>
