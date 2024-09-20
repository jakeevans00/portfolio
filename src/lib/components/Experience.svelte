<script>
  import { experiences } from "$lib/data/experiences";
</script>

<section class="flex flex-col gap-8 my-8">
  <p class="text-3xl font-bold text-center">experiences</p>
  <div class="border-2 rounded-lg p-8 border-neutral w-full">
    <ul class="flex flex-col gap-8">
      {#each experiences as exp}
        <li class="grid grid-cols-3 gap-8">
          <div class="col-span-1">
            <h3 class="font-bold text-lg">{exp.role}</h3>
            <p>{exp.company}</p>
            <p class="text-sm text-neutral-500">{exp.dates}</p>
          </div>
          <ul class="col-span-2">
            {#each exp.bullets as bullet}
              <li class="list-disc mb-1">
                {bullet}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</section>
