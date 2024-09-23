import React from "react";
import { Icon } from "@iconify/react";
import Woman from "../../assets/Woman.png";

import { Button, Dropdown } from "flowbite-react";

function Sidebar() {
	return (
		<div>
			<div class="fixed flex flex-col top-22 left-0 w-1/5 md:max-lg:w-48  md:w-64 bg-[#85C1E9] z-10 h-full transition-all duration-300 border-none">
				<div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
					<ul class="flex flex-col py-4 space-y-0">
						<li class="px-5 hidden md:block">
							<div class="flex flex-row items-center h-8 mt-2">
								<div class="text-2xl font-bold tracking-wide text-[#007BFF]">
									Applora
								</div>
							</div>
						</li>

						{/* dashboard */}
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 mt-6 mb-2 focus:outline-none text-white-600 mx-2 bg-[#F66030] rounded-md"
							>
								<span class="inline-flex justify-center items-center ml-5 text-[#09223E]">
									<Icon icon="bxs:dashboard" style={{ fontSize: "23px" }} />
								</span>
								<h2 className="font-medium mx-3 mt-1 text-white">Dashboard</h2>
							</a>
						</li>
						<hr class="border-1 border-[#000000] w-50 mt-8 gap-8" />
						{/* end of dashboard */}

						{/* task and billing */}
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center text-[#09223E] hover:text-[#F66030] mb-8 h-10 focus:outline-none  border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon
										icon="material-symbols-light:task-outline"
										style={{ fontSize: "23px" }}
									/>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">Tasks</span>
								<span class="hidden md:block px-2 py-0.5 ml-auto text-md font-medium tracking-wide text-[#09223E] ">
									8
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center text-[#09223E] hover:text-[#F66030] h-1 mb-4 focus:outline-none border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon
										icon="dashicons:money-alt"
										style={{ fontSize: "23px" }}
									/>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">Billing</span>
							</a>
						</li>
						<hr class="border-1 border-[#000000] w-50 mt-8 gap-8" />
						{/* end of task and billing */}

						{/* reminder, note, team, client */}
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center text-[#09223E] hover:text-[#F66030] h-4 mb-2 mt-4 focus:outline-none border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon
										icon="streamline:notification-alarm-2"
										style={{ fontSize: "23px" }}
									/>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">
									Reminder
								</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="relative flex flex-row items-center text-[#09223E] hover:text-[#F66030] h-4 mb-2 mt-4 focus:outline-none border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon
										icon="ph:note-pencil-thin"
										style={{ fontSize: "23px" }}
									/>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">Notes</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-4 mb-2 mt-4 focus:outline-none text-[#09223E] hover:text-[#F66030]  border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon icon="ri:team-line" style={{ fontSize: "23px" }} />
								</span>
								<div className="mx-3">
									<Dropdown label="Team" inline>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
									</Dropdown>
								</div>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-4 mb-4 mt-4 focus:outline-none text-[#09223E] hover:text-[#F66030] border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon icon="carbon:customer" style={{ fontSize: "23px" }} />
								</span>
								<div className="mx-3">
									<Dropdown label="Clients" inline>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
										<Dropdown.Item>Earnings</Dropdown.Item>
									</Dropdown>
								</div>
							</a>
						</li>
						<hr class="border-1 border-[#000000] w-50 mt-2 gap-8" />
						{/* end of reminder, note, team , client */}

						{/* profile, setting , support */}
						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 mt-2 focus:outline-none text-white-600 text-[#09223E] hover:text-[#F66030] border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										></path>
									</svg>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">
									My Profile
								</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 focus:outline-none text-[#09223E] hover:text-[#F66030] border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">
									Settings
								</span>
							</a>
						</li>

						<li>
							<a
								href="#"
								class="relative flex flex-row items-center h-11 mb-2 focus:outline-none text-[#09223E] hover:text-[#F66030] border-l-4 border-transparent pr-6"
							>
								<span class="inline-flex justify-center items-center ml-5">
									<Icon
										icon="streamline:call-center-support-service"
										style={{ fontSize: "23px" }}
									/>
								</span>
								<span class="ml-3 text-sm tracking-wide truncate">Support</span>
							</a>
						</li>
						{/* end of profile , setting, support */}

						<div className="bg-[#F66030]  items-center w-full h-14 mt-12 pt-2 pb-8 focus:outline-none text-white-600 mx-0 rounded-md">
							<span className="flex flex-1">
								<span class="inline-flex justify-center items-center ml-4 text-[#09223E] border-2 border-white rounded-full">
									<img src={Woman} alt="woman" className="w-6" />
								</span>{" "}
								<h2 className="mx-2 font-medium mt-1 text-white">
									Dorothy Ubuara
								</h2>
							</span>
							<h3 className="mx-3 inset-1/2 font-normal text-center text-white text-sm">
								dorothyubuara@gmail.com
							</h3>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
