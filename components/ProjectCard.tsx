import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { IProjects } from "../types";

const ProjectCard: FunctionComponent<{ project: IProjects }> = ({
	project: {
		name,
		image_path,
		category,
		deployed_url,
		description,
		key_techs,
		github_url,
	},
}) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				onClick={() => setShowDetails(!showDetails)}
				className="rounded-lg cursor-pointer"
				width="300"
				height="150"
				layout="responsive"
			/>
			<h4 className="my-2 text-center">{name}</h4>

			{showDetails && (
				<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-md shadow-2xl dark:text-white dark:bg-dark-200 gap-x-12 md:grid-cols-2">
					<div>
						<Image
							layout="responsive"
							width="300"
							height="150"
							src={image_path}
							alt={name}
							className="rounded-lg"
						/>
						<div className="flex justify-center my-4 space-x-3">
							{github_url !== "" && (
								<a
									href={github_url}
									className="flex items-center p-1 space-x-3 text-2xl bg-gray-200 rounded-md dark:bg-dark-200"
								>
									<VscGithub />
								</a>
							)}
							<a
								href={deployed_url}
								className="flex items-center p-1 space-x-3 text-2xl bg-gray-200 rounded-md dark:bg-dark-200"
							>
								<GoLinkExternal />
							</a>
						</div>
					</div>
					<div>
						<h2 className="mb-3 font-medium text-md md:text-2xl">
							{name}
						</h2>
						<h3 className="mb-3 font-medium"> {description} </h3>
						<div className="flex flex-wrap mt-5 text-sm tracking-wider">
							{key_techs.map((tech) => (
								<span
									className="px-2 py-1 my-1 mr-2 bg-gray-200 rounded-md dark:bg-dark-200 rounded-small"
									key={tech}
								>
									{tech}
								</span>
							))}
						</div>
					</div>
					<button
						onClick={() => setShowDetails(false)}
						className="absolute p-1 text-green-400 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
					>
						<MdClose size={25} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
