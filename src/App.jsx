import React from "react";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUpPage";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import TempDashboard from "./Pages/TempDashboard";
import TestPage from "./Pages/Test";

// App.jsx
function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/:id" element={<TestPage />} />
			<Route path="/temp-dashboard" element={<TempDashboard />} />
		</Routes>
	);
}

export default App;
