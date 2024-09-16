<script lang="ts">
  import IconamoonEmail from "~icons/iconamoon/email";
  import SolarUserBold from "~icons/solar/user-bold";

  const handleSubmit = (event: Event) => {
    event.preventDefault();
  };
</script>

<section class="mb-16" id="contact">
  <div class="flex flex-col items-center">
    <p class="text-3xl font-bold mb-8">contact me</p>

    <form action="submit" on:submit={handleSubmit} class="flex flex-col gap-4">
      <label class="input input-bordered flex items-center gap-2">
        <SolarUserBold />
        <input type="text" class="grow" placeholder="Name" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <IconamoonEmail class="text-neutral" />
        <input type="text" class="grow" placeholder="Email" />
      </label>
      <textarea
        class="textarea textarea-bordered w-full"
        placeholder="Message..."
      ></textarea>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</section>
