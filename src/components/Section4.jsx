import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../style/Section4.css';  // Ton fichier CSS avec les styles ci-dessus

const images = [
  { src: '/image/Guide1.png', alt: 'Nosy Iranja', description: 'Description de Nosy Iranja' },
  { src: '/image/Guide2.jpg', alt: 'Nosy Komba', description: 'Description de Nosy Komba' },
  { src: '/image/Guide3.jpg', alt: 'Nosy Tanikely', description: 'Description de Nosy Tanikely' },
  { src: '/image/Guide4.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="gallery-section">
      <h2>📸 Galerie d’images</h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="slider-image-container" key={idx}>
            <img src={img.src} alt={img.alt} className="slider-image" />
            <div className="image-description">{img.description}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GallerySlider;
