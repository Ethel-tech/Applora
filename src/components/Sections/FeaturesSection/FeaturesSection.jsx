import React from "react";
import "../section-styles.scss";
import chatSupport from "../../../assets/images/ChatSupport.svg";
import taskExecution from "../../../assets/images/TaskExecution.svg";
import invoicing from "../../../assets/images/invoicing.svg";
import projectExecution from "../../../assets/images/ProjectExecution.svg";
import streamline from "../../../assets/images/steamlineExpertise.svg";
import eclipse from "../../../assets/images/Ellipse 65.svg";
import Pricing from "./Pricing";
import Community from "./Community";

function FeaturesSection() {
	return (
		<section id="Features" className="py-20 text-lg ">
			<div className="center-text mx-20 max-lg:mx-10">
				<div className="center-text-div max-lg:w-auto">
					<h2>Our Professional Skills And Experiences</h2>
					<p>
						Our team of experienced professionals are dedicated to empowering
						product designers and innovative companies. With diverse range of
						skills and expertise, we are equipped to support your success.
					</p>
				</div>
			</div>
			<div className="flex-div max-lg:block max-lg:mx-10 mt-20 mx-20">
				<div className="flex-div-one max-lg:w-auto">
					<img
						src={streamline}
						alt="Stramline expertise"
						className="object-cover"
					/>
				</div>
				<div className="flex-div-two max-lg:w-auto pt-16">
					<h2>Streamline your Expertise with our advanced features</h2>
					<p className="mt-10">
						Our advanced features saves you time and helps you effectively
						locate our skill sets quickly and find the most relevant for your
						projects.
					</p>
					<ul className="ul-list-img mt-10 ">
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span className="list-span">
								Creating and Implementing Design Systems
							</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span className="list-span">Cross Functional Collaborations</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span className="list-span">Responsive and Adaptive Designs</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span className="list-span">Wireframing and Prototyping</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-1/2 mt-20 mx-20 max-lg:mx-10 max-lg:w-auto">
				<h2>Turn alomost any task into an automated workflow</h2>
			</div>
			<div className="flex-div mt-20 mx-20 max-lg:mx-10">
				<div className="flex-div-one w-1/2">
					<img
						src={projectExecution}
						alt="Project Execution"
						className="object-cover"
					/>
				</div>
				<div className="flex-div-two pt-16 w-1/2">
					<h2>Project Execution</h2>
					<p className="mt-10">
						At Applora we understand the importance of effective project
						management in bringing product design visions to life. We expertly
						guide projects from start to finish ensuring timely, within budget
						and high quality delivery.
					</p>
					<ul className="ul-list-img mt-10">
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>
								Task Ceation: Create and assign tasks to team members.
							</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>
								Subtasks: Break-down tasks into smaller, manageable parts.
							</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Task Prioritization: Set priority levels for tasks.</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Due Dates: Assign deadline to tasks.</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex-div mt-20 mx-20 max-lg:mx-10 flex-row-reverse">
				<div className="flex-div-one w-1/2">
					<img
						src={taskExecution}
						alt="Task Execution"
						className="object-cover pl-10"
					/>
				</div>
				<div className="flex-div-two pt-28 w-1/2">
					<h2>Task Execution</h2>
					<p className="mt-10">
						We believe that efficient task management is crucial for a
						successful product design projects. At Applora, our experts help you
						prioritise, organise and complete tasks with ease.
					</p>
					<ul className="ul-list-no-img mt-10">
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Task Dependencies.</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Status Tracking</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Task Comments and Notes</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Attachment and File Sharing</span>
						</li>
						<li className="flex gap-3">
							<img src={eclipse} alt="list style type eclipse" />
							<span>Task Views</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="time-tracking center-text mt-20 max-lg:py-10  py-20">
				<div className="center-text-div max-lg:w-4/5">
					<h2>Time Tracking</h2>
					<p>
						Time tracking can be essential for various tasks and projects to
						monitor productivity, ensure accurate billing, and improve time
						management.
					</p>
				</div>
			</div>
			<div className="flex-div mt-20 mx-20  max-lg:mx-10">
				<div className="flex-div-one w-1/2">
					<img src={invoicing} alt="Invoicing" className="object-cover" />
				</div>
				<div className="flex-div-two max-lg:pt-16 pt-28  w-1/2">
					<h2>Invoicing</h2>
					<p className="mt-10 max-lg:mt-4">
						Applora understands the importance of effective and secure invoicing
						for freelancers and businesses. Our platform provides a streamlined
						invoicing process and ensuring timely and accurate payments.
					</p>
				</div>
			</div>
			<div className="flex-div mt-20 mx-20 max-lg:mx-10 flex-row-reverse">
				<div className="flex-div-one w-1/2">
					<img
						src={chatSupport}
						alt="Task Execution"
						className="object-cover pl-10"
					/>
				</div>
				<div className="flex-div-two self-center w-1/2">
					<h2>Chat Support</h2>
					<p className="mt-10">
						We are committed to providing top notch support to our users. Our
						live chat support team is available to assist you with any
						questions, concerns or feedbacks you may have.
					</p>
				</div>
			</div>
			<Pricing />
			<Community />
		</section>
	);
}

export default FeaturesSection;
