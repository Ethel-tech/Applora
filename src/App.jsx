import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Sections/Navigation/Navigation";
import Services from "./Pages/Services";
import Footer from "./components/Sections/Footer/footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUpPage";

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
