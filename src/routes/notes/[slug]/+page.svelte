<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    const renderBlock = (block: { component: string; text: string }) => {
        switch (block.component) {
            case "Paragraph":
                return `<p>${block.text}</p>`;

            default:
                return "";
        }
    };
</script>

<div class="flex flex-col justify-center items-center mx-auto px-4">
    <p class="text-4xl lg:text-5xl font-bold mb-8 text-center">
        {data.note.title}
    </p>
    {#each data.note.blocks as block}
        {@html renderBlock(block)}
    {/each}
</div>
