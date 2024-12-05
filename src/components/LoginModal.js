// // // // import React, { useState } from 'react';
// // // // import { X } from 'lucide-react';
// // // // import { auth } from '../firebase';
// // // // import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// // // // const LoginModal = ({ onClose }) => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [isLogin, setIsLogin] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError(null);
// // // //     setIsLoading(true);

// // // //     // try {
// // // //     //   if (isLogin) {
// // // //     //     // Sign in existing user
// // // //     //     await signInWithEmailAndPassword(auth, email, password);
// // // //     //   } else {
// // // //     //     // Create new user
// // // //     //     await createUserWithEmailAndPassword(auth, email, password);
// // // //     //   }

// // // // //     try {
// // // // //         if (isLogin) {
// // // // //           // Sign in existing user
// // // // //           const userCredential = await signInWithEmailAndPassword(auth, email, password);
// // // // //           console.log('User signed in:', userCredential.user);
// // // // //         } else {
// // // // //           // Create new user
// // // // //           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // //           console.log('User created:', userCredential.user);
// // // // //         }
      
// // // // //       // Close modal on successful authentication
// // // // //       onClose();
// // // // //     catch (error) {
// // // // //         console.error('Full authentication error:', error);
        
// // // // //         // Handle specific Firebase authentication errors
// // // // //         const errorCode = error.code;
// // // // //         const errorMessage = error.message;
        
// // // // //         switch (errorCode) {
// // // // //           case 'auth/wrong-password':
// // // // //             setError('Incorrect password. Please try again.');
// // // // //             break;
// // // // //           case 'auth/user-not-found':
// // // // //             setError('No user found with this email. Please sign up.');
// // // // //             break;
// // // // //           case 'auth/email-already-in-use':
// // // // //             setError('Email already in use. Please log in or use a different email.');
// // // // //             break;
// // // // //           case 'auth/weak-password':
// // // // //             setError('Password is too weak. Please use a stronger password.');
// // // // //             break;
// // // // //           default:
// // // // //             setError(errorMessage || 'Authentication failed. Please try again.');
// // // // //         }
// // // // //       }finally {
// // // // //       setIsLoading(false);
// // // // //     }

// // // // //   };


// // // // try {
// // // //     if (isLogin) {
// // // //       // Sign in existing user
// // // //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// // // //       console.log('User signed in:', userCredential.user);
// // // //     } else {
// // // //       // Create new user
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // //       console.log('User created:', userCredential.user);
// // // //     }
    
// // // //     // Close modal on successful authentication
// // // //     onClose();
// // // //   } catch (error) {
// // // //     console.error('Full authentication error:', error);
    
// // // //     // Handle specific Firebase authentication errors
// // // //     const errorCode = error.code;
// // // //     const errorMessage = error.message;
    
// // // //     switch (errorCode) {
// // // //       case 'auth/wrong-password':
// // // //         setError('Incorrect password. Please try again.');
// // // //         break;
// // // //       case 'auth/user-not-found':
// // // //         setError('No user found with this email. Please sign up.');
// // // //         break;
// // // //       case 'auth/email-already-in-use':
// // // //         setError('Email already in use. Please log in or use a different email.');
// // // //         break;
// // // //       case 'auth/weak-password':
// // // //         setError('Password is too weak. Please use a stronger password.');
// // // //         break;
// // // //       default:
// // // //         setError(errorMessage || 'Authentication failed. Please try again.');
// // // //     }
// // // //   } finally {
// // // //     setIsLoading(false);
// // // //   }
// // // // };
// // // //   return (
// // // //     <div className="modal-overlay">
// // // //       <div className="modal-content2">
// // // //         <div className="modal-header">
// // // //           <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
// // // //           <button onClick={onClose} className="close-icon">
// // // //             <X size={24} color="white" />
// // // //           </button>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div>
// // // //             <label className='labelling'>Email:</label>
// // // //             <input
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //               className='filling'
// // // //               disabled={isLoading}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className='labelling'>Password:</label>
// // // //             <input
// // // //               type="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //               className='filling'
// // // //               disabled={isLoading}
// // // //               minLength={6}
// // // //             />
// // // //           </div>

// // // //           {error && (
// // // //             <div className="error-message">
// // // //               {error}
// // // //             </div>
// // // //           )}

// // // //           <button 
// // // //             type="submit" 
// // // //             className='login-button'
// // // //             disabled={isLoading}
// // // //           >
// // // //             {isLoading 
// // // //               ? (isLogin ? 'Logging In...' : 'Signing Up...') 
// // // //               : (isLogin ? 'Login' : 'Sign Up')
// // // //             }
// // // //           </button>

// // // //           <div className="modal-footer">
// // // //             <button 
// // // //               type="button"
// // // //               onClick={() => setIsLogin(!isLogin)}
// // // //               className="toggle-mode-button"
// // // //             >
// // // //               {isLogin 
// // // //                 ? 'Need an account? Sign Up' 
// // // //                 : 'Already have an account? Login'}
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LoginModal;


// // // import React, { useState } from 'react';
// // // import { X } from 'lucide-react';
// // // import { auth } from '../firebase';
// // // import { 
// // //   signInWithEmailAndPassword, 
// // //   createUserWithEmailAndPassword 
// // // } from 'firebase/auth';

// // // const LoginModal = ({ onClose }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [isLogin, setIsLogin] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setIsLoading(true);

// // //     try {
// // //       // Validate email and password
// // //       if (!email || !password) {
// // //         throw new Error('Email and password are required');
// // //       }

// // //       if (isLogin) {
// // //         // Sign in existing user
// // //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
// // //         console.log('User signed in:', userCredential.user);
// // //       } else {
// // //         // Create new user
// // //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //         console.log('User created:', userCredential.user);
// // //       }
      
// // //       // Close modal on successful authentication
// // //       onClose();
// // //     } catch (error) {
// // //       console.error('Full authentication error:', error);
      
// // //       // Handle specific Firebase authentication errors
// // //       const errorCode = error.code;
// // //       const errorMessage = error.message;
      
// // //       switch (errorCode) {
// // //         case 'auth/wrong-password':
// // //           setError('Incorrect password. Please try again.');
// // //           break;
// // //         case 'auth/user-not-found':
// // //           setError('No user found with this email. Please sign up.');
// // //           break;
// // //         case 'auth/email-already-in-use':
// // //           setError('Email already in use. Please log in or use a different email.');
// // //           break;
// // //         case 'auth/weak-password':
// // //           setError('Password is too weak. Please use a stronger password.');
// // //           break;
// // //         case 'auth/invalid-email':
// // //           setError('Invalid email address. Please check and try again.');
// // //           break;
// // //         case 'auth/configuration-not-found':
// // //           setError('Firebase configuration error. Please check your setup.');
// // //           break;
// // //         default:
// // //           setError(errorMessage || 'Authentication failed. Please try again.');
// // //       }
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="modal-overlay">
// // //       <div className="modal-content2">
// // //         <div className="modal-header">
// // //           <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
// // //           <button onClick={onClose} className="close-icon">
// // //             <X size={24} color="white" />
// // //           </button>
// // //         </div>

// // //         <form onSubmit={handleSubmit}>
// // //           <div>
// // //             <label className='labelling'>Email:</label>
// // //             <input
// // //               type="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //               className='filling'
// // //               disabled={isLoading}
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className='labelling'>Password:</label>
// // //             <input
// // //               type="password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //               className='filling'
// // //               disabled={isLoading}
// // //               minLength={6}
// // //             />
// // //           </div>

// // //           {error && (
// // //             <div className="error-message">
// // //               {error}
// // //             </div>
// // //           )}

// // //           <button 
// // //             type="submit" 
// // //             className='login-button'
// // //             disabled={isLoading}
// // //           >
// // //             {isLoading 
// // //               ? (isLogin ? 'Logging In...' : 'Signing Up...') 
// // //               : (isLogin ? 'Login' : 'Sign Up')
// // //             }
// // //           </button>

// // //           <div className="modal-footer">
// // //             <button 
// // //               type="button"
// // //               onClick={() => setIsLogin(!isLogin)}
// // //               className="toggle-mode-button"
// // //             >
// // //               {isLogin 
// // //                 ? 'Need an account? Sign Up' 
// // //                 : 'Already have an account? Login'}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginModal;


// // import React, { useState } from 'react';
// // import { auth } from '../firebase';
// // import { 
// //   signInWithEmailAndPassword, 
// //   createUserWithEmailAndPassword,
// //   sendPasswordResetEmail
// // } from 'firebase/auth';

// // function LoginModal() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setLoading(true);

// //     try {
// //       if (isLogin) {
// //         // Login existing user
// //         await signInWithEmailAndPassword(auth, email, password);
// //         console.log('Logged in successfully');
// //       } else {
// //         // Create new user
// //         await createUserWithEmailAndPassword(auth, email, password);
// //         console.log('User created successfully');
// //       }
// //     } catch (error) {
// //       console.error('Authentication error:', error);
      
// //       // Handle specific Firebase authentication errors
// //       switch (error.code) {
// //         case 'auth/wrong-password':
// //           setError('Incorrect password. Please try again.');
// //           break;
// //         case 'auth/user-not-found':
// //           setError('No user found with this email.');
// //           break;
// //         case 'auth/email-already-in-use':
// //           setError('Email already in use. Please log in or use a different email.');
// //           break;
// //         case 'auth/weak-password':
// //           setError('Password is too weak. Use at least 6 characters.');
// //           break;
// //         default:
// //           setError(error.message);
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePasswordReset = async () => {
// //     if (!email) {
// //       setError('Please enter your email to reset password');
// //       return;
// //     }

// //     try {
// //       await sendPasswordResetEmail(auth, email);
// //       setError('Password reset email sent. Check your inbox.');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           type="email" 
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //           required 
// //           disabled={loading}
// //         />
// //         <input 
// //           type="password" 
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //           required 
// //           minLength={6}
// //           disabled={loading}
// //         />

// //         {error && <p className="error-message">{error}</p>}

// //         {isLogin && (
// //           <button 
// //             type="button" 
// //             onClick={handlePasswordReset}
// //             className="forgot-password"
// //           >
// //             Forgot Password?
// //           </button>
// //         )}

// //         <button 
// //           type="submit" 
// //           disabled={loading}
// //         >
// //           {loading 
// //             ? (isLogin ? 'Logging In...' : 'Signing Up...') 
// //             : (isLogin ? 'Login' : 'Sign Up')
// //           }
// //         </button>
// //       </form>

// //       <button 
// //         onClick={() => setIsLogin(!isLogin)}
// //         className="toggle-mode"
// //       >
// //         {isLogin 
// //           ? 'Need an account? Sign Up' 
// //           : 'Already have an account? Login'}
// //       </button>
// //     </div>
// //   );
// // }

// // export default LoginModal;

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
//     <div className="main-container">
//       <div className="bg-white p-6 rounded-lg w-96 relative">
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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
//               className="w-full p-2 border rounded"
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
//               className="w-full p-2 border rounded"
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

//           {isLogin && (
//             <button 
//               type="button" 
//               onClick={handlePasswordReset}
//               className="text-sm text-blue-600 hover:underline"
//               type="button"
//             >
//               Forgot Password?
//             </button>
//           )}

//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//             disabled={isLoading}
//           >
//             {isLoading 
//               ? (isLogin ? 'Logging In...' : 'Signing Up...') 
//               : (isLogin ? 'Login' : 'Sign Up')
//             }
//           </button>

//           <div className="text-center mt-4">
//             <button 
//               type="button"
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-sm text-blue-600 hover:underline"
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

const LoginModal = ({ onClose }) => {
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
      
      // Close modal on successful authentication
      onClose();
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
              onClick={handlePasswordReset}
              className="text-inside"
            >
              Forgot Password?
            </button>
          )}

      

          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-inside"
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