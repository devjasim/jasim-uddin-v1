import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const about = () => {
	return (
		<div className="flex flex-col flex-grow pt-1">
			<Head>
				<title>About Jasim Uddin</title>
			</Head>
			<p className="dark:text-textGray-200">
				Hello!
				<br />
				I&apos;m Front End Software Engineer, I&apos;ve 3+ years of
				experience working in this field with divers of web technologies
				that mostly front end and some of the Back End Technologies to successfully
				generate values in fast-paced and highly collaborative agile
				product teams. <br /> If you are looking for a highly motivated,
				self-starter, collaborative, and skillful person who can greatly
				contribute to the product growth with technical and
				non-technical capabilities, then DM me or reach out at
				jasimfbd@gmail.com
			</p>
			<div className="flex-grow p-4 mt-5 -mx-5 -mb-4 bg-gray-100 dark:bg-dark-200">
				<h2 className="my-3 font-bold tracking-wide ">
					Expertise Area
				</h2>
				<div className="grid gap-6 lg:grid-cols-2">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md dark:bg-dark-100 lg:col-span-1"
						>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default about;
