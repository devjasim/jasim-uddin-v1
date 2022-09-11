import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProjects, IServices, ISkills } from "./types";

export const services: IServices[] = [
	{
		Icon: RiComputerLine,
		title: "Frontend Development",
		des: "As a Front End Developer having the experience to build SPA, SSG, or SSR applications using React.js, Next.js, Redux, etc.",
	},
	{
		Icon: FaServer,
		title: "Backend  Development",
		des: "Haveing experience to build application by using Node.js and Experess js with React and Redux.",
	},
	{
		Icon: AiOutlineApi,
		title: "Landing Page Deisng & Development",
		des: "Design and Develop landing pages using HTML5, CSS3, JavaScript, WordPress, and many more.",
	},
	{
		Icon: MdDeveloperMode,
		title: "Competitive Coder",
		des: "I'm sloving problem daily basis in many problem site mostly in HackerRank and Freecodecamp",
	},
	{
		Icon: AiOutlineAntDesign,
		title: "UI Design",
		des: "Have strong knowledge in User Interface design design ",
	},
	{
		Icon: RiComputerLine,
		title: "Project Management",
		des: "Have project management experience by managing a SaaS based software",
	},
];

export const languages: ISkills[] = [
	{
		Icon: BsCircleFill,
		name: "JavaScript(ES6), TypeScript",
		level: "70",
	},
	{
		Icon: BsCircleFill,
		name: "HTML5, CSS3, SCSS/LESS",
		level: "70",
	},
	{
		Icon: BsCircleFill,
		name: "React, Redux",
		level: "65",
	},
	{
		Icon: BsCircleFill,
		name: "Next.js",
		level: "65",
	},
	{
		Icon: BsCircleFill,
		name: "React Native",
		level: "50",
	},
	{
		Icon: BsCircleFill,
		name: "Gatsby",
		level: "60",
	},
	{
		Icon: BsCircleFill,
		name: "Node.js",
		level: "50",
	},
	{
		Icon: BsCircleFill,
		name: "Express",
		level: "40",
	},
	{
		Icon: BsCircleFill,
		name: "Nest.js",
		level: "40",
	},
	{
		Icon: BsCircleFill,
		name: "Ant Design, Material UI, Tailwind",
		level: "80",
	},
	{
		Icon: BsCircleFill,
		name: "Chart.js, Highchart, Google Chart",
		level: "80",
	},
];

export const tools: ISkills[] = [
	{
		Icon: BsCircleFill,
		name: "Webpack",
		level: "80",
	},
	{
		Icon: BsCircleFill,
		name: "Jest Testing Framework",
		level: "60",
	},
	{
		Icon: BsCircleFill,
		name: "MongoDB",
		level: "55",
	},
	{
		Icon: BsCircleFill,
		name: "GitHub",
		level: "85",
	},
	{
		Icon: BsCircleFill,
		name: "Jira",
		level: "85",
	},
	{
		Icon: BsCircleFill,
		name: "Framer",
		level: "45",
	}
];

export const projects: IProjects[] = [
	{
		name: "SEO Audit Software",
		description: "This is an SaaS based software which is provide SEO services worldwide.",
		image_path: "/images/software_img.png",
		deployed_url: "https://app.seoaudit.software/",
		github_url: "",
		category: ["react"],
		key_techs: [
			"React",
			"Redux",
			"TypeScript",
			"Jest",
			"Chart.js",
			"Highchart",
			"Webpack",
			"Material UI",
			"Bootstrap",
		],
	},
	{
		name: "Planet HR",
		image_path: "/images/PlanetHR.png",
		deployed_url: "https://planethrms.com/",
		github_url: "",
		category: ["react"],
		description:
			"Planet HR is a Landing page. Which is introduct a Mobile app",
		key_techs: ["Wordpress", "JavaScript"],
	},
];
