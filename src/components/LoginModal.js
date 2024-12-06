// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { auth } from '../firebase';
// import { 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail
// } from 'firebase/auth';

// const LoginModal = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//       // Basic validation
//       if (!email || !password) {
//         throw new Error('Email and password are required');
//       }

//       if (isLogin) {
//         // Sign in existing user
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Create new user
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
      
//       // Close modal on successful authentication
//       onClose();
//     } catch (error) {
//       console.error('Authentication Error:', error);
      
//       // Detailed error handling
//       switch (error.code) {
//         case 'auth/wrong-password':
//           setError('Incorrect password. Please try again.');
//           break;
//         case 'auth/user-not-found':
//           setError('No user found with this email. Please sign up.');
//           break;
//         case 'auth/email-already-in-use':
//           setError('Email already in use. Please log in or use a different email.');
//           break;
//         case 'auth/weak-password':
//           setError('Password is too weak. Use at least 6 characters.');
//           break;
//         case 'auth/invalid-email':
//           setError('Invalid email address. Please check and try again.');
//           break;
//         default:
//           setError(error.message || 'Authentication failed. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePasswordReset = async () => {
//     if (!email) {
//       setError('Please enter your email to reset password');
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       setError('Password reset email sent. Check your inbox.');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="main-container">
//         <button 
//           onClick={onClose} 
//           className="x-button"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold mb-4">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="text-field"
//               required
//               disabled={isLoading}
//             />
//           </div>

//           <div>
//             <label className="block mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="text-field"
//               required
//               minLength={6}
//               disabled={isLoading}
//             />
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm">
//               {error}
//             </div>
//           )}
//     <button 
//             type="submit" 
//             className="logging-button"
//             disabled={isLoading}
//           >
//             {isLoading 
//               ? (isLogin ? 'Logging In...' : 'Signing Up...') 
//               : (isLogin ? 'Login' : 'Sign Up')
            
//             }
//           </button>

//           {isLogin && (
//             <button 
//               onClick={handlePasswordReset}
//               className="text-inside"
//             >
//               Forgot Password?
//             </button>
//           )}

      

//           <div className="text-center mt-4">
//             <button 
//               type="button"
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-inside"
//             >
//               {isLogin 
//                 ? 'Need an account? Sign Up' 
//                 : 'Already have an account? Login'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


import React, { useState } from 'react';
import { X } from 'lucide-react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Basic validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      if (isLogin) {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Create new user
        await createUserWithEmailAndPassword(auth, email, password);
      }
      
      // Call onLoginSuccess if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Close modal on successful authentication
        onClose();
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      
      // Detailed error handling
      switch (error.code) {
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email. Please sign up.');
          break;
        case 'auth/email-already-in-use':
          setError('Email already in use. Please log in or use a different email.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Use at least 6 characters.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address. Please check and try again.');
          break;
        default:
          setError(error.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email to reset password');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Check your inbox.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="main-container">
        <button 
          onClick={onClose} 
          className="x-button"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-field"
              required
              minLength={6}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="logging-button"
            disabled={isLoading}
          >
            {isLoading 
              ? (isLogin ? 'Logging In...' : 'Signing Up...') 
              : (isLogin ? 'Login' : 'Sign Up')
            }
          </button>

          {isLogin && (
            <button 
              type="button"
              onClick={handlePasswordReset}
              className="text-sm text-blue-600 hover:underline mt-2"
              disabled={isLoading}
            >
              Forgot Password?
            </button>
          )}

          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null); // Clear any previous errors
              }}
              className="text-sm text-blue-600 hover:underline"
              disabled={isLoading}
            >
              {isLogin 
                ? 'Need an account? Sign Up' 
                : 'Already have an account? Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;