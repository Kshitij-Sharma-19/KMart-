import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReturnsExchanges from './ReturnsExchanges.js';
import ShippingInfo from './ShippingInfo';
import FAQ from './FAQ.js';

const HelpCenter = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the specific section based on the URL hash
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="help-center-container">
      <h1>Help Center</h1>
      <nav>
        <ul>
          <li><a href="#returns">Returns & Exchanges</a></li>
          <li><a href="#shipping">Shipping Info</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <section id="returns">
        <ReturnsExchanges />
      </section>
      <section id="shipping">
        <ShippingInfo />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
};

export default HelpCenter;
