import "./hero.css"
import logo from "../images/logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar(){
    return(
        <>
            <nav className="navbar">
        <div className="navbar-content">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="The Relax Beach Logo" className="logo" />
          </a>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item"><AnchorLink href='#about'>About</AnchorLink></li>
            <li className="navbar-item"><AnchorLink href="#gallery">Gallery</AnchorLink></li>
            <li className="navbar-item"><AnchorLink href="#footer">Contacts</AnchorLink></li>
          </ul>
        </div>
      </nav>
        </>
    )
}