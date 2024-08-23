<<<<<<< HEAD
import Navigation from "./components/Navigation/Navigation";
=======
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Sections/Navigation/Navigation";
import Services from "./Pages/Services";
import Footer from "./components/Sections/Footer/footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUpPage";
>>>>>>> 63358855fc5e6e93e4b27ce94fa7baebd23ebcd6

// App.jsx
function App() {
	return (
		<>
<<<<<<< HEAD
			<Navigation />
=======
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
>>>>>>> 63358855fc5e6e93e4b27ce94fa7baebd23ebcd6
		</>
	);
}

export default App;
