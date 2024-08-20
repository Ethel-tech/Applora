import applora from "../../../assets/images/Applora.svg";
import "./navigation.scss";
import CustomButton from "../../customs/CustomButtons";

function Nav({ navbarOpen, setNavbarOpen }) {
	return (
		<nav className="navigation bg-white flex p-10 md:max-lg:px-10 px-20 max-sm:px-7 max-sm:p-7  items-center justify-between text-xl font-normal text-['#0C335E']">
			<div className="navigation-logo flex-grow z-20">
				<img src={applora} alt="logo" className="logo" />
			</div>
			<div id="menu-items" className="w-7/12 flex justify-between md:max-lg">
				<div className="navigation-list-div content-center w-2/5 md:max-lg:w-auto">
					<ul className="navigation-list list-none m-0 p-0 overflow-hidden flex md:max-lg:gap-5 justify-between ">
						<a href="#Features">
							<li className="navigation-list-link">Home</li>
						</a>
						<li className="navigation-list-link">About</li>
						<li className="navigation-list-link">Service</li>
					</ul>
				</div>
				<div className="navigation-btn flex gap-5 font-bold">
					<CustomButton btnText="Login" />
					<CustomButton
						btnText="Sign Up"
						txtColor="#ffffff"
						bgColor="#007BFF"
					/>
				</div>
			</div>

			<button
				className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
				id="navigation-toggle"
				onClick={() => {
					setNavbarOpen(!navbarOpen);
				}}
			>
				<div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
					<span
						className={`absolute h-0.5 w-5 bg-[#58b5ef] transform transition duration-300 ease-in-out ${
							navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
						}`}
					></span>
					<span
						className={`absolute h-0.5 bg-[#58b5ef] transform transition-all duration-200 ease-in-out ${
							navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
						}`}
					></span>
					<span
						className={`absolute h-0.5 w-5 bg-[#58b5ef] transform transition duration-300 ease-in-out ${
							navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
						}`}
					></span>
				</div>
			</button>
		</nav>
	);
}

export default Nav;
