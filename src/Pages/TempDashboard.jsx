import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../auth/firebase";
import CustomButton from "../components/customs/CustomButtons";
import Logout from "../components/Logout";

function TempDashboard() {
	const location = useLocation();
	const { displayName } = location.state || {};

	const [user, setUser] = useState(null);
	useEffect(() => {
		const getUser = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return () => getUser();
	}, [user]);

	return (
		<div className="h-screen text-center flex justify-center text-[white] bg-[#007BFF] items-center">
			{user ? (
				<div>
					<h1>Hi {displayName}, dasboard is coming soon </h1>
					<div className="mt-5">
						<Logout />
					</div>
				</div>
			) : (
				<h1>User Signed out</h1>
			)}
		</div>
	);
}

export default TempDashboard;
