<script lang="ts">
  import type { PageData } from "./$types";
  import IonList from "~icons/ion/list";
  import BiCalendar from "~icons/bi/calendar";

  export let data: PageData;

  const renderBlock = (block: {
    component: string;
    text: string;
    code: string;
  }) => {
    switch (block.component) {
      case "Paragraph":
        return `<p class="my-1">${block.text}</p>`;
      case "Heading1":
        return `<h1 class="text-3xl my-4 font-bold">${block.text}</h1>`;
      case "BulletedListItem":
        return `<li class="list-disc pl-5">${block.text}</li>`;
      case "CodeBlock":
        console.log(block.code);
        return `<div class='bg-base-300 p-2 rounded-md whitespace-break-spaces font-mono'>${block.code}</div>`;
      default:
        return "";
    }
  };
</script>

<div class="flex flex-col justify-center mx-auto sm:px-16 sm:mt-2">
  <div class="mb-6">
    <a href="/notes" class="text-primary hover:text-accent">Go Back</a>
  </div>
  <p class="text-4xl lg:text-5xl font-bold mb-8">
    {data.note.icon}
    {data.note.title}
  </p>
  <div class="text-neutral-400 flex flex-col gap-2">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1 flex gap-2 items-center">
        <IonList class="inline" />
        <span>Tags</span>
      </div>
      <div class="col-span-2">
        {#each data.note.tags as tag}
          <span class="text-xs bg-primary text-white rounded-full px-2 mr-2"
            >{tag}</span
          >
        {/each}
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1 flex gap-2 items-center">
        <BiCalendar class="inline" />
        <span>Date Created</span>
      </div>
      <div class="col-span-2">
        {new Date(data.note.createdDate).toLocaleDateString()}
      </div>
    </div>
  </div>
  {#each data.note.blocks as block}
    {@html renderBlock(block)}
  {/each}
</div>
