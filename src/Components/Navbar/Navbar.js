import { Link } from "react-router-dom";
import * as navStyle from "./Navbar.module.css";

const Navbar = () => {
	return (
		<header className={navStyle.navbarHeader}>
			<nav className={navStyle.navbarNav}>
				<div className={navStyle.logoContainer}>
					<img
						src="https://d1w8c6s6gmwlek.cloudfront.net/oldshirtybastard.com/overlays/343/384/34338491.png"
						className={navStyle.logo}
						width="30px"
					/>
				</div>
				<div className={navStyle.navItemsContainer}>
					<Link className={navStyle.navItem} to="/" exact>
						Home
					</Link>
					<Link className={navStyle.navItem} to="/Box">
						Drag-n-Drop
					</Link>
					<Link className={navStyle.navItem} to="/About">
						About
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
