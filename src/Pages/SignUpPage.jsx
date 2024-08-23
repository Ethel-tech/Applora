import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/Layout/LoginLayout";
import CustomInput from "../components/customs/CustomInput";
import CustomButton from "../components/customs/CustomButtons";
import SignUpImg from "../assets/images/SigUpImg.svg";

function SignUp() {
	return (
		<LoginLayout
			imgSrc={SignUpImg}
			imgAlt="Girl operating her laptop"
			bgCol="#85c1e933"
		>
			<div className="flex flex-col gap-5 text-[#09223e] text-xl font-bold max-sm:text-base">
				<div className=" flex flex-col  w-auto">
					<h4 className="font-semibold text-[#0c335e] lg:text-5xl max-sm:text-3xl md:text-3xl">
						Create your account
					</h4>
					<p className="mt-3 font-normal w-auto">
						Enter your details below to create your account and get started with
						Applora.
					</p>
				</div>
			</div>
			<form>
				<div className="pt-6 flex flex-col gap-7">
					<div>
						<CustomInput
							name="fullname"
							type={"text"}
							label={"Full Name*"}
							placeholder={"Enter your full name"}
						/>
					</div>
					<div>
						<CustomInput
							name="email"
							type={"text"}
							label={"Email Address*"}
							placeholder={"Enter yoour email"}
						/>
					</div>
					<div>
						<CustomInput
							name="password"
							type={"password"}
							label={"Password*"}
							placeholder={"***********"}
						/>
					</div>

					<div className="mt-5">
						<CustomButton
							type={"submit"}
							btnText="Sign Up"
							width="100%"
							bgColor="#F66030"
							txtColor="white"
						/>
					</div>
					<div>
						<p>
							Already have an account?
							<Link to="/login" className="text-[#007bff] font-bold">
								Log In
							</Link>
						</p>
					</div>
				</div>
			</form>
		</LoginLayout>
	);
}

export default SignUp;
