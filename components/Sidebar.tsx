import { useTheme } from "next-themes";
import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import {
	RiFacebookBoxFill,
	RiGithubFill,
	RiStackOverflowLine,
	RiTwitchFill,
} from "react-icons/ri";
import Avator from "../public/images/jasim-uddin.jpg";

const Sidebar = () => {
	const handleEmailClick = () => {
		window.open("mailto: jasimfbd@gmail.com");
	};

	const { theme, setTheme } = useTheme("dark");

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	console.log(theme);

	return (
		<div>
			<div>
				<div className="mx-auto mt-2 mb-4 overflow-hidden bg-white rounded-md cursor-pointer w-36 h-36">
					<Image
						className="duration-300 delay-100 transform rounded-lg profile__picture hover:scale-110"
						src={Avator}
						alt="Jasim Uddin"
						width="148px"
						height="148px"
						quality="100"
					/>
				</div>
				<div className="mx-4 mt-8 text-center">
					<h1 className="text-3xl font-medium tracking-wider black:text-white font-kaushan">
						<span className="text-green-500">Jasim</span> Uddin
					</h1>
				</div>
				<div className="text-center">
					<h4 className="h-8 px-2 py-1 my-3 bg-gray-200 rounded-md dark:bg-dark-200">
						Front End Engineer
					</h4>
					{/* <a
						href={MyResume}
						download="JASIM_UDDIN_RESUME.pdf"
						className="flex items-center justify-center h-8 px-2 py-5 mb-4 uppercase bg-gray-200 rounded-md dark:bg-dark-200"
					>
						<AiOutlineCloudDownload className="w-6 h-6 mr-2" /> Get
						Resume
					</a> */}
				</div>

				{/* Social and importants Links */}
				<div className="flex items-center justify-around py-4 pb-2">
					<a
						className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-md cursor-pointer"
						href="https://www.linkedin.com/in/devjasim/"
						target="__blank"
					>
						<AiOutlineLinkedin />
					</a>
					<a
						className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-md cursor-pointer"
						href="https://stackoverflow.com/users/11856004/jasim-uddin"
						target="__blank"
					>
						<RiStackOverflowLine />
					</a>
					<a
						className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-md cursor-pointer"
						href="!#"
					>
						<RiGithubFill />
					</a>
					<a
						className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-md cursor-pointer"
						href="https://www.facebook.com/devjasim"
						target="__blank"
					>
						<RiFacebookBoxFill />
					</a>

					<a
						className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-md cursor-pointer"
						href="!#"
					>
						<RiTwitchFill />
					</a>
				</div>
			</div>

			{/* Address  */}
			<div className="px-5 py-4 my-5 -mx-5 text-center bg-gray-200 dark:bg-dark-200">
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Dhaka, Bangladesh</span>
				</div>
				<div>
					<p className="flex items-center justify-center my-2">
						<HiOutlineMail className="w-4 mr-2" />{" "}
						jasimfbd@gmail.com
					</p>
					<p className="flex items-center justify-center mt-2">
						<IoCallOutline className="w-4 mr-2" /> +880 195061-6750
					</p>
				</div>
			</div>

			{/* Features  */}
			<div className="mt-8 text-center">
				<button
					onClick={handleEmailClick}
					className="flex items-center justify-center w-8/12 px-4 py-2 mx-auto my-2 text-white uppercase rounded-md bg-gradient-to-r from-green to-blue-400"
				>
					<HiOutlineMail className="w-4 mr-2" /> Email Me
				</button>
				<button
					onClick={toggleTheme}
					className="w-8/12 px-4 py-2 my-2 text-white uppercase rounded-md bg-gradient-to-r from-green to-blue-400"
				>
					{theme === "light" ? "Dark Mood" : "Light Mood"}
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
