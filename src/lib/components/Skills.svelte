<script>
  import { skills } from "$lib/data/skills";
</script>

<section>
  <div>
    <p class="text-3xl font-bold mb-8 text-center">Tools</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each skills as skill, i}
        <a
          class="border border-neutral rounded-lg shadow-md overflow-hidden hover:border-accent"
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="px-4 py-1 flex flex-col items-center">
            <svelte:component this={skill.logo} class="h-10 w-12 mb-1" />
            <h3 class="font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
