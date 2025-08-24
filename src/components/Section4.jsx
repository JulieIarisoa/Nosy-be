import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../style/Section4.css';  // Ton fichier CSS avec les styles ci-dessus

const images = [
  { src: '/image/Galerie1.jpg', alt: 'Nosy Iranja', description: 'Description de Nosy Iranja' },
  { src: '/image/Galerie2.jpg', alt: 'Nosy Komba', description: 'Description de Nosy Komba' },
  { src: '/image/Galerie3.jpg', alt: 'Nosy Tanikely', description: 'Description de Nosy Tanikely' },
  { src: '/image/Galerie4.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie5.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie6.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie7.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie8.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie9.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie10.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie11.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie12.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie13.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie14.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie15.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie16.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie17.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie18.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie19.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie20.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie21.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie22.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie23.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie24.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie25.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie26.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie27.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie28.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie29.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie30.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie31.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie32.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie34.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie35.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie36.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie37.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie38.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie39.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie40.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie41.jpg', alt: 'Lokobe', description: 'Description de Lokobe' },
  { src: '/image/Galerie42.jpg', alt: 'Lokobe', description: 'Description dbe' },
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
