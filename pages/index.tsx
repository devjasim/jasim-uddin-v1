import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { BsCheck } from "react-icons/bs";
import Bar from "../components/Bar";
import { experiences, languages, tools } from "../data";

const index = () => {
	return (
		<div style={{ height: "100%" }} className="p-4 overflow-y-auto">
			<Head>
				<title>Jasim Uddin Resume and Portfolio</title>
			</Head>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="single__items">
					<div className="items">
						<h4 className="my-3 text-2xl font-semibold">
							Education
						</h4>
						<div className="education">
							<h5 className="text-xl font-semibold my2">
								Bachelor of Science
								<a href="https://uttarauniversity.edu.bd" className="ml-2 text-sm italic text-blue-500 underline">Uttara University</a>
							</h5>
							<p className="font-semibold">
								Computer Science & Engineering (2019-present)
							</p>
							<p className="my-3 font-light dark:text-textGray-200">
								I&apos;ve not yet completed my graduation. This is an evening program. It&apos;s possible to continue online and also has the facilities to transfer credit to another university. The expected completion date is 2023.
							</p>
						</div>
					</div>
					<div className="items">
						<div className="">
							<h5 className="text-xl font-semibold my2">
								Diploma Engineering
								<a href="https://maitdhaka.com" className="ml-2 text-sm italic text-blue-500 underline">MAIT</a>
							</h5>
							<p className="font-semibold">
								Computer Science (2015-2019)
							</p>
							<p className="my-3 font-light dark:text-textGray-200">
								I have completed Diploma in Engineering in Computer Science from a Reputed Institute under the Bangladesh Technical Education Board (BTEB). 
							</p>
						</div>
					</div>
					<div className="items">
						<h3 className="mt-8 text-2xl font-semibold">Skills</h3>
						<div className="skills">
							<h4 className="my-3 text-lg font-semibold">
								Languages and Frameworks
							</h4>
							<div className="my-2 ">
								{languages.map((language, index) => (
									<Bar key={index} data={language} />
								))}
							</div>
						</div>
						<div className="skills">
							<h4 className="my-3 text-lg font-semibold">
								Tools & Software
							</h4>
							<div className="my-2">
								{tools.map((tool, index) => (
									<Bar key={index} data={tool} />
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="single__items">
					<h4 className="text-2xl font-semibold">Experiences</h4>
					{experiences.map((experience, index) => (
						<div key={index} className="mt-4">
							<h5 className="my-2 text-xl font-semibold">
								{experience.jobTitle}
							</h5>
							<div className="block">
								<a href={experience.companyLink} target="__blank" className="font-semibold text-green-400">{experience.company}</a>
								<span className="ml-2 font-light">{experience.startDate} - {experience.endDate}</span>
							</div>
							<ul className="flex flex-col mt-4 font-light dark:text-textGray-200 gap-y-4">
								{experience.description.map((item, index) => (
									<li className="flex items-start justify-start gap-x-2" key={index+100}>
										<div className="mt-1">
											<BsCheck className="text-primary" />
										</div>
										<div>
											{item}
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	return { props: { endpoint: process.env.VERCEL_URL } };
};

export default index;
