import React, { useEffect, useState } from "react";
import "./meeting-style.scss";

const NewMeeting = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [meetingDetails, setMeetingDetails] = useState({
		date: "",
		time: "",
		subject: "",
		with: "",
	});
	const [meetings, setMeetings] = useState([]);

	// //load meetings from localStorage when the component mounts
	// useEffect(() => {
	// 	const savedMeetings = JSON.parse(localStorage.getItem("meetings"));
	// 	console.log("Meetings loaded from localStorage:", savedMeetings);

	// 	if (savedMeetings) {
	// 		console.log("Loaded meetings from localStorage:", savedMeetings);
	// 		setMeetings(savedMeetings);
	// 	}
	// }, []);

	// //Update localStorage whenever the meetings state changes
	// useEffect(() => {
	// 	localStorage.setItem("meetings", JSON.stringify(meetings));
	// 	console.log("Updated localStorage with meetings:", meetings);
	// }, [meetings]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setMeetingDetails({ ...meetingDetails, [name]: value });
	};

	const handleAddMeeting = (e) => {
		e.preventDefault();
		const updatedMeetings = [...meetings, meetingDetails];
		setMeetings(updatedMeetings);
		setMeetingDetails({ date: "", time: "", subject: "", with: "" });
		setIsOpen(false);
	};

	return (
		<div className="add-meeting flex flex-col lg:flex-row lg:w-3/5 w-full md:max-lg:w-full">
			<div
				onClick={() => setIsOpen(true)}
				className="add-meeting-btn flex flex-col gap-6 max-md:w-full md:max-lg:w-full text-2xl font-bold"
			>
				<p className="text-5xl">+</p>
				<p>Add Meeting</p>
			</div>

			{isOpen && (
				<div className="popup">
					<h2>Add Meeting</h2>
					<form onSubmit={handleAddMeeting}>
						<div className="flex md:flex-row flex-col gap-2 md:gap-5 ">
							<div className="flex flex-col text-left gap-2 mb-4 popup-input">
								<label>Select Date</label>
								<input
									type="date"
									name="date"
									value={meetingDetails.date}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="flex flex-col text-left gap-2 mb-4 popup-input">
								<label>Select Time</label>
								<input
									type="time"
									name="time"
									value={meetingDetails.time}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>

						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Enter Subject</label>
							<textarea
								type="text"
								name="subject"
								rows={5}
								value={meetingDetails.subject}
								onChange={handleInputChange}
								placeholder="Meeting Subject"
								required
							></textarea>
						</div>
						<div className="flex flex-col text-left gap-2 mb-4 popup-input">
							<label>Enter with who</label>
							<input
								type="text"
								name="with"
								value={meetingDetails.with}
								onChange={handleInputChange}
								placeholder="With"
								required
							/>
						</div>
						<div className="flex flex-col md:flex-row max-md:mt-4 gap-5 popup-input-btn ">
							<button type="submit" className="bg-[#007bff] p-4 text-[white]">
								Add
							</button>
							<button
								type="button"
								className="bg-[#f66030] p-4 text-[white]"
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}

			<div className="meeting-list w-full lg:ml-6 md:max-lg:mt-6 flex flex-wrap gap-5 ">
				{meetings.map((meeting, index) => (
					<div key={index} className="meeting-list-div max-md:w-full">
						<p className="meeting-list-div-time">{meeting.time}</p>
						<p className="meeting-list-div-date">{meeting.date}</p>
						<p className="meeting-list-div-topic">{meeting.subject}</p>
						<p className="meeting-list-div-date">With {meeting.with}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewMeeting;
