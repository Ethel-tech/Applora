import React from "react";
import { format, startOfWeek, addDays, isSameDay, getMonth } from "date-fns";
import "./calendar-styles.scss"; // Custom styles

function WeekCalendar() {
	// Get today's date
	const today = new Date();

	// Calculate the start of the current week (Sunday)
	const start = startOfWeek(today, { weekStartsOn: 0 }); // 0 for Sunday as the start of the week

	// Generate an array of dates representing the current week
	const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

	// Get the name of the current month
	const currentMonth = format(today, "MMMM yyyy"); // Format as "Month Year", e.g., "September 2024"

	return (
		<div className="week-calendar max-md:w-full md:max-lg:w-full max-md:p-4">
			<div className="flex max-md:flex-col  justify-between">
				<p>Calendar</p>
				<p>{currentMonth}</p>
			</div>

			<div className="days max-md:justify-normal max-md:flex-wrap max-md:gap-2 ">
				{weekDays.map((day, index) => (
					<div
						key={index}
						className={`day max-md:px-3 ${
							isSameDay(day, today) ? "current-day" : ""
						}`}
					>
						<span className="weekday">{format(day, "EEE")}</span>
						<span className="date">{format(day, "d ")}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default WeekCalendar;
