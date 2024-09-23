import React from "react";
import Sidebar from "../components/DasboardComponents/Sidebar";
import { Link } from "react-router-dom";
import Header from "../components/DasboardComponents/Header";
import UserPage from "../components/UserPage";

function Dashboard() {
	return (
		<div>
			<Sidebar />
			<UserPage />
		</div>
	);
}

export default Dashboard;
