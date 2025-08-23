import { useState } from 'react';
import '../style/Section1.css'

function Section1() {
  return (
    <section id="section1">
        <h1>
          Découvrir Nosy Be et l'île principale <br /> de Madagascar
        </h1>

          <div className="button-group">
            <button id="DecouBtn">Découvrir</button>
            <button id="contact">Contactez-nous</button>
          </div>
        </section>
  );
}

export default Section1;
