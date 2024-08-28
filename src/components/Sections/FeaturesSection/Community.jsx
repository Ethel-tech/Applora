import React from "react";
import CustomInput from "../../customs/CustomInput";
import CustomButton from "../../customs/CustomButtons";
import "../../Sections/section-styles.scss";

function Community() {
	return (
		<section className="community pt-28 flex items-center justify-center content-center">
			<div className="lg:w-[80%]">
				<div className="text-center mb-8">
					<h2 className="text-white text-5xl">Join Our Applora Community</h2>
				</div>
				<div className="border-white border-[5px] flex lg:flex-row flex-col gap-5 lg:gap-16 w-auto p-3">
					<div className="lg:w-4/5">
						<CustomInput
							bgCol="#d9d9d9cc"
							borderCol="white"
							borderStyle="solid"
							borderWidth="5px"
							borderRad="0px"
							placeholder="Enter your email"
						/>
					</div>
					<div className="lg:w-1/5">
						<CustomButton
							btnText="Sign Up"
							bgColor="#f66030"
							txtColor="#353535"
							fontSize="1.5rem"
							borderRad="0px"
							paddingLeft="3%"
							paddingRight="3%"
							width="100%"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Community;