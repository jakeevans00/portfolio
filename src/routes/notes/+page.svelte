<script lang="ts">
  import type { PageData } from "./$types";
  import BiCalendar from "~icons/bi/calendar";

  export let data: PageData;
</script>

<div class="flex flex-col justify-center items-center mx-auto px-4">
  <p class="text-4xl lg:text-5xl font-bold mb-8 text-center">Notes</p>
  <nav>
    <ul class="">
      {#each data.notes as note}
        <li class="flex items-start gap-4 w-full items-">
          <span class="mt-[2px] text-gray-500"
            ><BiCalendar class="inline mr-2" />{new Date(
              note.createdDate,
            ).toLocaleDateString("en-US")}</span
          >
          <div>
            <div>
              <a href="/notes/{note.urlPath}" class="text-xl hover:text-primary"
                >{note.title}
              </a>
              {#each note.tags as tag}
                <span
                  class="text-xs bg-primary text-white rounded-full ml-2 -mt-2 px-2"
                  >{tag}</span
                >
              {/each}
            </div>

            <p>
              {note.blocks[0].text}
            </p>
          </div>
        </li>
      {/each}
    </ul>
  </nav>
</div>
