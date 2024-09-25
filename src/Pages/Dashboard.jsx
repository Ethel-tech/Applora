import React, { useEffect, useState } from "react";
import Sidebar from "../components/DasboardComponents/Sidebar";
import UserPage from "../components/UserPage";
import { Link, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

function Dashboard() {
	const location = useLocation();
	const { displayName } = location.state || {};
	const { displayEmail } = location.state || {};

	console.log("Location state:", location.state); // Debugging

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	const [user, setUser] = useState(null);
	useEffect(() => {
		const getUser = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return () => getUser();
	}, [user]);

	return (
		<div>
			{user ? (
				<div>
					<Sidebar displayEmail={displayEmail} displayName={displayName} />
					<UserPage displayName={displayName} />
				</div>
			) : (
				<div className="h-screen text-center flex justify-center text-[white] bg-[#007BFF] items-center">
					<div>
						<h1>User Signed out</h1>
						<div className="mt-4 w-full flex justify-center ">
							<div className="mt-4 bg-[#F66030] p-4 w-fit rounded">
								<Link to="/login">Log In</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Dashboard;
