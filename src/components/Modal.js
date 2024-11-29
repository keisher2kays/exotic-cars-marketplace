// src/components/Modal.js
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Modal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Add a new document with a generated ID
            await addDoc(collection(db, 'users'), {
                email: email,
                location: location,
            });
            alert('Log in successfull');
            setEmail(''); // Clear the input fields
            setLocation('');
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error saving data. Please try again.');
        }
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     alert(`Email: ${email}, Location: ${location}`);
    //     onClose(); // Close the modal after submission
    // };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
            <div className="modal-header">
                    <h2>Login to See Nearby Cars</h2>
                    <button onClick={onClose} className="close-icon">
                        <X size={24} color="white" /> {/* Use the X icon from Lucide */}
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='labelling'>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='filling'
                        />
                    </div>

                    <div className='bottom'>
                        <label className='labelling'>Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            className='filling'
                        />
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                </form>
                           </div>
        </div>
    );
};

export default Modal;