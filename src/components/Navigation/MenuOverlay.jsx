import React from "react";
import { IoClose } from "react-icons/io5";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={`${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			} p-10 bg-cyan-400 h-screen`}
		>
			<div
				className=" md:hidden "
				id="navigation-close"
				onClick={() => {
					setNavbarOpen(!navbarOpen);
				}}
			>
				<IoClose />
			</div>
			<ul className="mt-10">
				<li>Home</li>
				<li>About</li>
				<li>Services</li>
			</ul>
			<div className="flex justify-between mt-10">
				<button className="btn1">Login</button>
				<button className="btn2 bg-[#D9D9D9] p-2 rounded">Sign Up</button>
			</div>
		</nav>
	);
};

export default MenuOverlay;

// navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
