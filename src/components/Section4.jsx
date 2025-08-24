import React from 'react';
import Slider from 'react-slick';
import '../style/Section4.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: '/image/Guide1.png',
    alt: 'Nosy Iranja',
  },
  {
    src: '/image/Guide2.jpg',
    alt: 'Nosy Komba',
  },
  {
    src: '/image/Guide3.jpg',
    alt: 'Nosy Tanikely',
  },
  {
    src: '/image/Guide4.jpg',
    alt: 'Lokobe',
  },
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
      {
        breakpoint: 1024, // tablette
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1, // ✅ 1 image à la fois sur mobile
        },
      },
    ],
  };

  return (
    <section className="gallery-section">
      <h2>📸 Galerie d’images</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="slider-image-container" key={index}>
            <img src={img.src} alt={img.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GallerySlider;
