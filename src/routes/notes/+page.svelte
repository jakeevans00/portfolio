<script lang="ts">
  import type { PageData } from "./$types";
  import BiCalendar from "~icons/bi/calendar";

  export let data: PageData;
</script>

<div class="flex flex-col justify-center items-start mx-auto sm:px-16 sm:mt-10">
  <p class="text-4xl lg:text-5xl font-bold mb-8">Notes</p>
  <nav>
    <ul class="w-full">
      {#each data.notes as note}
        <li class="w-full grid grid-cols-4 gap-4 mb-4">
          <span class="text-xs md:text-sm mt-[2px] col-span-1 text-gray-500"
            ><BiCalendar class="hidden sm:inline mr-2" />{new Date(
              note.createdDate,
            ).toLocaleDateString("en-US")}</span
          >
          <div class="col-span-3">
            <div class="flex items-center">
              <a
                href="/notes/{note.urlPath}"
                class="text-xl hover:text-primary mr-2"
                >{note.title}
              </a>
              {#each note.tags as tag}
                <span
                  class="text-xs bg-primary text-white rounded-full ml-2 px-2"
                  >{tag}</span
                >
              {/each}
            </div>

            <p>
              {note.description}
            </p>
          </div>
        </li>
      {/each}
    </ul>
  </nav>
</div>
