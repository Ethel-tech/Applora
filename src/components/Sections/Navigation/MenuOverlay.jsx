import React from "react";
import { IoClose } from "react-icons/io5";
import CustomButton from "../../customs/CustomButtons";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			} `}
		>
			<div>
				<ul className="mt-10 flex flex-col items-start text-[#85C1E9]">
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						<li className="text-[#85C1E9]">Home</li>
					</a>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						<li>About</li>
					</a>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setNavbarOpen(false);
						}}
					>
						<li>Services</li>
					</a>
					<div className="flex gap-10 mt-10">
						<CustomButton btnText="Login" bgColor="white" txtColor="#85C1E9" />
						<CustomButton
							btnText="Sign Up"
							bgColor="#85C1E9"
							txtColor="white"
						/>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default MenuOverlay;
