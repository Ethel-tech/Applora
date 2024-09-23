import React from "react";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import TestPage from "./Pages/Test";

// App.jsx
function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/:id" element={<TestPage />} />
		</Routes>
	);
}

export default App;
