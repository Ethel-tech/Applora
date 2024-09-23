import React from "react";
import "./dashboard-styles.scss";
import WeekCalendar from "./Calendar Component/WeekCalendar";
import NewMeeting from "./Meeting Component/NewMeeting";

function CalendarSection() {
	return (
		<section className="calendar-section mobile-tab-width mb-10 pt-20 px-6 md:max-lg:px-8 md:px-14 mt-22">
			<div className="flex flex-col gap-16  lg:flex-row">
				<WeekCalendar />
				<NewMeeting />
			</div>
		</section>
	);
}

export default CalendarSection;
