import React from "react";
import CustomButton from "../../customs/CustomButtons";
import heroimg from "../../../assets/images/heroimg.svg";
import CustomInput from "../../customs/CustomInput";
import "./hero.scss";

function LandHero() {
	return (
		<section className="hero-bg md:pb-12 lg:mt-36 md:mt-32 mt-24 h-full px-24 max-md:py-10 max-md:px-10 bg-white text-[#09223E] text-base">
			<div className="flex lg:flex-row md:flex-col md:gap-20 lg:gap-32 max-md:block max-md:w-auto">
				<div className="lg:w-2/5 order-2 w-auto self-center">
					<div>
						<h1 className="text-[#0C335E] leading-snug text-4xl max-md:text-2xl font-normal ">
							<span className="text-[#007BFF] text-5xl max-md:text-3xl font-bold pr-4">
								Streamline
							</span>
							your workflow with all-in-One Platform
						</h1>
						<p className="mt-7 w-10/12">
							Simplify your workflow with a single integrated solution that will
							boost productivity with a comprehensive all in one platform to
							consolidate your tools and streamline your workflow
						</p>
						<div className="md:flex block gap-5 mt-10">
							<div className="basis-3/4">
								<CustomInput placeholder="Enter your email" bgCol="#E7F3FB" />
							</div>
							<div className="w-auto w-full basis-1/4 max-md:mt-5">
								<CustomButton
									txtColor="#09223E"
									bgColor="#F66030"
									btnText="Sign Up"
									width="100%"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 order-1 w-auto hidden md:block">
					<img src={heroimg} alt="lady typing" />
				</div>
			</div>
		</section>
	);
}

export default LandHero;
