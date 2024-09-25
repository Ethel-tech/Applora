import React from "react";
import Header from "./DasboardComponents/Header";
import ProgressTab from "./DasboardComponents/ProgressTab";
import Tasks from "./DasboardComponents/Tasks";
import CalendarSection from "./DasboardComponents/CalendarSection";

function UserPage({ displayName }) {
	return (
		<>
			<Header displayName={displayName} />
			<ProgressTab />
			<Tasks />
			<CalendarSection />
		</>
	);
}

export default UserPage;
