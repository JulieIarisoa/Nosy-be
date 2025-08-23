import { useState } from 'react';
import '../style/NavBar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <img src="image/Nosy_be_logo.jpg" id="logo" alt="Logo" />
        <ul id="navWeb">
          <li><a href="#"><i className="fas fa-home home-icon"></i>Accueil</a></li>
          <li><a href="#"><i className="fas fa-user"></i>À propos</a></li>
          <li><a href="#"><i className="fas fa-tags"></i>Nos offres</a></li>
          <li><a href="#"><i className="fas fa-compass"></i>Découvrir</a></li>
          <li><a href="#"><i className="fas fa-images"></i>Galerie</a></li>
        </ul>
        <div className="box">
          <button id="contactHead">Contact</button>
          <button id="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      <ul id="navMobile" style={{ display: menuOpen ? 'flex' : 'none' }}>
        <li className="menu-title">Ansel z Nosy Be</li>
        <li><a href="#"><i className="fas fa-home"></i> Accueil</a></li>
        <li><a href="#"><i className="fas fa-user"></i> À propos</a></li>
        <li><a href="#"><i className="fas fa-tags"></i> Nos offres</a></li>
        <li><a href="#"><i className="fas fa-compass"></i> Découvrir</a></li>
        <li><a href="#"><i className="fas fa-images"></i> Galerie</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </>
  );
}

export default Navbar;
