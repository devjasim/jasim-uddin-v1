import { FunctionComponent } from "react";
import { ISkills } from "../types";

const Bar: FunctionComponent<{ data: ISkills }> = ({
	data: { Icon, level, name },
}) => {
	return (
		<div className="my-4 text-white bg-gray-300 rounded-md dark:bg-dark-200">
			<div
				className="flex items-center px-4 py-0 rounded-md whitespace-nowrap bg-gradient-to-r from-green-500 to-blue-600"
				style={{ width: `${level}%` }}
			>
				<Icon className="w-3 h-3 mr-3" />
				{name}
			</div>
		</div>
	);
};

export default Bar;
