import React from "react";
import logo from "../../assets/images/Applora.svg";
import "./layout-styles.scss";

const LoginLayout = ({ children, imgSrc, imgAlt = "", bgCol = "", bgImg }) => {
	return (
		<div className="w-full pl-5 md:px-24 lg:pl-16 xl:pl-32 h-full align-center justify-center flex flex-col lg:flex-row">
			<div className=" lg:w-1/2 w-full relative h-screen md:place-content-start md:py-24 pr-10 lg:py-10 max-sm:pt-14 ">
				<div className="flex justify-center lg:justify-start ">
					<a href="/">
						<img className=" md:w-48 w-40" src={logo} alt="logo" />
					</a>
				</div>
				<div className="lg:mt-20 mt-10  align-middle  w-full justify-center  flex flex-col ">
					{children}
				</div>
			</div>
			<div
				style={{
					backgroundColor: bgCol,
					backgroundImage: `url(${bgImg})`,
				}}
				className=" w-[50%] hidden lg:flex h-screen overflow-hidden img-div flex justify-center items-center"
			>
				<img
					style={{
						objectFit: "contain",
						maxHeight: "500px",
					}}
					src={imgSrc}
					alt={imgAlt}
				/>
			</div>
		</div>
	);
};

export default LoginLayout;
