import { IconType } from "react-icons";

export interface IServices {
	title: string;
	des: string;
	Icon: IconType;
}

export interface ISkills {
	name: string;
	level: string;
	Icon: IconType;
}

export interface IProjects {
	name: string;
	description: string;
	image_path: string;
	deployed_url: string;
	github_url: string;
	category: Category[];
	key_techs: string[];
}

export type Category = "react" | "express" | "nest" | "mongo";

export interface IExperience {
	jobTitle: string;
	company: string;
	companyLink: string;
	startDate: string;
	endDate: string;
	description: string[]
}
