import React from "react";
import CustomButton from "../../customs/CustomButtons";
import lady from "../../../assets/images/lady.svg";

function Hero() {
	return (
		<section className="h-full max-sm:px-10 px-24 py-14 bg-[#85C1E9] text-[#09223E] text-base">
			<div className="flex gap-32">
				<div className="w-7/12 self-center max-sm:w-screen">
					<div>
						<h1 className="text-[#0C335E] leading-snug text-5xl max-sm:text-xl max-sm:leading-tight font-semibold">
							Automate your workflow with Applora
						</h1>
						<p className="mt-7 max-sm:text-justify">
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
							/>
						</div>
						{/* <p className="mt-7">
							Learn more about Applora&#39;s plans and pricing
						</p> */}
					</div>
				</div>
				<div className="w-2/5 max-sm:hidden">
					<img src={lady} alt="lady typing" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
