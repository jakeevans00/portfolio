<script>
  import { redirect } from "@sveltejs/kit";
  import MdiGithub from "~icons/mdi/github";
  import MdiLinkedin from "~icons/mdi/linkedin";
</script>

<div class=" bg-neutral flex flex-col items-center justify-center py-4 gap-2">
  <div class="flex gap-2">
    <a href="https://github.com/jakeevans00">
      <MdiGithub class="text-3xl hover:text-primary" />
    </a>

    <a href="https://www.linkedin.com/in/jakeevans-byu/">
      <MdiLinkedin class="text-3xl hover:text-primary" />
    </a>
  </div>
  <p>Jake Evans @2024</p>
</div>
