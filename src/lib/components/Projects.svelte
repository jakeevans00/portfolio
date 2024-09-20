<script>
  import fitness from "$lib/assets/lift.png";
  import exsc from "$lib/assets/exsc.jpg";
  import cet from "$lib/assets/cet.jpg";
  import ea from "$lib/assets/ea.jpg";

  import { funProjects as projects } from "$lib/data/projects";
  import { workProjects as work } from "$lib/data/projects";

  const workImages = [exsc, ea, cet];
</script>

<section class="" id="projects">
  <div class="flex flex-col items-center">
    <p class="text-3xl font-bold mb-8">Projects</p>

    <div
      class="carousel carousel-center bg-neutral bg-transparent rounded-box w-full space-x-8 p-4"
    >
      {#each projects as project}
        <div class="carousel-item">
          <div
            class="card card-custom w-[325px] sm:w-[450px] border border-neutral"
          >
            <figure class="h-[400px]">
              {#if project.iframe === true}
                <iframe
                  src={project.url}
                  frameborder="0"
                  class="w-full h-full"
                  title={project.title}
                ></iframe>
              {:else}
                <img src={fitness} alt={project.title} />
              {/if}
            </figure>
            <div class="card-body">
              <h2 class="card-title hover:text-primary mb-2">
                <a href={project.url}>
                  {project.title}
                </a>
                <div class={`badge ${project.badgeColor}`}>{project.badge}</div>
              </h2>
              <p class="mb-2">
                {project.desc}
              </p>
              <div class="card-actions justify-end">
                {#each project.tags as tag}
                  <div class="badge badge-outline">{tag}</div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div
      class="carousel carousel-center bg-neutral bg-transparent rounded-box w-full space-x-8 p-4"
    >
      {#each work as project, index}
        <div class="carousel-item">
          <div
            class="card card-custom w-[325px] sm:w-[450px] border border-neutral"
          >
            <figure class="h-[400px]">
              {#if project.iframe === true}
                <iframe
                  src={project.url}
                  frameborder="0"
                  class="w-full h-full"
                  title={project.title}
                ></iframe>
              {:else}
                <img src={workImages[index]} alt={project.title} />
              {/if}
            </figure>
            <div class="card-body">
              <h2 class="card-title mb-2">
                <a
                  href={project.url}
                  class="pointer-events-none cursor-not-allowed"
                >
                  {project.title}
                </a>
                <div class={`badge ${project.badgeColor} h-fit text-center`}>
                  {project.badge}
                </div>
              </h2>
              <p class="mb-2">
                {project.desc}
              </p>

              <div class="card-actions justify-end">
                {#each project.tags as tag}
                  <div class="badge badge-outline">{tag}</div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .card-custom {
    background-color: rgba(71, 86, 102, 0.098);
  }
</style>
