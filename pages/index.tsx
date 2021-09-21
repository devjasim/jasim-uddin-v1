import Bar from "../components/Bar";
import { languages, tools } from "../data";

const index = () => {
	return (
		<div style={{ height: "100%" }} className="p-4 overflow-y-auto">
			<div className="grid gap-6 md:grid-cols-2">
				<div className="single__items">
					<div className="items">
						<h4 className="my-3 text-2xl font-semibold">
							Education
						</h4>
						<div className="">
							<h5 className="text-xl font-semibold my2">
								Diploma in Computer Science
							</h5>
							<p className="font-semibold">
								Academy of Technologies (2015-2019)
							</p>
							<p className="my-3 font-light dark:text-textGray-200">
								I completed my Diploma in Computer Science from
								a Reputed Institue in Bangladesh.
							</p>
						</div>
					</div>
					<div className="items">
						<div className="education">
							<h5 className="text-xl font-semibold my2">
								Computer Science and Engineering
							</h5>
							<p className="font-semibold">
								Academy of Technologies (2021-present)
							</p>
							<p className="my-3 font-light dark:text-textGray-200">
								I&apos;m studying at Bangladesh University of
								Business and Technology in 1&apos;st year. The
								expected completion date is 2023.
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
						<h5 className="text-xl font-semibold my2">
							Front-End Software Engineer
						</h5>
						<p className="font-semibold">
							SEO Audit Agency (Mar 2020 - Present)
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
							Front End Developer
						</h5>
						<p className="font-semibold">
							Stack Learner (Mar 2021 - Aug 2021)
						</p>
						<ul className="font-light dark:text-textGray-200">
							<li className="py-2">
								● Worked on building new React components for
								the customer-facing web app which improved the
								time on page for the average user by 2 minutes.
							</li>
							<li className="py-2">
								● Worked within an agile team and helped
								prioritize and scope feature requests to ensure
								that the biggest impact features were worked on
								first.
							</li>
							<li className="py-2 pb-0">
								● Design and developed applications using
								top-notch technologies like React, Redux,
								Next.js, TypeScript etc.
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

export default index;
