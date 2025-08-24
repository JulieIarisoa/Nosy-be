import React, { useState, useEffect } from 'react';
import '../style/Section3.css';

function Section3() {
  
  const tours = [
    {
      title: 'NOSY IRANJA + NOSY ANTSÔHA',
      details: `Observation de lémuriens sur Antsôha, découverte de Nosy Iranja,
      marche sur le banc de sable, baignade, visite d’un village local.`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 08h00 - Retour: 15h00',
      price: 'Prix : 50€',
      programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🌴 N°1 – EXCURSION À NOSY IRANJA</h3>
            <p><strong>Excursion d'une journée complète</strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 <strong>PRIX / CENA</strong> : 50 € par personne  👶 Enfants (5 à 12 ans) : 25 €</p>
            <h4>🕐 Programme du jour / Plan dnia :</h4>
            <ul>
              <li><strong>8h00 / 8:00</strong> : Rendez-vous près de l’hôtel</li>
              <li><strong>8h45 / 8:45</strong> : Départ pour Nosy Iranja </li>
              <li><strong>9h30 / 9:30</strong> : Arrêt à Nosy Antsôha – lémuriens </li>
              <li><strong>10h15 / 10:15</strong> : Arrivée à Nosy Iranja </li>
              <li><strong>10h30–12h50</strong> : Temps libre </li>
              <li><strong>13h00</strong> : Déjeuner</li>
              <li><strong>Après-midi</strong> : Plage, achats </li>
              <li><strong>15h00</strong> : Retour à Nosy Be </li>
            </ul>
            <h4>✅ Inclus </h4>
            <ul>
              <li>Boissons et déjeuner </li>
              <li>Transfert hôtel-port et retour</li>
              <li>Bateau à moteur </li>
              <li>Guide polonais </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Nosy Komba – Nosy Vorona – Nosy Tanikely',
      details: `Parc de lémuriens, artisanat local, plage sauvage,
      snorkeling dans une réserve marine.`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 08h00 - Retour: 15h30',
      price: 'Prix : 60€',
      programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🌴 N°2 – LES 3 ÎLES </h3>
            <p><strong>Excursion d'une journée complète </strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 PRIX / CENA : 55 € par personne 👶 Enfants (5 à 12 ans) : 30 €</p>
            <h4>🕐 Programme du jour :</h4>
            <ul>
              <li>8h00 / 8:00 : Rendez-vous à l’hôtel</li>
              <li>8h45 / 8:45 : Départ pour Nosy Komba</li>
              <li>9h30–11h00 : Village, lémuriens, marché</li>
              <li>11h00 : Départ pour Nosy Vorona</li>
              <li>11h10–11h45 : Baignade</li>
              <li>11h45 : Départ pour Nosy Tanikely</li>
              <li>Snorkeling, plage, phare (facultatif)</li>
              <li>13h10 : Déjeuner</li>
              <li>15h30 : Retour</li>
            </ul>
            <h4>✅ Inclus :</h4>
            <ul>
              <li>Déjeuner, boissons</li>
              <li>Transferts bateau + bus</li>
              <li>Entrées dans les parcs</li>
              <li>Guide polonais</li>
            </ul>
          </div>
        </div>
      )      
    },
    {
      title: 'EXPÉDITION À MADAGASCAR',
      details: `Traversée vers le continent, plantations de cacao/vanille,
      marché local et baobab emblématique.`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 06h30 ou 08h30 - Retour: 16h30',
      price: 'Prix : 70€',programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🌴 N°3 – EXPÉDITION À MADAGASCAR</h3>
            <p><strong>Excursion d'une journée </strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 PRIX / CENA : 85 € par personne 👶 Enfants (5 à 12 ans) : 45 €</p>
            <h4>🕐 Programme :</h4>
            <ul>
              <li>6h30 : Départ pour le port</li>
              <li>8h00 : Ankify (Madagascar)</li>
              <li>Visite d’Ambanja : plantations, baobab, marché</li>
              <li>Déjeuner</li>
              <li>Retour à l’hôtel : 16h30</li>
            </ul>
            <h4>✅ Inclus :</h4>
            <ul>
              <li>Déjeuner, boissons</li>
              <li>Bus + bateau</li>
              <li>Entrées aux parcs</li>
              <li>Guide polonais</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'TOUR DE L’ÎLE NOSY BE',
      details: `Lemuria Land, Hell-Ville, cascade, Mont Passot,
      dégustation de rhum et confitures.`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 08h00 - Retour: 16h30',
      price: 'Prix : 55€',programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🌴 N°4 – VISITE DE L’ÎLE NOSY BE</h3>
            <p><strong>Excursion d'une journée complète </strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 PRIX / CENA : 60 € par personne 👶 Enfants (5 à 12 ans) : 30 €</p>
            <h4>🕐 Programme :</h4>
            <ul>
              <li>8h00 : Départ en bus</li>
              <li>9h00–10h00 : Lemuria Land</li>
              <li>10h30–11h15 : Hell-Ville + marché</li>
              <li>11h30 : Cascade</li>
              <li>13h30 : Déjeuner à l’hôtel</li>
              <li>16h30 : Mont Passot</li>
            </ul>
            <h4>✅ Inclus :</h4>
            <ul>
              <li>Boissons, transferts</li>
              <li>Entrées</li>
              <li>Guide polonais</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'RÉSERVE NATURELLE DE LOKOBE',
      details: `Pirogue traditionnelle, forêt primaire, observation de faune
      (lémuriens, caméléons, serpents).`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 08h00 - Retour: 11h30',
      price: 'Prix : 45€',programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🌿 N°5 – RÉSERVE DE LOKOBE</h3>
            <p><strong>Demi-journée </strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 PRIX : 45 € 👶 Enfants (5 à 12 ans) : 25 €</p>
            <h4>🕐 Programme :</h4>
            <ul>
              <li>8h00 : Départ en bus</li>
              <li>8h40 : Ambatozavavy + pirogue</li>
              <li>9h00–11h00 : Visite de la réserve</li>
              <li>11h30 : Retour à l’hôtel</li>
            </ul>
            <h4>✅ Inclus :</h4>
            <ul>
              <li>Transferts bus + bateau</li>
              <li>Entrée au parc</li>
              <li>Boissons</li>
              <li>Guide polonais</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'SNORKELING À NOSY SAKATIA',
      details: `Bateau vers herbiers marins, snorkeling avec tortues vertes,
      zone calme et peu touristique.`,
      duration: 'Durée: une journée complète',
      schedule: 'Départ: 08h00 - Retour: 16h30',
      price: 'Prix : 65€',
      programme: (
        <div className="popup-inner-content">
          <div className="popup-text-above-image">
            <h3>🐢 N°6 – SNORKELING À NOSY SAKATIA</h3>
            <p><strong>Demi-journée </strong></p>
          </div>
          <div className="popup-image">
            <img src="image/Nosy_be.jpg" id="image_popup" alt="Logo" />
          </div>
          <div className="popup-text">
            <p>💶 PRIX / CENA : 35 € 👶 Enfants (5 à 12 ans) : 20 €</p>
            <h4>✅ Inclus :</h4>
            <ul>
              <li>Transferts hôtel-port</li>
              <li>Bateau</li>
              <li>Guide polonais</li>
            </ul>
          </div>
        </div>
      )
    },
  ];

  const [selectedTour, setSelectedTour] = useState(null);

  const openPopup = (index) => {
    setSelectedTour(tours[index]);
  };

  const closePopup = () => {
    setSelectedTour(null);
  };
  useEffect(() => {
    if (selectedTour) {
      // Sauvegarder la position de scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Récupérer la position et la réappliquer
      const scrollY = -parseInt(document.body.style.top || '0');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  
    return () => {
      // Nettoyage si composant démonté
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedTour]);
  

  return (
    <section id="section3">
      {tours.map((tour, index) => (
        <div className="box-popup" key={index}>
          <h2>{tour.title}</h2>
          <p>{tour.details}</p>
          <p><i className="fas fa-sun"></i> {tour.duration}</p>
          <p><i className="fas fa-clock"></i> {tour.schedule}</p>
          <p><i className="fas fa-tag"></i> {tour.price}</p>
          <button onClick={() => openPopup(index)} id="popupSection">Détail du programme</button>
        </div>
      ))}

      {selectedTour && (
        <div className="popup-overlay" role="dialog" aria-modal="true" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>X</button>
            {selectedTour.programme}
          </div>
        </div>
      )}

    </section>
  );
}

export default Section3;
