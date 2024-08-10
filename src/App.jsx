import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Sections/Navigation/Navigation";
import Services from "./Pages/Services";

// App.jsx
function App() {
	return (
		<>
			<Routes>
				<Route path="/services" element={<Services />} />
			</Routes>
		</>
	);
}

export default App;
