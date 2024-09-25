import React from "react";
import CustomButton from "../../customs/CustomButtons";
import lady from "../../../assets/images/lady.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();
	return (
		<section className="h-full lg:mt-20 md:mt-32 mt-24 px-24 py-14 max-md:px-10 bg-[#85C1E9] text-[#09223E] text-base">
			<div className="flex gap-32 max-md:block">
				<div className="w-7/12 self-center max-md:w-auto">
					<div>
						<h1 className="text-[#0C335E] leading-snug text-5xl max-md:text-2xl font-semibold ">
							Automate your workflow with Applora
						</h1>
						<p className="mt-7">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation. 
						</p>
						<p className="mt-7">Start automating today - it's free</p>
						<div className="mt-7">
							<CustomButton
								txtColor="#09223E"
								bgColor="#F66030"
								btnText="Sign Up"
								onClick={() => {
									navigate("/sign-up");
								}}
							/>
						</div>
						<p className="mt-7">
							Learn more about Applora&#39;s plans and pricing
						</p>
					</div>
				</div>
				<div className="w-2/5 hidden md:block">
					<img src={lady} alt="lady typing" style={{ objectFit: "cover" }} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
