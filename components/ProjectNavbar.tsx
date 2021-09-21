import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
	value: Category | "all";
	filterCategoryHandler: Function;
	active: string;
}> = ({ value, filterCategoryHandler, active }) => {
	let classNames =
		"capitalize transition-all cursor-pointer hover:text-green";

	if (active == value) {
		classNames += " text-green";
	}

	return (
		<li onClick={() => filterCategoryHandler(value)} className={classNames}>
			{value}
		</li>
	);
};

const ProjectNavbar: FunctionComponent<{
	filterCategoryHandler: Function;
	active: string;
}> = (props) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none align-center">
			<NavItem value="all" {...props} />
			<NavItem value="react" {...props} />
			<NavItem value="mongo" {...props} />
			<NavItem value="django" {...props} />
			<NavItem value="node" {...props} />
		</div>
	);
};

export default ProjectNavbar;
