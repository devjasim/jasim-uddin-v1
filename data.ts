import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IExperience, IProjects, IServices, ISkills } from "./types";

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
		level: "90",
	},
	{
		Icon: BsCircleFill,
		name: "HTML5, CSS3, SCSS/LESS",
		level: "95",
	},
	{
		Icon: BsCircleFill,
		name: "React, Redux",
		level: "90",
	},
	{
		Icon: BsCircleFill,
		name: "Next.js",
		level: "85",
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
		level: "70",
	},
	{
		Icon: BsCircleFill,
		name: "Express",
		level: "60",
	},
	{
		Icon: BsCircleFill,
		name: "Nest.js",
		level: "60",
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
		level: "80",
	},
	{
		Icon: BsCircleFill,
		name: "MongoDB",
		level: "75",
	},
	{
		Icon: BsCircleFill,
		name: "GitHub",
		level: "95",
	},
	{
		Icon: BsCircleFill,
		name: "Jira",
		level: "95",
	},
	{
		Icon: BsCircleFill,
		name: "Framer",
		level: "85",
	}
];

export const experiences: IExperience[] = [
	{
		jobTitle: "Software Engineer",
		company: "TulipTech LTD (BD)",
		companyLink: "https://tulip-tech.com",
		startDate: "March - 2022",
		endDate: "Present",
		description: [
			"Worked with an international scrum team, and developed Virtual Event management, Online Learning platform, Vacation Rental & tourism activities software, using React, Next, React Native, Redux, Node.js, Nest.js, MongoDB, and other needed technologies.",

			"Connect with international stakeholders, understand requirements, and implement UI design thorough development and API integration.",

			"Collaborates with other team members, and backend developers to understand data follow, and APIs and develop new features using various technologies.",

			"Write perform and efficient code and by test using JEST that reduces execution time and loads applications faster.",

			"Always write Javascript(ES6), and TypeScript clean code by following the SOLID principle. Using most of the Higher Order functions and following best practices.",

		]
	},
	{
		jobTitle: "Front-End Software Engineer",
		company: "SEO Audit Agency",
		companyLink: "https://seoaudit.agency",
		startDate: "Mar 2020",
		endDate: "Feb 2022",
		description: [
			"Write modern, perform, and robust code for including new features in SAAS-based software which is an SEO Service Software.",

			"Create React components to perform and visualize dynamic data by maintaining the SRP principle. Use Redux for manage state and data.",

			"Expend features refine code, and improve processes, producing smoother operations and enhancing user engagement.",

			"Designing and developing by collaborating with UI/UX team to include new features using React, Redux, and Python RESTful APIs.",

			"Launch new features on a weekly and monthly basis by uploading them on the server to using Docker & GitHub Actions.",

		]
	},
	{
		jobTitle: "Junior Front End Developer",
		company: "Print Wizard",
		companyLink: "",
		startDate: "Apr 2019",
		endDate: "Dec 2020",
		description: [
			"Worked with a team of three designers to build a marketing website and e-commerce platform for Print Wizard, an ambitious venture originating.",

			"Implemented websites, mobile applications, and landing pages from concept through deployment.",

			"Collaborated with product team members to implement new features development.",

		]
	}
] 

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
		key_techs: ["PHP", "Wordpress Theme Development", "JavaScript", 'HTML5, SCSS, Bootstrap, GSAP for animation'],
	},
];
