import React from "react";
import "../section-styles.scss";
import CustomButton from "../../customs/CustomButtons";
import { useNavigate } from "react-router-dom";

function Pricing() {
	const navigate = useNavigate();
	return (
		<section className="p-20 max-sm:px-10 text-lg mt-10">
			<div className="center-text mx-20 max-sm:mx-0 mb-20">
				<div className="center-text-div max-sm:w-auto">
					<h1>Affordable Plans for Every Ambition</h1>
					<p>
						Applora offers a variety of pricing plans to meet your specific
						needs. Whether you&rsquo;re a freelancer, small business, or large
						enterprise, find the right plan that offers the features you need to
						thrive.
					</p>
				</div>
			</div>
			<div className="pricing-div flex max-sm:flex-col max-sm:gap-3 gap-0.5 justify-center">
				<div className="pt-10 bg-[#85C1E9] pl-7 pb-16 max-sm:pb-10 w-80 max-sm:w-auto">
					<p>FREE</p>
					<p className="mt-7">
						$<span className="text-5xl">0</span>USD
					</p>
					<p className="mt-20 max-sm:mt-10">
						Get started with the essentials at no cost. Perfect for individuals
						looking to explore Applora's basic features
					</p>
					<div className="mt-40 max-sm:mt-20">
						<CustomButton
							btnText="Try for Free"
							border="1px solid black"
							fontSize="18px"
							onClick={() => {
								navigate("/sign-up");
							}}
						/>
					</div>
				</div>
				<div className="pt-10 bg-[#F66030] pl-7 pb-16 max-sm:pb-10 w-80 max-sm:w-auto">
					<p>STANDARD</p>
					<p className="mt-7">
						$<span className="text-5xl">5</span>USD
					</p>
					<p className="mt-20 max-sm:mt-10">
						Enhance your productivity with our Standard Plan. Ideal for small
						teams needing more tools and support
					</p>
					<div className="mt-40 max-sm:mt-20">
						<CustomButton
							btnText="Get Started"
							border="1px solid black"
							fontSize="18px"
							onClick={() => {
								navigate("/sign-up");
							}}
						/>
					</div>
				</div>
				<div className="pt-10 bg-[#85C1E9] pl-7 pb-16 max-sm:pb-10 w-80 max-sm:w-auto">
					<p>PREMIUM</p>
					<p className="mt-7">
						$<span className="text-5xl">15</span>USD
					</p>
					<p className="mt-20 max-sm:mt-10">
						Unlock advanced features and premium support. Designed for growing
						businesses that require robust solutions
					</p>
					<div className="mt-40 max-sm:mt-20">
						<CustomButton
							btnText="Get Started"
							border="1px solid black"
							fontSize="18px"
							onClick={() => {
								navigate("/sign-up");
							}}
						/>
					</div>
				</div>
				<div className="pt-10 bg-[#F66030] pl-7 pb-16 max-sm:pb-10 w-80 max-sm:w-auto">
					<p>BUSINESS</p>
					<p className="mt-7">
						$<span className="text-5xl">50</span>USD
					</p>
					<p className="mt-20 max-sm:mt-10">
						Maximize your potential with our comprehensive Business Plan.
						Tailored for large enterprises.
					</p>
					<div className="mt-40 max-sm:mt-20">
						<CustomButton
							btnText="Get Started"
							border="1px solid black"
							fontSize="18px"
							onClick={() => {
								navigate("/sign-up");
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
