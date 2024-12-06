// import React, { useState, useEffect } from 'react';
// import { MapPin, Calendar, Mail, Phone, MessageCircle, Info, Share2, Heart, ChevronLeft, X } from 'lucide-react';
// import { useParams, useNavigate, useLocation  } from 'react-router-dom';
// import axios from 'axios';

// const CarDetail = () => {
//   const { id } = useParams(); // Get the car ID from URL
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');
//   const [showContactInfo, setShowContactInfo] = useState(false);
//   const [car, setCar] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const location = useLocation();


//   useEffect(() => {
//     if (location.state?.scrollToDetail) {
//       const carDetailSection = document.getElementById('car-detail-section');
//       if (carDetailSection) {
//         carDetailSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
  
//     const fetchCarDetails = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/api/cars2/${id}`);
//         const carData = response.data;
//         setCar(carData);
        
//         // Set first image as default selected image
//         if (carData.images && carData.images.length > 0) {
//           setSelectedImage(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${carData.images[0]}`);
//         }
//       } catch (error) {
//         console.error('Error fetching car details:', error);
//         setError('Error loading car details.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (id) {
//       fetchCarDetails();
//     } else {
//       setError('No car ID provided');
//       setLoading(false);
//     }
//   }, [id, location.state?.scrollToDetail]);

//   const handleBack = () => {
//     setTimeout(() => {
//       navigate('/search');
//     }, 100);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div>Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div>
//           <p>{error}</p>
//           <button onClick={() => navigate(-1)} className="mt-4 bg-blue-500 text-white p-2 rounded">
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!car) {
//     return <div>No car found.</div>;
//   }

//   // Normalize image paths
//   const carImages = car.images.map(img => `https://mechanical-else-keisherdev-38b3431a.koyeb.app/${img}`);

//   return (
//     <div className="car-detail relative" id="car-detail-section">
//       <div className={showContactInfo ? 'blur-sm' : ''}>
//         <button onClick={handleBack} className="back-button">
//           <ChevronLeft /> Back to Search
//         </button>

//         <div className="car-detail-grid">
//           {/* Left Column */}
//           <div className="car-detail-left">
//             <div className="main-image">
//               <img 
//                 src={selectedImage || carImages[0]} 
//                 alt={car.name} 
//                 className="w-full h-96 object-cover"
//               />
//             </div>

//             <div className="thumbnail-grid">
//               {carImages.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`${car.name} view ${index + 1}`}
//                   className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
//                   onClick={() => setSelectedImage(image)}
//                 />
//               ))}
//             </div>

//             <div className="tabs">
//               {['overview', 'specifications', 'features'].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`tab ${activeTab === tab ? 'active' : ''}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>

//             <div className="tab-content">
//               {activeTab === 'overview' && (
//                 <div className="overview">
//                   <p>{car.description}</p>
//                 </div>
//               )}
//               {activeTab === 'specifications' && (
//                 <div className="specifications">
//                   {Object.entries(car.specifications || {}).map(([key, value]) => (
//                     <div key={key} className="spec-item">
//                       <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
//                       <div className="spec-value">{value}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {activeTab === 'features' && (
//                 <ul className="features-list">
//                   {(car.features || []).map((feature, index) => (
//                     <li key={index}>
//                       <Info className="feature-icon" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="car-detail-right">
//             <div className="car-info-card">
//               <h1 className="car-title">{car.name}</h1>
//               <div className="car-price">${car.price.toLocaleString()}</div>
              
//               <div className="car-meta">
//                 <div className="meta-item">
//                   <Calendar />
//                   {car.year} | {car.mileage} miles
//                 </div>
//                 <div className="meta-item">
//                   <MapPin />
//                   {car.location}
//                 </div>
//               </div>

//               <div className="seller-info">
//                 <h3>Seller Information</h3>
//                 <div className="seller-name">{car.seller?.name || 'Unknown Seller'}</div>
//                 <div className="seller-rating">Rating: {car.seller?.rating || 'N/A'}/5.0</div>
//               </div>

//               <div className="contact-buttons">
//                 <button 
//                   className="primary-button"
//                   onClick={() => setShowContactInfo(true)}
//                 >
//                   <MessageCircle /> Contact Seller
//                 </button>
//               </div>

//               <div className="action-buttons">
//                 <button className="action-button">
//                   <Share2 /> Share
//                 </button>
//                 <button className="action-button">
//                   <Heart /> Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Info Modal */}
//       {showContactInfo && car.seller && (
//         <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//           <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
//             <button 
//               onClick={() => setShowContactInfo(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X size={24} />
//             </button>
            
//             <div className="flex items-center space-x-4 mb-6">
//               {car.seller.image && (
//                 <img 
//                   src={`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${car.seller.image}`} 
//                   alt={car.seller.name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//               )}
//               <div>
//                 <h3 className="font-bold text-xl">{car.seller.name}</h3>
//                 <p className="text-gray-600">{car.seller.title}</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center space-x-3 mb-3">
//                   <Phone className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-700">{car.seller.phone}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-700">{car.seller.email}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <Info size={18} />
//                   <span>{car.seller.experience} experience</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <MessageCircle size={18} />
//                   <span>{car.seller.responseTime}</span>
//                 </div>
//               </div>

//               <div className="mt-6 text-sm text-gray-500">
//                 By contacting the seller, you agree to our terms of service and privacy policy.
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CarDetail;

import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Mail, Phone, MessageCircle, Info, Share2, Heart, ChevronLeft, X } from 'lucide-react';
import { useParams, useNavigate, useLocation  } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure you have Firebase auth setup
import axios from 'axios';
import LoginModal from '../components/LoginModal'; // Import the LoginModal component

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (location.state?.scrollToDetail) {
      const carDetailSection = document.getElementById('car-detail-section');
      if (carDetailSection) {
        carDetailSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/api/cars2/${id}`);
        const carData = response.data;
        setCar(carData);
        
        // Set first image as default selected image
        if (carData.images && carData.images.length > 0) {
          setSelectedImage(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${carData.images[0]}`);
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
        setError('Error loading car details.');
      } finally {
        setLoading(false);
      }
    };
  
    if (id) {
      fetchCarDetails();
    } else {
      setError('No car ID provided');
      setLoading(false);
    }
  }, [id, location.state?.scrollToDetail]);

  const handleContactSeller = () => {
    // If user is not logged in, show login modal
    if (!currentUser) {
      setShowLoginModal(true);
    } else {
      // If user is logged in, show contact info
      setShowContactInfo(true);
    }
  };

  const handleLoginSuccess = () => {
    // Close login modal and show contact info
    setShowLoginModal(false);
    setShowContactInfo(true);
  };

  const handleBack = () => {
    setTimeout(() => {
      navigate('/search');
    }, 100);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <p>{error}</p>
          <button onClick={() => navigate(-1)} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!car) {
    return <div>No car found.</div>;
  }

  // Normalize image paths
  const carImages = car.images.map(img => `https://mechanical-else-keisherdev-38b3431a.koyeb.app/${img}`);

  return (
    <div className="car-detail relative" id="car-detail-section">
      <div className={showContactInfo || showLoginModal ? 'blur-sm' : ''}>
        <button onClick={handleBack} className="back-button">
          <ChevronLeft /> Back to Search
        </button>

        <div className="car-detail-grid">
          {/* Left Column */}
          <div className="car-detail-left">
            <div className="main-image">
              <img 
                src={selectedImage || carImages[0]} 
                alt={car.name} 
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="thumbnail-grid">
              {carImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${car.name} view ${index + 1}`}
                  className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
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
                  {Object.entries(car.specifications || {}).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      <div className="spec-value">{value}</div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'features' && (
                <ul className="features-list">
                  {(car.features || []).map((feature, index) => (
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
                <div className="seller-name">{car.seller?.name || 'Unknown Seller'}</div>
                <div className="seller-rating">Rating: {car.seller?.rating || 'N/A'}/5.0</div>
              </div>

              <div className="contact-buttons">
                <button 
                  className="primary-button"
                  onClick={handleContactSeller}
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

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Contact Info Modal */}
      {showContactInfo && car.seller && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowContactInfo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              {car.seller.image && (
                <img 
                  src={`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${car.seller.image}`} 
                  alt={car.seller.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
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
                    <p className="text-gray-700">{car.seller.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" />
                  <div>
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