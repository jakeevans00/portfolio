<script lang="ts">
  import IconamoonEmail from "~icons/iconamoon/email";
  import SolarUserBold from "~icons/solar/user-bold";
  import emailjs from "@emailjs/browser";

  let showToast = false;
  let toastMessage = "";
  let isSuccess: boolean | null = null;

  const sendEmail = (e: SubmitEvent) => {
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          isSuccess = true;
          toastMessage = "Email sent successfully!";
        },
        (error) => {
          console.log("FAILED...", error.text);
          isSuccess = false;
          toastMessage = "Failed to send email. Please try again later";
        }
      );

    showToast = true;
    form.reset();

    setTimeout(() => {
      showToast = false;
    }, 3000);
  };
</script>

<section class="mb-16" id="contact">
  <div class="flex flex-col items-center">
    <p class="text-3xl font-bold mb-8">contact me</p>

    <form on:submit|preventDefault={sendEmail} class="flex flex-col gap-4">
      <label class="input input-bordered flex items-center gap-2">
        <SolarUserBold />
        <input
          type="text"
          class="grow"
          placeholder="Name"
          name="name"
          required
        />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <IconamoonEmail class="text-neutral" />
        <input
          type="email"
          class="grow"
          placeholder="Email"
          name="email"
          required
        />
      </label>
      <textarea
        class="textarea textarea-bordered w-full"
        placeholder="Message..."
        name="message"
        required
      ></textarea>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    {#if showToast && isSuccess !== null}
      <div class="toast toast-top toast-center">
        <div class={isSuccess ? "alert alert-success" : "alert alert-error"}>
          <span>{toastMessage}</span>
        </div>
      </div>
    {/if}
  </div>
</section>
