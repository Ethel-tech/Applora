import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginLayout from "../components/Layout/LoginLayout";
import CustomInput from "../components/customs/CustomInput";
import CustomButton from "../components/customs/CustomButtons";
import SignUpImg from "../assets/images/SigUpImg.svg";
import { Field, Form, Formik } from "formik";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp() {
	const navigate = useNavigate();
	const initialValues = { fullname: "", email: "", password: "" };

	const validate = (values) => {
		const errors = {};
		if (!values.fullname) {
			errors.fullname = "Fullname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}

		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 8) {
			errors.password = "Password must be at least 8 characters";
		}
		console.log(errors);
		return errors;
	};

	const onSubmit = async (values, { setSubmitting, setErrors }) => {
		try {
			console.log("Email", values.email);
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);
			console.log(values.email);
			const user = userCredential.user;
			await updateProfile(user, { displayName: values.fullname });
			navigate("/dashboard", {
				state: {
					displayName: values.fullname,
					displayEmail: values.email,
				},
			});
		} catch (error) {
			setErrors({ general: error.message });
			console.log("Error Signing Up", error);
		}
		setSubmitting(false);
	};

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
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validate={validate}
			>
				{({ isSubmitting, errors }) => (
					<Form>
						<div className="pt-6 flex flex-col gap-7">
							<div>
								<CustomInput
									name="fullname"
									type={"text"}
									label={"Full Name*"}
									placeholder={"Enter your full name"}
								/>
								{/* <Field
									type="text"
									name="fullname"
									placeholder="Enter fullname"
								/> */}
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
							{errors.general && <div>{errors.general}</div>}
							<div className="mt-5">
								<CustomButton
									type={"submit"}
									btnText="Sign Up"
									width="100%"
									bgColor="#F66030"
									txtColor="white"
									disabled={isSubmitting}
								/>
							</div>
							<div>
								<p>
									Already have an account?{" "}
									<Link to="/login" className="text-[#007bff] font-bold">
										Log In
									</Link>
								</p>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</LoginLayout>
	);
}

export default SignUp;
