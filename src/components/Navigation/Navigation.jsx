import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Nav from "./Nav";

function NavStates() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<section>
			<Nav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</section>
	);
}

export default NavStates;
