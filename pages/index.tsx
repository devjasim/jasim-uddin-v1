import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

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
								Computer Science & Engineering (2021-present)
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
								Languages and Framworks
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
					<h4 className="mb-3 text-2xl font-semibold">Experiences</h4>
					<div className="experience__item">
						<h5 className="my-2 text-xl font-semibold">
							Front-End Software Engineer
						</h5>
						<div className="block">
							<a href="https://tulip-tech.com" target="__blank" className="font-semibold text-green-400">Tulip Tech LTD (BD)</a>
							<span className="ml-2 font-light">March - 2022 - Present</span>
						</div>
						<ul className="font-light dark:text-textGray-200">
							<li className="py-2">
								● Worked with an international scrum team, and developed Virtual Event management, Online Learning platform, Vacation Rental & tourism activities software, using React, Next, React Native, Redux, Node.js, Nest.js, MongoDB, and other needed technologies.
							</li>
							<li className="pb-2">
								● Connect with international stakeholders, understand requirements, and implement UI design thorough development and API integration.
							</li>
							<li className="pb-2">
								● Collaborates with other team members, and backend developers to understand data follow, and APIs and develop new features using various technologies.
							</li>
							<li className="pb-2">
								● Write perform and efficient code and by test using JEST that reduces execution time and loads applications faster.
							</li>
							<li className="pb-2">
								● Always write Javascript(ES6), and TypeScript clean code by following the SOLID principle. Using most of the Higher Order functions and following best practices.
							</li>
						</ul>
					</div>
					<div className="experience__item">
						<h5 className="my-2 text-xl font-semibold">
							Front-End Developer
						</h5>
						<p className="font-semibold">
							<a target="__blank" className="font-semibold text-green-400" href="https://seoaudit.agency">SEO Audit Agency</a> (Mar 2020 - Mar 2022)
						</p>
						<ul className="font-light dark:text-textGray-200">
							<li className="py-2">
								● Write modern, perform, and robust code for
								including new features in SAAS-based software
								which is an SEO Service Software.
							</li>
							<li className="py-2">
								{" "}
								● Create React components to perform and
								visualize dynamic data by maintaining the SRP
								principle. Use Redux for manage state and data.
							</li>
							<li className="py-2">
								{" "}
								● Expend features, refine code, and improve
								processes, producing smoother operations and
								enhancing user engagement.
							</li>
							<li className="py-2">
								{" "}
								● Designing and developing by collaborating with
								UI/UX team to include new features using React,
								Redux, and Python RESTful APIs.
							</li>
							<li className="py-2 pb-0">
								{" "}
								● Launch new features on a weekly and monthly
								basis by uploading them on the server to using
								Docker & GitHub Actions.
							</li>
						</ul>
					</div>
					<div className="mt-8 experience__item">
						<h5 className="text-xl font-semibold my2">
							Junior Front End Developer
						</h5>
						<p className="font-semibold">
							Print Wizard (Apr 2019 - Dec 2020)
						</p>
						<ul className="font-light dark:text-textGray-200">
							<li className="py-2">
								● Worked with a team of three designers to build
								a marketing website and e-commerce platform for
								Print Wizard, an ambitious venture originating.
							</li>
							<li className="py-2">
								● Implemented websites, mobile applications, and
								landing pages from concept through deployment.
							</li>
							<li className="py-2 pb-0">
								● Collaborated with product team members to
								implement new features development.
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* //Languages and Technologies */}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	// const res = await fetch(`${process.env.VERCEL_URL}/api/services`);

	return { props: { endpoint: process.env.VERCEL_URL } };
};

export default index;
