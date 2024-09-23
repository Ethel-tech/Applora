import React from "react";
import { useParams } from "react-router-dom";

function TestPage() {
	let { id } = useParams();
	return (
		<div>
			<h1>Welcome to the test userr page {id}</h1>
			<p>Halo there</p>
		</div>
	);
}

export default TestPage;
