import { Link } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from '../App';
import "../Styles/navbar.scss";

const Navbar = () => {
  const { activeSeq } = useContext(DataContext);
  const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';

  const base_links = [
    { name: "About", route: '/About' },
    { name: "Browse", route: '/Browse' },
    { name: "Home", route: '/' },
  ]

  console.log(!activeSeq.Seq_Accession);
  return (
    <header>
      <nav>
        <div id="logo-container">
          {/* <Link className={navStyle.logo} to="/" exact>
						.pnGCAT
					</Link> */}
          {/* <h2 className={navStyle.logo}>.pnGCAT</h2> */}
          <img
            src="https://d1w8c6s6gmwlek.cloudfront.net/oldshirtybastard.com/overlays/343/384/34338491.png"
            width="30px"
          />
        </div>
        <div id="nav-items-container">
          {base_links.map(l => {
            return (<Link className="nav-item" to={l.route} exact>
              {l.name}
            </Link>)
          })}

          <Link to="/Box"
            className={`nav-item${activeSeq.Study_Accession ? null : " disabled-link"}`}>
            Drag-n-Drop
							</Link>

          {/* user can't enter drag and drop until selecting seqence */}
          {!activeSeq.Study_Accession ? null
            : <Link className="nav-item" to="/Box">
              Drag-n-Drop
							</Link>
          }

        </div>

        {/* Showing user sequence being worked on*/}
        <div id="active-seq">
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
