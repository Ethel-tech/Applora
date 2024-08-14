import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Sections/Navigation/Navigation";
import Services from "./Pages/Services";
import Footer from "./components/Sections/Footer/footer";
import Home from "./Pages/Home";

// App.jsx
function App() {
  return (
    <>
	 <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
