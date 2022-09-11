import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
	value: Category | "all";
	label: "React" | "Express" | "Nest" | "Next" | "All";
	filterCategoryHandler: Function;
	active: string;
}> = ({ value, label, filterCategoryHandler, active }) => {
	let classNames =
		"capitalize transition-all cursor-pointer hover:text-green";

	if (active == value) {
		classNames += " text-green";
	}

	return (
		<li onClick={() => filterCategoryHandler(value)} className={classNames}>
			{label}
		</li>
	);
};

const ProjectNavbar: FunctionComponent<{
	filterCategoryHandler: Function;
	active: string;
}> = (props) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none align-center">
			<NavItem label="All" value="all" {...props} />
			<NavItem label="React" value="react" {...props} />
			<NavItem label="Next" value="mongo" {...props} />
			<NavItem label="Express" value="express" {...props} />
			<NavItem label="Nest" value="nest" {...props} />
		</div>
	);
};

export default ProjectNavbar;
