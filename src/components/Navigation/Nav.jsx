import { IoClose, IoMenu } from "react-icons/io5";
import applora from "../../assets/images/Applora.svg";
import "./navigation.scss";
import CustomButton from "../customs/CustomButtons";

function Nav({ navbarOpen, setNavbarOpen }) {
	return (
		<nav className="navigation bg-white flex p-10 px-20 items-center justify-between text-xl font-normal text-['#0C335E']">
			<div className="navigation-logo">
				<img src={applora} alt="logo" className="logo" />
			</div>
			<div id="menu-items" className="w-7/12 flex justify-between">
				<div className="navigation-list-div content-center w-2/5 ">
					<ul className="navigation-list list-none m-0 p-0 overflow-hidden flex justify-between ">
						<li className="navigation-list-link">Home</li>
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
				className="md:hidden"
				id="navigation-toggle"
				onClick={() => {
					setNavbarOpen(!navbarOpen);
				}}
			>
				<IoMenu />
			</button>
		</nav>
	);
}

export default Nav;
