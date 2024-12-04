// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const Modal = ({ onClose, onSubmitLocation }) => {
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Save user data to Firebase
//       await addDoc(collection(db, 'users'), {
//         email: email,
//         location: location,
//       });

//       // Submit location to parent component
//       onSubmitLocation(location);

//       // Close modal
//       onClose();
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       alert('Error saving data. Please try again.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Find Cars Near You</h2>
//           <button onClick={onClose} className="close-icon">
//             <X size={24} color="white" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className='labelling'>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className='filling'
//             />
//           </div>

//           <div className='bottom'>
//             <label className='labelling'>Your Location:</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="City or Area"
//               required
//               className='filling'
//             />
//           </div>

//           <button type="submit" className='login-button'>
//             Find Cars
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Modal = ({ onClose, onSubmitLocation, onShowMoreCars }) => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save user data to Firebase
      await addDoc(collection(db, 'users'), {
        email: email,
        location: location,
      });

      // Submit location to parent component
      onSubmitLocation(location);

      // Trigger showing more cars
      onShowMoreCars(true);

      // Close modal
      onClose();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content2">
        <div className="modal-header">
          <h2>Find Cars Near You</h2>
          <button onClick={onClose} className="close-icon">
            <X size={24} color="white" />
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
            <label className='labelling'>Your Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or Area"
              required
              className='filling'
            />
          </div>

          <button type="submit" className='login-button'>
            Find Cars
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;