// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [nearbyCars, setNearbyCars] = useState([]); // State to hold nearby cars

    const handleLogin = async (e) => {
        e.preventDefault();
        // Here you would typically fetch nearby cars based on the user's location
        // For demonstration, we'll use a static list of cars
        const cars = [
            {
                id: 1,
                name: "Ferrari F8 Tributo",
                price: 276000,
                location: "Miami, FL",
                image: "path/to/ferrari/image.jpg",
            },
            {
                id: 2,
                name: "Lamborghini Huracán",
                price: 242000,
                location: "Los Angeles, CA",
                image: "path/to/lamborghini/image.jpg",
            },
            // Add more cars as needed
        ];

        // Simulate filtering cars based on the user's location
        const filteredCars = cars.filter(car => car.location.includes(location));
        setNearbyCars(filteredCars);
    };

    return (
        <div className="dashboard">
            <h2>Login to See Nearby Cars</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {nearbyCars.length > 0 && (
                <div className="nearby-cars">
                    <h3>Nearby Cars</h3>
                    <div className="car-listings">
                        {nearbyCars.map(car => (
                            <div key={car.id} className="car-card">
                                <img src={car.image} alt={car.name} />
                                <h4>{car.name}</h4>
                                <p>${car.price.toLocaleString()}</p>
                                <p>{car.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
             <button onClick={() => navigate('/form')} className="see-more-cars-button">
                See More Cars
            </button>
        </div>
    );
};

export default Dashboard;