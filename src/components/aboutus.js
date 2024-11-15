import React from 'react';
import ferrari from '../images/ferrari.jpeg'
import laren from '../images/laren.jpeg'

export default function LuxuryCarRental() {
  return (
    <div className="luxury-rental">
      {/* Grid Layout */}
      <div className="grid-container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1>WELCOME</h1>
          <p>
          Step into a world where finding your perfect exotic car becomes an exhilarating journey rather than a daunting task. Whether you're searching for a rare Italian supercar or a limited-edition luxury vehicle, our platform brings the world's most exceptional automobiles to your fingertips. With detailed listings, precise search filters, and a mobile-optimized experience, we're here to make your exotic car dreams a reality. Start exploring our curated collection today and join a community of passionate automotive enthusiasts.
          </p>
        </div>

        {/* Car Image Section 1 */}
        <div className="car-image">
          <img
            src={ferrari}
            alt="Luxury Sports Car"
          />
        </div>

        {/* Car Image Section 2 */}
        <div className="car-image">
          <img
            src={laren}
            alt="Premium Sports Car"
          />
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2>ABOUT</h2>
          <p>
          We are the premier destination for exotic car enthusiasts and buyers, bringing together an exclusive collection of the world's most remarkable vehicles on one sophisticated platform. Our marketplace solves the challenge of fragmented exotic car listings by offering a centralized, user-friendly experience where discovering your dream car is just a click away. With comprehensive listings, advanced search capabilities, and location-based services, we're transforming how luxury automobiles are discovered and acquired.
          </p>
        </div>
      </div>
    </div>
  );
}