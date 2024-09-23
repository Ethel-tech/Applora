import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./dashboard-styles.scss";

function ProgressTab() {
	return (
		<section className="progress-tab-section mobile-tab-width pt-10 px-6 md:max-lg:px-8 md:px-14 mt-22">
			<div className="flex md:flex-row flex-col gap-5 h-fit">
				<div className="progress-tab-section-card md:max-lg:h-fit grow py-6 md:pt-6 md:pb-12 pl-6 bg-[#85C1E9]">
					<div className="progress-tab-section-card-progress-bar">
						<CircularProgressbar
							value={45}
							text="45%"
							styles={buildStyles({
								textColor: "#09223E",
								textSize: "24px",
								pathColor: "#F66030",
								trailColor: "#007BFF",
								rotation: 0.5,
							})}
						/>
					</div>
					<div className="text-[#09223E] mt-4 text font-bold">
						<p>Invoice Awaiting Payment</p>
					</div>
				</div>
				<div className="progress-tab-section-card md:max-lg:h-fit grow py-6 md:pt-6 md:pb-12 pl-6 bg-[#85C1E9]">
					<div className="progress-tab-section-card-progress-bar">
						<CircularProgressbar
							value={75}
							text="75%"
							styles={buildStyles({
								textColor: "#09223E",
								textSize: "24px",
								pathColor: "#F66030",
								trailColor: "#007BFF",
								rotation: 0.5,
							})}
						/>
					</div>
					<div className="text-[#09223E] mt-4 text font-bold">
						<p>Invoice Awaiting Payment</p>
					</div>
				</div>
				<div className="progress-tab-section-card md:max-lg:h-fit grow py-6 md:pt-6 md:pb-12 pl-6 bg-[#85C1E9]">
					<div className="progress-tab-section-card-progress-bar">
						<CircularProgressbar
							value={50}
							text="50%"
							styles={buildStyles({
								textColor: "#09223E",
								textSize: "24px",
								pathColor: "#F66030",
								trailColor: "#007BFF",
								rotation: 0.5,
							})}
						/>
					</div>
					<div className="text-[#09223E] mt-4 text font-bold">
						<p>Invoice Awaiting Payment</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProgressTab;
