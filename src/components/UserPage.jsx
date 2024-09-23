import React from "react";
import Header from "./DasboardComponents/Header";
import ProgressTab from "./DasboardComponents/ProgressTab";
import Tasks from "./DasboardComponents/Tasks";
import CalendarSection from "./DasboardComponents/CalendarSection";

function UserPage() {
	return (
		<>
			<Header />
			<ProgressTab />
			<Tasks />
			<CalendarSection />
		</>
	);
}

export default UserPage;
