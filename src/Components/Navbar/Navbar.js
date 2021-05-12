import { Link } from 'react-router-dom';
import * as navStyles from './Navbar.module.css'

const Navbar = () => {
  return (
      <header className={navStyles.navbarHeader}>

          <nav className={navStyles.navbarNav}>

              <Link className={navStyles.navItem} to="/" exact >Home</Link>
              <Link className={navStyles.navItem} to="/About">About</Link>
          </nav>
      </header>
  )
}

export default Navbar