// import React, { useState } from 'react';
// import { MapPin, Calendar, Mail, Phone, MessageCircle, Info, Share2, Heart, ChevronLeft, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import car1 from '../images/ferrari.jpeg';
// import car2 from '../images/backview.jpg'
// import car3 from '../images/interiorf8.jpg'
// import avator from '../images/avator.jpg'

// const CarDetail = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('overview');
//   const [showContactInfo, setShowContactInfo] = useState(false);

//   // Sample car data - in a real app, this would come from props or an API
//   const car = {
//     id: 1,
//     name: "Ferrari F8 Tributo",
//     price: 276000,
//     year: 2023,
//     location: "Miami, FL",
//     mileage: "1,200",
//     images: [
//       car1,
//       car2,
//       car3,
      
//     ],
//     description: "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta. It is a car with unique characteristics and, as its name implies, is an homage to Ferrari's most powerful V8 engine ever.",
//     specifications: {
//       engine: "3.9L Twin-Turbo V8",
//       power: "710 hp",
//       transmission: "7-speed dual-clutch",
//       acceleration: "0-60 mph in 2.9s",
//       topSpeed: "211 mph"
//     },
//     seller: {
//       name: "Luxury Auto Miami",
//       rating: 4.8,
//       phone: "+1 (305) 555-0123",
//       email: "sales@luxuryautomiami.com",
//       image: avator,
//       title: "Premium Car Specialist",
//       experience: "15+ years",
//       responseTime: "Usually responds within 1 hour"
//     },
//     features: [
//       "Carbon Fiber Racing Package",
//       "Premium Sound System",
//       "Advanced Driver Assistance",
//       "Custom Interior Trim",
//       "20-inch Forged Wheels"
//     ]
//   };

//   const [selectedImage, setSelectedImage] = useState(car.images[0]);
//   const handleBack = () => {
//     setTimeout(() => {
//       navigate('/search');
//     }, 100);
//   };
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
//               <img src={selectedImage} alt={car.name} />
//             </div>

//             <div className="thumbnail-grid">
//               {car.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`${car.name} view ${index + 1}`}
//                   className={selectedImage === image ? 'active' : ''}
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
//                   {Object.entries(car.specifications).map(([key, value]) => (
//                     <div key={key} className="spec-item">
//                       <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
//                       <div className="spec-value">{value}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {activeTab === 'features' && (
//                 <ul className="features-list">
//                   {car.features.map((feature, index) => (
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
//                 <div className="seller-name">{car.seller.name}</div>
//                 <div className="seller-rating">Rating: {car.seller.rating}/5.0</div>
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
//       {showContactInfo && (
//         <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//           <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
//             <button 
//               onClick={() => setShowContactInfo(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X size={24} />
//             </button>
            
//             <div className="flex items-center space-x-4 mb-6">
//               <img 
//                 src={car.seller.image} 
//                 alt={car.seller.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />
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
//                     {/* <p className="font-medium">Phone</p> */}
//                     <p className="text-gray-700">{car.seller.phone}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="text-blue-600" />
//                   <div>
//                     {/* <p className="font-medium">Email</p> */}
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

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Make sure to import axios

// const CarDetailsPage = () => {
//   const { id } = useParams(); // Get the car ID from the URL
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null); // State to hold car data

//   // Fetch car data based on ID
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         console.log(`Fetching details for car ID: ${id}`); 
//         const response = await axios.get(`http://localhost:5000/api/cars3/${id}`); // Adjust the endpoint to match your API
//         setCar(response.data); // Set the fetched data to the car state
//       } catch (error) {
//         console.error('Error fetching car data:', error);
//       }
//     };

//     fetchCarDetails();
//   }, [id]); // Fetch data when the component mounts or when the ID changes

//   // If car data is not yet loaded, show a loading state
//   if (!car) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{car.name}</h1>
//       <img src={`http://localhost:5000/${car.image}`} alt={car.name} />
//       {/* <img src={car.image} alt={car.name} /> */}
//       <p>Price: ${car.price}</p>
//       <p>Year: {car.year}</p>
//       <p>Location: {car.location}</p>
//       <p>Mileage: {car.mileage}</p>
//       <p>Description: {car.description}</p>
//       {/* Add more details as needed */}
//       <button onClick={() => navigate(-1)}>Back</button>
//     </div>
//   );
// };

// export default CarDetailsPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CarDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       console.log('Raw ID from params:', id);
      
//       if (!id) {
//         setError(new Error('No car ID provided'));
//         return;
//       }
//       try {
        

//         // Try different approaches to fetching the car
//         const response = await axios.get(`http://localhost:5000/api/cars2/:id`);
        
//         console.log('Full Response:', response);
//         console.log('Response Data:', response.data);
        
//         setCar(response.data);
//       } catch (error) {
//         console.error('Detailed Error:', {
//           message: error.message,
//           response: error.response?.data,
//           status: error.response?.status,
//           errorDetails: error
//         });
//         setError(error);
//       }
//     };

//     fetchCarDetails();
//   }, [id]);

//   if (error) {
//     return <div> Error loading car details: 
//     {error.message}
//     <button onClick={() => navigate(-1)}>Go Back</button></div>;
//   }

//   if (!car) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{car.name}</h1>
//       {car.images && car.images.length > 0 && (
//         <img 
//           src={`http://localhost:5000/${car.images[0]}`} 
//           alt={car.name} 
//         />
//       )}
//       <p>Price: ${car.price}</p>
//       <p>Year: {car.year}</p>
//       <p>Location: {car.location}</p>
//       <p>Mileage: {car.mileage}</p>
//       <p>Description: {car.description}</p>
//       <button onClick={() => navigate(-1)}>Back</button>
//     </div>
//   );
// };

// export default CarDetailsPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CarDetailsPage = () => {
//   const { id } = useParams(); // Get the car ID from the URL parameters
//   const navigate = useNavigate(); // Hook for programmatic navigation
//   const [car, setCar] = useState(null); // State to hold car details
//   const [error, setError] = useState(null); // State to hold error messages
//   const [loading, setLoading] = useState(true); // State to indicate loading

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const response = await axios.get(`http://localhost:5000/api/cars2/${id}`); // Fetch car details by ID
//         setCar(response.data); // Set the fetched car data to state
//       } catch (error) {
//         console.error('Error fetching car details:', error);
//         setError('Error loading car details.'); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     if (id) {
//       fetchCarDetails(); // Fetch car details if ID is present
//     } else {
//       setError('No car ID provided'); // Set error if no ID is found
//       setLoading(false); // Set loading to false
//     }
//   }, [id]); // Run effect when ID changes

//   if (loading) {
//     return <div>Loading...</div>; // Show loading message
//   }

//   if (error) {
//     return (
//       <div>
//         <p>{error}</p>
//         <button onClick={() => navigate(-1)}>Go Back</button> {/* Go back button */}
//       </div>
//     ); 
//   }

//   if (!car) {
//     return <div>No car found.</div>; // Handle case where no car is found
//   }

//   return (
//     <div>
//       <h1>{car.name}</h1>
//       {car.images && car.images.length > 0 && (
//         <img 
//           src={`http://localhost:5000/${car.images[0]}`} 
//           alt={car.name} 
//         />
//       )}
//       <p>Price: ${car.price.toLocaleString()}</p>
//       <p>Year: {car.year}</p>
//       <p>Location: {car.location}</p>
//       <p>Mileage: {car.mileage} miles</p>
//       <p>Description: {car.description}</p>
//       <button onClick={() => navigate(-1)}>Back</button> {/* Go back button */}
//     </div>
//   );
// };

// export default CarDetailsPage;


import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Mail, Phone, MessageCircle, Info, Share2, Heart, ChevronLeft, X } from 'lucide-react';
import { useParams, useNavigate, useLocation  } from 'react-router-dom';
import axios from 'axios';

const CarDetail = () => {
  const { id } = useParams(); // Get the car ID from URL
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  // useEffect(() => {
  //   const fetchCarDetails = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`http://localhost:5000/api/cars2/${id}`);
  //       const carData = response.data;
  //       setCar(carData);
        
  //       // Set first image as default selected image
  //       if (carData.images && carData.images.length > 0) {
  //         setSelectedImage(`http://localhost:5000/${carData.images[3]}`);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching car details:', error);
  //       setError('Error loading car details.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchCarDetails();
  //   } else {
  //     setError('No car ID provided');
  //     setLoading(false);
  //   }
  // }, [id]);

  useEffect(() => {
    // Scroll to the car detail section when component mounts
    // const carDetailSection = document.getElementById('car-detail-section');
    // if (carDetailSection) {
    //   carDetailSection.scrollIntoView({ behavior: 'smooth' });
    // }
    if (location.state?.scrollToDetail) {
      const carDetailSection = document.getElementById('car-detail-section');
      if (carDetailSection) {
        carDetailSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/cars2/${id}`);
        const carData = response.data;
        setCar(carData);
        
        // Set first image as default selected image
        if (carData.images && carData.images.length > 0) {
          setSelectedImage(`http://localhost:5000/${carData.images[0]}`);
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
  const carImages = car.images.map(img => `http://localhost:5000/${img}`);

  return (
    <div className="car-detail relative" id="car-detail-section">
      <div className={showContactInfo ? 'blur-sm' : ''}>
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
                  src={`http://localhost:5000/${car.seller.image}`} 
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