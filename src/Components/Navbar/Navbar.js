import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../App';
import * as navStyle from './Navbar.module.css'

const Navbar = () => {
    const { activeSeq } = useContext(DataContext);
    const baseUrl = 'https://www.ebi.ac.uk/ena/browser/view';

    return (
        <header className={navStyle.navbarHeader}>

            <nav className={navStyle.navbarNav}>
                <Link className={navStyle.navItem} to="/" exact >Home</Link>

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

                <Link className={navStyle.navItem} to="/Box">Create</Link>
                <Link className={navStyle.navItem} to="/About">About</Link>
            </nav>
        </header>
    )
}

export default Navbar