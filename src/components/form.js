// src/components/FormPage.js
import React, { useState } from 'react';

const FormPage = () => {
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Email: ${email}, Location: ${location}`);
    };

    return (
        <div className="form-container" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2>Login to See Nearby Cars</h2>
            <form onSubmit={handleSubmit}>
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
                        placeholder="City"
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default FormPage;