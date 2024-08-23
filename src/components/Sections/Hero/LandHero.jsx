import React from "react";
import CustomButton from "../../customs/CustomButtons";
import heroimg from "../../../assets/images/heroimg.svg";
import CustomInput from "../../customs/CustomInput";

function LandHero() {
	return (
		<section className="h-full px-24 py-14 bg-white text-[#09223E] text-base">
			<div className="flex gap-32">
				<div className="w-7/12 self-center">
					<div>
						<h1 className="text-[#0C335E] leading-snug text-5xl font-normal">
							<span className="text-[#007BFF] text-5xl font-semibold pr-4">
								Streamline
							</span>
							your workflow with all-in-One
							<div> Platform</div>
						</h1>
						<p className="mt-7 w-10/12">
							Simplify your workflow with a single integrated solution that will
							boost productivity with a comprehensive all in one platform to
							consolidate your tools and streamline your workflow
						</p>
						<div className="flex mt-4">
							<CustomInput placeholder="Enter your email" />
							<div className="mt-2 justify-center mx-4">
								<CustomButton
									txtColor="#09223E"
									bgColor="#F66030"
									btnText="Sign Up"
								/>
							</div>
						</div>
						<p className="mt-7">
							Learn more about Applora&#39;s plans and pricing
						</p>
					</div>
				</div>
				<div className="w-2/5">
					<img src={heroimg} alt="lady typing" />
				</div>
			</div>
		</section>
	);
}

export default LandHero;
