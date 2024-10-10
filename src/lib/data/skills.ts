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

export const skills = [
  {
    name: "TypeScript",
    logo: VscodeIconsFileTypeTypescriptOfficial,
    url: "https://www.typescriptlang.org",
  },
  { name: "Flutter/Dart", logo: LogosFlutter, url: "https://flutter.dev" },
  {
    name: "React",
    logo: VscodeIconsFileTypeReactjs,
    url: "https://react.dev",
  },
  {
    name: "Tailwind",
    logo: VscodeIconsFileTypeTailwind,
    url: "https://tailwindcss.com",
  },
  { name: "AWS", logo: LogosAws, url: "https://aws.amazon.com" },
  { name: "Docker", logo: LogosDockerIcon, url: "https://www.docker.com" },
  { name: "Git", logo: SkillIconsGit, url: "https://git-scm.com" },
  {
    name: "Mongo.db",
    logo: VscodeIconsFileTypeMongo,
    url: "https://www.mongodb.com",
  },
  { name: "Next.js", logo: LogosNextjsIcon, url: "https://nextjs.org" },
  { name: "Svelte.js", logo: DeviconSvelte, url: "https://svelte.dev" },
  { name: "Java", logo: DeviconJava, url: "https://www.java.com/en/" },
  {
    name: "Python",
    logo: LogosPython,
    url: "https://www.python.org/downloads/",
  },
];
