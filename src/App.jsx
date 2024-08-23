import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUpPage";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

// App.jsx
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
