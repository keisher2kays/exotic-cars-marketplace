

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
                const response = await axios.get('https://mechanical-else-keisherdev-38b3431a.koyeb.app/api/cars'); // Adjust the URL if needed
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
                        <img src={`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${car.image}`} alt={car.name} /> {/* Adjust image path */}
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