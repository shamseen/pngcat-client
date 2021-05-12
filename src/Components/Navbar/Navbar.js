import { Link } from 'react-router-dom';
import * as navStyle from './Navbar.module.css'

const Navbar = () => {
  return (
      <header className={navStyle.navbarHeader}>

          <nav className={navStyle.navbarNav}>

              <Link className={navStyle.navItem} to="/" exact >Home</Link>
              <Link className={navStyle.navItem} to="/About">About</Link>
          </nav>
      </header>
  )
}

export default Navbar