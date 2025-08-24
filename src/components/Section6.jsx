import React from 'react';
import '../style/Section6.css';

const islands = [
  {
    name: 'Nosy Iranja',
    image: '/image/Galerie1.jpg',
    description: `Nosy Iranja est formée de deux îles reliées par un banc de sable de 2 km. Paysage spectaculaire, eaux turquoise, village local et phare du XIXe siècle.`,
  },
  {
    name: 'Nosy Antsôha',
    image: '/image/Galerie2.jpg',
    description: `Île inhabitée classée zone protégée. On y trouve des lémuriens sauvages habitués à la présence humaine.`,
  },
  {
    name: 'Nosy Komba',
    image: '/image/Galerie3.jpg',
    description: `Île volcanique à 7 km de Nosy Be. Forêt tropicale dense, faune unique, villageois vivant de broderie, pêche et plantations.`,
  },
  {
    name: 'Nosy Tanikely',
    image: '/image/Galerie4.jpg',
    description: `Réserve marine protégée. Biodiversité exceptionnelle, idéal pour le snorkeling autour du phare.`,
  },
  {
    name: 'Nosy Sakatia',
    image: '/image/Galerie5.jpg',
    description: `Petite île tranquille surnommée l’Île aux Orchidées. Sanctuaire de tortues, sentiers forestiers et sites de plongée.`,
  },
  {
    name: 'Réserve de Lokobe',
    image: '/image/Galerie6.jpg',
    description: `Forêt primaire protégée de 740 ha. Lémuriens, caméléons, flore endémique. Parfait pour les amoureux de nature.`,
  },
];

const IslandSection = () => {
  return (
    <section className="island-section">
      <h2 className="section-title">🌴 Archipel de Nosy Be</h2>
      {islands.map((island, index) => (
        <div
          className={`island-container ${index % 2 === 0 ? 'row' : 'row-reverse'}`}
          key={index}
        >
          <img src={island.image} alt={island.name} className="island-image" />
          <div className="island-description">
            <h3>{island.name}</h3>
            <p>{island.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IslandSection;
