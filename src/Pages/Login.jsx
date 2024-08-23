import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "../components/Layout/LoginLayout";
import CustomInput from "../components/customs/CustomInput";
import CustomButton from "../components/customs/CustomButtons";
import LoginImg from "../assets/images/LoginImg.svg";
import Background from "../assets/images/LoginBg.svg";

function Login() {
	return (
		<LoginLayout
			imgSrc={LoginImg}
			imgAlt="Girl operating her tab"
			bgImg={Background}
		>
			<div className="flex flex-col gap-5 text-[#09223e] text-xl font-bold">
				<div className=" flex flex-col text-center whitespace-nowrap">
					<span className="font-semibold text-[#0c335e] lg:text-6xl">
						Welcome Back
					</span>
					<p className="mt-3 font-normal">Please enter your details</p>
				</div>
			</div>
			<form>
				<div className="pt-6 flex flex-col gap-7">
					<div>
						<CustomInput
							name="username"
							type={"text"}
							label={"Email Address*"}
							placeholder={"applora@yahoo.com"}
							bgCol="#eeecec"
						/>
					</div>
					<div>
						<CustomInput
							name="password"
							type={"password"}
							label={"Password*"}
							placeholder={"***********"}
							bgCol="#eeecec"
						/>
					</div>
					<div className="flex justify-between ">
						<div className="flex gap-2 items-center">
							<input type="checkbox" style={{ backgroundColor: "#eeecec" }} />
							<label className="font-normal"> Remember me</label>
						</div>
						<div className="font-boldtext-[#002885] underline underline-offset-4">
							{" "}
							<Link className="font-normal"> Forgotten Password?</Link>
						</div>
					</div>
					<div className="mt-5">
						<CustomButton
							type={"submit"}
							btnText="Log In"
							width="100%"
							bgColor="#F66030"
							txtColor="white"
						/>
					</div>
					<div>
						<p className="text-base font-normal" style={{ color: "#858585" }}>
							By continuing you agree to Applora terms of service and Privacy
							Policy
						</p>
					</div>
				</div>
			</form>
			<div className="text-base font-normal text-center absolute bottom-9 self-center justify-self-center items-center justify-items-center justify-center place-content-center">
				<p>
					New to Applora?{" "}
					<Link to="/sign-up" className="text-[#007bff] font-bold">
						Sign Up
					</Link>
				</p>
			</div>
		</LoginLayout>
	);
}

export default Login;
