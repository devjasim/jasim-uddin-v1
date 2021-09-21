import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span
					className="uppercase transition-all text black:text-white hover:text-green"
					onClick={() => setActiveItem(name)}
				>
					{name}
				</span>
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>("");

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === "/") {
			setActiveItem("Resume");
		}
		if (pathname === "/projects") {
			setActiveItem("Projects");
		}
		if (pathname === "/about") {
			setActiveItem("About");
		}
	}, []);

	return (
		<div>
			<div className="flex items-center justify-between py-5">
				<span className="pb-1 font-medium text-green-400 uppercase border-b-2 border-green-400 md:text-xl">
					{" "}
					{activeItem}{" "}
				</span>
				<div className="flex space-x-6 text-lg">
					<NavItem
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						name="Resume"
						route="/"
					/>
					<NavItem
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						name="Projects"
						route="/projects"
					/>
					<NavItem
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						name="About"
						route="/about"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
