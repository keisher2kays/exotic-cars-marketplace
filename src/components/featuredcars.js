// import car1 from '../images/i8.jpeg'
// import car2 from '../images/doors.jpeg'
// import car3 from '../images/bughatti.jpeg'
// import car4 from '../images/lambo.jpeg'
// import React, { useState } from 'react';
// import { X } from 'lucide-react';


// const FeaturedCars = () => {

//     const [showCarDetails, setShowCarDetails] = useState(false);
//     const [selectedCar, setSelectedCar] = useState(null);
//     // Sample static data for featured cars
//     const cars = [
//         {
//             id: 1,
//             name: 'BMW I8',
//             price: '$200,000',
//             description: 'High performance with luxury features.',
//             image: car1, // Replace with actual image path
//         },
//         {
//             id: 2,
//             name: 'Maclaren P1',
//             price: '$250,000',
//             description: 'Experience the thrill of speed.',
//             image: car2, // Replace with actual image path
//         },
//         {
//             id: 3,
//             name: 'Bughatti',
//             price: '$300,000',
//             description: 'Luxury and performance combined.',
//             image: car3, // Replace with actual image path
//         },
//         {
//             id: 4,
//             name: 'Lamboghini',
//             price: '$350,000',
//             description: 'A masterpiece of engineering.',
//             image: car4, // Replace with actual image path
//         },
//         // Add more car objects as needed
//     ];

//     const handleViewDetails = (car) => {
//         setSelectedCar(car);
//         setShowCarDetails(true);
//       };
    
//       const handleCloseDetails = () => {
//         setShowCarDetails(false);
//         setSelectedCar(null);
//       };

//     return (
//         <section className="featured-cars">
//             <h2 className='featured-cars-header'>Featured Cars</h2>
//             <div className="car-grid">
//                 {cars.map(car => (
//                     <div className="car-card" key={car.id}>
//                         <img src={car.image} alt={car.name} />
//                         <h3>{car.name}</h3>
//                         <p>{car.price}</p>
//                         <p>{car.description}</p>
//                         <button onClick={() => handleViewDetails(car)}>View Details</button>
//                     </div>
//                 ))}
//             </div>

//             {showCarDetails && selectedCar && (
//         <div className="car-details-modal">
//           <div className="modal-content">
//             <button 
//               onClick={handleCloseDetails}
//               className="close-button"
//             >
//               <X size={24} />
//             </button>
            
//             <img src={selectedCar.image} alt={selectedCar.name} className="modal-image" />
//             <h3 className="modal-title">{selectedCar.name}</h3>
//             <p className="modal-price">{selectedCar.price}</p>
//             <p className="modal-description">{selectedCar.description}</p>
//           </div>
//         </div>
//       )}
//         </section>
//     );
// };

// export default FeaturedCars;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

const FeaturedCars = () => {
    const [showCarDetails, setShowCarDetails] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [cars, setCars] = useState([]); // State to hold car data
    const [loading, setLoading] = useState(true); // State to manage loading

    // Fetch cars from the backend API
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cars'); // Adjust the URL if needed
                setCars(response.data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching car data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchCars();
    }, []); // Empty dependency array means this runs once on component mount

    const handleViewDetails = (car) => {
        setSelectedCar(car);
        setShowCarDetails(true);
    };

    const handleCloseDetails = () => {
        setShowCarDetails(false);
        setSelectedCar(null);
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <section className="featured-cars">
            <h2 className='featured-cars-header'>Featured Cars</h2>
            <div className="car-grid">
                {cars.map(car => (
                    <div className="car-card" key={car._id}> {/* Use _id from MongoDB */}
                        <img src={`http://localhost:5000/${car.image}`} alt={car.name} /> {/* Adjust image path */}
                        <h3>{car.name}</h3>
                        <p>{car.price}</p>
                        <p>{car.description}</p>
                        <button onClick={() => handleViewDetails(car)}>View Details</button>
                    </div>
                ))}
            </div>

            {showCarDetails && selectedCar && (
                <div className="car-details-modal">
                    <div className="modal-content">
                        <button 
                            onClick={handleCloseDetails}
                            className="close-button"
                        >
                            <X size={24} />
                        </button>
                        
                        <img src={`http://localhost:5000/${selectedCar.image}`} alt={selectedCar.name} className="modal-image" />
                        <h3 className="modal-title">{selectedCar.name}</h3>
                        <p className="modal-price">{selectedCar.price}</p>
                        <p className="modal-description">{selectedCar.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedCars;