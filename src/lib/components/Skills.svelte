<script>
  import LogosFlutter from "~icons/logos/flutter";
  import VscodeIconsFileTypeTypescriptOfficial from "~icons/vscode-icons/file-type-typescript-official";
  import VscodeIconsFileTypeReactjs from "~icons/vscode-icons/file-type-reactjs";
  import LogosAws from "~icons/logos/aws";
  import LogosDockerIcon from "~icons/logos/docker-icon";
  import LogosNextjsIcon from "~icons/logos/nextjs-icon";
  import SkillIconsGit from "~icons/skill-icons/git";
  import DeviconSvelte from "~icons/devicon/svelte";
  import VscodeIconsFileTypeMongo from "~icons/vscode-icons/file-type-mongo";
  import LogosPython from "~icons/logos/python";
  import DeviconJava from "~icons/devicon/java";
  import VscodeIconsFileTypeTailwind from "~icons/vscode-icons/file-type-tailwind";

  const skills = [
    { name: "TypeScript", logo: VscodeIconsFileTypeTypescriptOfficial },
    { name: "Flutter/Dart", logo: LogosFlutter },
    { name: "React", logo: VscodeIconsFileTypeReactjs },
    { name: "Tailwind", logo: VscodeIconsFileTypeTailwind },
    { name: "AWS", logo: LogosAws },
    { name: "Docker", logo: LogosDockerIcon },
    { name: "Git", logo: SkillIconsGit },
    { name: "Mongo.db", logo: VscodeIconsFileTypeMongo },
    { name: "Next.js", logo: LogosNextjsIcon },
    { name: "Svelte.js", logo: DeviconSvelte },
    { name: "Java", logo: DeviconJava },
    { name: "Python", logo: LogosPython },
  ];
</script>

<section>
  <div>
    <p class="text-3xl font-bold mb-8 text-center">Tools</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each skills as skill, i}
        <div class="border border-neutral rounded-lg shadow-md overflow-hidden">
          <div class="px-4 py-1 flex flex-col items-center">
            <svelte:component this={skills[i].logo} class="h-10 w-12 mb-1" />
            <h3 class="font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
