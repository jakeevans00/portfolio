<script>
  import LogosFlutter from "~icons/logos/flutter";
  import VscodeIconsFileTypeTypescriptOfficial from "~icons/vscode-icons/file-type-typescript-official";
  import VscodeIconsFileTypeReactjs from "~icons/vscode-icons/file-type-reactjs";
  import LogosAws from "~icons/logos/aws";
  import LogosDockerIcon from "~icons/logos/docker-icon";
  import LogosNextjsIcon from "~icons/logos/nextjs-icon";
  import SkillIconsGit from "~icons/skill-icons/git";
  import VscodeIconsFileTypeCpp3 from "~icons/vscode-icons/file-type-cpp3";
  import DeviconSvelte from "~icons/devicon/svelte";
  import VscodeIconsFileTypeMongo from "~icons/vscode-icons/file-type-mongo";
  import SkillIconsCss from "~icons/skill-icons/css";
  import LogosPython from "~icons/logos/python";

  const skills = [
    { name: "Flutter/Dart", logo: LogosFlutter },
    { name: "React", logo: VscodeIconsFileTypeReactjs },
    { name: "TypeScript", logo: VscodeIconsFileTypeTypescriptOfficial },
    { name: "AWS", logo: LogosAws },
    { name: "Next.js", logo: LogosNextjsIcon },
    { name: "Docker", logo: LogosDockerIcon },
    { name: "Git", logo: SkillIconsGit },
    { name: "C++", logo: VscodeIconsFileTypeCpp3 },
    { name: "Svelte.js", logo: DeviconSvelte },
    { name: "Mongo.db", logo: VscodeIconsFileTypeMongo },
    { name: "CSS", logo: SkillIconsCss },
    { name: "Python", logo: LogosPython },
  ];
</script>

<section class="">
  <div class="">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {#each skills as skill, i}
        <div
          class="border border-neutral hover:border-accent rounded-lg shadow-md overflow-hidden"
        >
          <div class="px-4 py-2 flex flex-col items-center">
            <svelte:component this={skills[i].logo} class="h-12 w-12 mb-1" />
            <h3 class="font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
