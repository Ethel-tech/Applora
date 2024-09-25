import React, { useEffect, useState } from "react";
import "./dashboard-styles.scss";
import notes from "../../assets/notes.svg";
import ProgressBar from "@ramonak/react-progress-bar";

function Tasks() {
	const [isOpen, setIsOpen] = useState(false);
	const [taskDetails, setTaskDetails] = useState({
		assignedTasks: "",
		projects: "",
		startDate: "",
		currentStatus: "",
		completion: "",
	});
	const [tasks, setTasks] = useState([]);

	//handle task input
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTaskDetails({ ...taskDetails, [name]: value });
	};

	const handleAddTask = (e) => {
		e.preventDefault();
		const updatedTasks = [...tasks, taskDetails];
		setTasks(updatedTasks);
		setTaskDetails({
			assignedTasks: "",
			projects: "",
			startDate: "",
			currentStatus: "",
			completion: "",
		});
		setIsOpen(false);
	};

	return (
		<section
			id="tasks"
			className="task-section mobile-tab-width pt-20 mt-10 px-8 md:max-lg:px-8 md:px-14 mt-22 relative"
		>
			<div className="flex justify-end mb-4">
				<button
					onClick={() => setIsOpen(true)}
					className="bg-[#F66030] text-white py-2 px-4 font-bold text-xl"
				>
					Add Tasks
				</button>
			</div>
			{isOpen && (
				<div className="popup task-popup ">
					<h2>Add Task</h2>
					<form onSubmit={handleAddTask}>
						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Assigned Tasks</label>
							<input
								type="text"
								name="assignedTasks"
								value={taskDetails.assignedTasks}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Project</label>
							<input
								type="text"
								name="projects"
								value={taskDetails.projects}
								onChange={handleInputChange}
								required
							/>
						</div>

						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Start</label>
							<input
								type="date"
								name="startDate"
								value={taskDetails.startDate}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Status</label>
							<input
								type="text"
								name="currentStatus"
								value={taskDetails.currentStatus}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Completion</label>
							<input
								type="text"
								name="completion"
								value={taskDetails.completion}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="flex flex-col md:flex-row max-md:mt-4 gap-5 popup-input-btn ">
							<button type="submit" className="bg-[#007bff] p-4 text-[white]">
								Add
							</button>
							<button
								type="button"
								className="bg-[#f66030] p-4 text-[white]"
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
			<div>
				<div className="flex gap-3 items-center text-white font-bold bg-[#85c1e9] py-6 px-8 rounded-t-[20px]">
					<img src={notes} alt="notes" />
					<h3>My Tasks</h3>
				</div>
				<div className="task-section-table-div relative overflow-x-auto rounded-b-[20px]">
					<table className="w-full text-base text-left rtl:text-right text-[#09223e] bg-white mb-32">
						<thead className="text-xl font-bold">
							<tr>
								<th scope="col" className="px-6 py-8">
									Assigned Tasks
								</th>
								<th scope="col" className="px-6 py-8">
									Projects
								</th>
								<th scope="col" className="px-6 py-8">
									Start Date
								</th>
								<th scope="col" className="px-6 py-8">
									Status
								</th>
								<th scope="col" className="px-6 py-8">
									Completion
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Customer's story
								</td>
								<td className="px-6 py-4">Applora</td>
								<td className="px-6 py-4">July 23, 2024</td>
								<td className="px-6 py-4 text-[#007bff]">Working</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">50%</span>
											<span>
												<ProgressBar
													completed={50}
													customLabel={" "}
													height="0.5rem"
													width="5rem"
													bgColor="#FFA500"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									User Research
								</td>
								<td className="px-6 py-4">Jira</td>
								<td className="px-6 py-4">Aug 3, 2024</td>
								<td className="px-6 py-4 text-[#E90E0E]">Canceled</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">10%</span>
											<span>
												<ProgressBar
													completed={10}
													bgColor="#F71111"
													customLabel={" "}
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Info Architecture
								</td>
								<td className="px-6 py-4">Worksmart</td>
								<td className="px-6 py-4">Sept 15, 2024</td>
								<td className="px-6 py-4 text-[#24AB0E]">Complete</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">100%</span>
											<span>
												<ProgressBar
													completed={100}
													customLabel={" "}
													bgColor="#24AB0E"
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Lo-Fi wireframes
								</td>
								<td className="px-6 py-4">Asana</td>
								<td className="px-6 py-4">Dec 12, 2024</td>
								<td className="px-6 py-4 text-[#24AB0E]">Complete</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">100%</span>
											<span>
												<ProgressBar
													completed={100}
													bgColor="#24AB0E"
													customLabel={" "}
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Customer's story
								</td>
								<td className="px-6 py-4">Applora</td>
								<td className="px-6 py-4">July 23, 2024</td>
								<td className="px-6 py-4 text-[#007bff]">Working</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">50%</span>
											<span>
												<ProgressBar
													completed={50}
													customLabel={" "}
													bgColor="#FFA500"
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							{tasks.map((task, index) => (
								<tr className="bg-white ">
									<td
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
									>
										{task.assignedTasks}
									</td>
									<td className="px-6 py-4">{task.projects}</td>
									<td className="px-6 py-4">{task.startDate}</td>
									<td className="px-6 py-4 text-[#007bff]">
										{task.currentStatus}
									</td>
									<td className="px-6 py-4 ">
										<div className="flex items-center">
											<div className="inline-flex gap-3  items-center justify-center">
												<span className="text-[#007bff]">50%</span>
												<span>
													<ProgressBar
														completed={50}
														customLabel={" "}
														bgColor="#FFA500"
														height="0.5rem"
														width="5rem"
													/>
												</span>
											</div>
										</div>
									</td>
								</tr>
							))}
							{/* 
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									User Research
								</td>
								<td className="px-6 py-4">Jira</td>
								<td className="px-6 py-4">Aug 3, 2024</td>
								<td className="px-6 py-4">Not Started</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">0%</span>
											<span>
												<ProgressBar
													completed={0}
													customLabel={" "}
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Info Architecture
								</td>
								<td className="px-6 py-4">Worksmart</td>
								<td className="px-6 py-4">Sept 15, 2024</td>
								<td className="px-6 py-4 text-[#24AB0E]">Complete</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">100%</span>
											<span>
												<ProgressBar
													completed={100}
													customLabel={" "}
													bgColor="#24AB0E"
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr className="bg-white ">
								<td
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
								>
									Lo-Fi wireframes
								</td>
								<td className="px-6 py-4">Asana</td>
								<td className="px-6 py-4">Dec 12, 2024</td>
								<td className="px-6 py-4 text-[#24AB0E]">Complete</td>
								<td className="px-6 py-4 ">
									<div className="flex items-center">
										<div className="inline-flex gap-3  items-center justify-center">
											<span className="text-[#007bff]">100%</span>
											<span>
												<ProgressBar
													completed={100}
													bgColor="#24AB0E"
													customLabel={" "}
													height="0.5rem"
													width="5rem"
												/>
											</span>
										</div>
									</div>
								</td>
							</tr> */}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

export default Tasks;
