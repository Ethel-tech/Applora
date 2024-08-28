import React from "react";
import CustomButton from "../../customs/CustomButtons";
import { Link } from "react-router-dom";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			} `}
		>
			<div>
				<ul className="mt-10 flex flex-col items-start text-[#85C1E9]">
					<Link
						to="/"
						onClick={(e) => {
							setNavbarOpen(false);
						}}
					>
						<li className="text-[#85C1E9]">Home</li>
					</Link>
					<Link
						to="/#about"
						onClick={(e) => {
							setNavbarOpen(false);
						}}
					>
						<li>About</li>
					</Link>
					<Link
						to="/services"
						onClick={(e) => {
							setNavbarOpen(false);
						}}
					>
						<li>Services</li>
					</Link>
					<div className="flex gap-10 mt-10">
						<Link to="/login">
							<CustomButton
								btnText="Login"
								bgColor="white"
								txtColor="#85C1E9"
							/>
						</Link>
						<Link to="/sign-up">
							<CustomButton
								btnText="Sign Up"
								bgColor="#85C1E9"
								txtColor="white"
							/>
						</Link>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default MenuOverlay;
