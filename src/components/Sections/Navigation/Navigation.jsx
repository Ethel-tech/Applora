import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Nav from "./Nav";

function Navigation() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<section className="navigation">
			<Nav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</section>
	);
}

export default Navigation;
