import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "./customs/CustomInput";
import CustomButton from "./customs/CustomButtons";

function Logout() {
	const auth = getAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/login");
			console.log("User Signed out Successfully");
		} catch (error) {
			console.error("Error occured signing out", error);
		}
	};
	return (
		<CustomButton
			btnText="Logout"
			fontSize="22px"
			txtColor="#F66030"
			onClick={handleLogout}
			paddingLeft="0"
			fontWeight="700"
		/>
	);
}

export default Logout;