<script>
  import bikejake from "$lib/assets/bikejake.jpg";
  import wedding from "$lib/assets/lizzyjake.png";
  import dog from "$lib/assets/dog.jpg";
  import canyon from "$lib/assets/canyon.jpg";
  import { goto } from "$app/navigation";

  const images = [bikejake, wedding, dog, canyon];
  const handleClick = () => {
    goto("/#contact");
  };
</script>

<div class="sm:mt-16">
  <div
    class="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center justify-between"
  >
    <div class="flex flex-col gap-8 items-center md:items-start">
      <p class="text-4xl lg:text-5xl font-bold">hi, i'm jake 👋</p>
      <p class="text-xl text-center md:text-start">
        Architecting elegant solutions to supercharge your business workflows.
      </p>
      <button
        class="btn btn-primary w-max px-8 rounded-full"
        on:click={handleClick}>Let's talk</button
      >
    </div>
    <div>
      <div class="carousel w-[300px] md:w-[425px] z-0">
        {#each images as image}
          <div class="carousel-item">
            <img
              src={image}
              class="filter grayscale rounded-full hover:grayscale-0 h-[300px] md:h-[425px] transition-all duration-300"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
