import React, { useState } from 'react';
import { MapPin, Calendar, Mail, Phone, MessageCircle, Info, Share2, Heart, ChevronLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Sample car data - in a real app, this would come from props or an API
  const car = {
    id: 1,
    name: "Ferrari F8 Tributo",
    price: 276000,
    year: 2023,
    location: "Miami, FL",
    mileage: "1,200",
    images: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400",
      "/api/placeholder/800/400"
    ],
    description: "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta. It is a car with unique characteristics and, as its name implies, is an homage to Ferrari's most powerful V8 engine ever.",
    specifications: {
      engine: "3.9L Twin-Turbo V8",
      power: "710 hp",
      transmission: "7-speed dual-clutch",
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "211 mph"
    },
    seller: {
      name: "Luxury Auto Miami",
      rating: 4.8,
      phone: "+1 (305) 555-0123",
      email: "sales@luxuryautomiami.com",
      image: "/api/placeholder/150/150",
      title: "Premium Car Specialist",
      experience: "15+ years",
      responseTime: "Usually responds within 1 hour"
    },
    features: [
      "Carbon Fiber Racing Package",
      "Premium Sound System",
      "Advanced Driver Assistance",
      "Custom Interior Trim",
      "20-inch Forged Wheels"
    ]
  };

  const [selectedImage, setSelectedImage] = useState(car.images[0]);

  return (
    <div className="car-detail relative">
      <div className={showContactInfo ? 'blur-sm' : ''}>
        <button onClick={() => navigate('/search')} className="back-button">
          <ChevronLeft /> Back to Search
        </button>

        <div className="car-detail-grid">
          {/* Left Column */}
          <div className="car-detail-left">
            <div className="main-image">
              <img src={selectedImage} alt={car.name} />
            </div>

            <div className="thumbnail-grid">
              {car.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${car.name} view ${index + 1}`}
                  className={selectedImage === image ? 'active' : ''}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

            <div className="tabs">
              {['overview', 'specifications', 'features'].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'overview' && (
                <div className="overview">
                  <p>{car.description}</p>
                </div>
              )}
              {activeTab === 'specifications' && (
                <div className="specifications">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      <div className="spec-value">{value}</div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'features' && (
                <ul className="features-list">
                  {car.features.map((feature, index) => (
                    <li key={index}>
                      <Info className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="car-detail-right">
            <div className="car-info-card">
              <h1 className="car-title">{car.name}</h1>
              <div className="car-price">${car.price.toLocaleString()}</div>
              
              <div className="car-meta">
                <div className="meta-item">
                  <Calendar />
                  {car.year} | {car.mileage} miles
                </div>
                <div className="meta-item">
                  <MapPin />
                  {car.location}
                </div>
              </div>

              <div className="seller-info">
                <h3>Seller Information</h3>
                <div className="seller-name">{car.seller.name}</div>
                <div className="seller-rating">Rating: {car.seller.rating}/5.0</div>
              </div>

              <div className="contact-buttons">
                <button 
                  className="primary-button"
                  onClick={() => setShowContactInfo(true)}
                >
                  <MessageCircle /> Contact Seller
                </button>
              </div>

              <div className="action-buttons">
                <button className="action-button">
                  <Share2 /> Share
                </button>
                <button className="action-button">
                  <Heart /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Modal */}
      {showContactInfo && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowContactInfo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={car.seller.image} 
                alt={car.seller.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-xl">{car.seller.name}</h3>
                <p className="text-gray-600">{car.seller.title}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="text-blue-600" />
                  <div>
                    {/* <p className="font-medium">Phone</p> */}
                    <p className="text-gray-700">{car.seller.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" />
                  <div>
                    {/* <p className="font-medium">Email</p> */}
                    <p className="text-gray-700">{car.seller.email}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Info size={18} />
                  <span>{car.seller.experience} experience</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle size={18} />
                  <span>{car.seller.responseTime}</span>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                By contacting the seller, you agree to our terms of service and privacy policy.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;