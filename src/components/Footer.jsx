import React from 'react';
import '../style/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column about">
          <h3>À propos</h3>
          <p>
            Nous sommes une agence dédiée à vous offrir les meilleures excursions à Madagascar.  
            Découvrez la nature, la culture et les plages paradisiaques avec nous.
          </p>
        </div>

        <div className="footer-column links">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#section1">Accueil</a></li>
            <li><a href="#section1">A propos</a></li>
            <li><a href="#section2">Excursions</a></li>
            <li><a href="#section3">Programmes</a></li>
            <li><a href="#contact">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Ambatoloaka Nosy Be, Madagascar</p>
          <p><i className="fas fa-phone"></i> +261 34 56 756 32</p>
          <p><i className="fas fa-envelope"></i> anselmznosybe@gmail.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Madagascar Excursions. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
