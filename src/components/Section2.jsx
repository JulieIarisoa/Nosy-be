import  { useState, useEffect } from 'react';
import '../style/Section2.css'; // Assure-toi que ce fichier existe
import '../style/ImageSlider.css';

function Section2() {
  const images = [
    '/image/Guide1.png',
    '/image/Guide2.jpg',
    '/image/Guide3.jpg',
    '/image/Guide4.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="section2">
      <div className="apropos-container">
      {/* Slider avec animation clip-path */}
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
        <div className="apropos-content">
          <h2>À propos de nous</h2>
          <p>
        Je suis Anselm, guide local de Madagascar. Je parle polonais et propose des excursions à Nosy Be et vers les îles voisines : Nosy Iranja, Komba, Tanikely, Sakatia, etc.
        </p>
        <p>
        Je propose aussi des sorties sur la Grande Île, en demi-journée ou journée complète, selon vos envies.
        </p>
        <p>
        Mon but : vous faire découvrir Madagascar de façon authentique, en petit groupe et dans une ambiance conviviale.
        </p>
        <p>
        Je vous conseille aussi pour acheter rhum, vanille, épices et artisanat local.
        </p>

          <button id="contact">Contactez-moi</button>
        </div>
      </div>

    </section>
  );
}

export default Section2;
