import { Link } from "react-router-dom";
import * as navStyle from "./Navbar.module.css";
import { useContext } from 'react';
import { DataContext } from '../../App';

const Navbar = () => {
  const { activeSeq } = useContext(DataContext);
    const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';
	return (
		<header className={navStyle.navbarHeader}>
			<nav className={navStyle.navbarNav}>
				<div className={navStyle.logoContainer}>
					{/* <Link className={navStyle.logo} to="/" exact>
						.pnGCAT
					</Link> */}
					{/* <h2 className={navStyle.logo}>.pnGCAT</h2> */}
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
 <div className={navStyle.activeSeq}>
                    <span id='seq-id'>Sequence:&nbsp;
                        <a href={`${baseUrl}/${activeSeq.Seq_Accession}`}>
                            {activeSeq.Seq_Accession}
                        </a>
                    </span>

                    <span id='study-id'>Study:&nbsp;
                        <a href={`${baseUrl}/${activeSeq.Study_Accession}`}>
                            {activeSeq.Study_Accession}
                        </a>
                    </span>
                </div>
			</nav>
		</header>
	);
};

export default Navbar;
