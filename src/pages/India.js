import React from 'react';
import { Link } from 'react-router-dom';
import './India.css';

function India() {
  return (
    <div className="India">
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
      </nav>

      <div className="india-hero">
        <h1>🇮🇳 India</h1>
        <p className="subtitle">Incredible India — Unity in Diversity</p>
      </div>

      <div className="india-content">
        <section className="info-card">
          <h2>🏛️ About India</h2>
          <p>
            India, officially the Republic of India, is the world's most populous country
            and the seventh-largest by land area. Located in South Asia, it is a land of
            extraordinary diversity — in its people, languages, cultures, and landscapes.
          </p>
        </section>

        <section className="info-card">
          <h2>📊 Quick Facts</h2>
          <ul className="facts-list">
            <li><strong>Capital:</strong> New Delhi</li>
            <li><strong>Population:</strong> 1.4+ Billion</li>
            <li><strong>Official Languages:</strong> Hindi &amp; English (22 scheduled languages)</li>
            <li><strong>Currency:</strong> Indian Rupee (₹)</li>
            <li><strong>Independence Day:</strong> August 15, 1947</li>
            <li><strong>National Animal:</strong> Bengal Tiger</li>
            <li><strong>National Bird:</strong> Indian Peacock</li>
          </ul>
        </section>

        <section className="info-card">
          <h2>🌟 What Makes India Special</h2>
          <div className="highlights">
            <div className="highlight-item">
              <h3>🕌 Rich Heritage</h3>
              <p>Home to ancient civilizations, the Taj Mahal, and countless UNESCO World Heritage Sites.</p>
            </div>
            <div className="highlight-item">
              <h3>🍛 Diverse Cuisine</h3>
              <p>From spicy curries to sweet desserts, every region offers unique and flavorful dishes.</p>
            </div>
            <div className="highlight-item">
              <h3>🎭 Vibrant Culture</h3>
              <p>Festivals like Diwali, Holi, Eid, and Christmas are celebrated with joy across the nation.</p>
            </div>
            <div className="highlight-item">
              <h3>💻 Tech Powerhouse</h3>
              <p>India is a global leader in IT services, space exploration (ISRO), and digital innovation.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default India;
