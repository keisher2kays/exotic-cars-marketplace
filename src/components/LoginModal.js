// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { auth } from '../firebase';
// import { 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithPopup
// } from 'firebase/auth';

// const LoginModal = ({ onClose, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isGoogleLoading, setIsGoogleLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!email || !password) {
//         throw new Error('Email and password are required');
//       }

//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
      
//       if (onLoginSuccess) {
//         onLoginSuccess();
//       } else {
//         onClose();
//       }
//     } catch (error) {
//       console.error('Authentication Error:', error);
      
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

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
    
//     try {
//       setIsGoogleLoading(true);
//       setError(null);
      
//       await signInWithPopup(auth, provider);
      
//       if (onLoginSuccess) {
//         onLoginSuccess();
//       } else {
//         onClose();
//       }
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
      
//       switch (error.code) {
//         case 'auth/account-exists-with-different-credential':
//           setError('An account already exists with a different credential.');
//           break;
//         case 'auth/popup-blocked':
//           setError('Sign-in popup was blocked. Please allow popups for this site.');
//           break;
//         case 'auth/popup-closed-by-user':
//           setError('Sign-in popup was closed before completion.');
//           break;
//         default:
//           setError(error.message || 'Google Sign-In failed. Please try again.');
//       }
//     } finally {
//       setIsGoogleLoading(false);
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
//       <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full relative">
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               disabled={isLoading || isGoogleLoading}
//             />
//           </div>

//           <div>
//             <label className="block mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               minLength={6}
//               disabled={isLoading || isGoogleLoading}
//             />
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm text-center">
//               {error}
//             </div>
//           )}

//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//             disabled={isLoading || isGoogleLoading}
//           >
//             {isLoading 
//               ? (isLogin ? 'Logging In...' : 'Signing Up...') 
//               : (isLogin ? 'Login' : 'Sign Up')
//             }
//           </button>

//           {isLogin && (
//             <button 
//               type="button"
//               onClick={handlePasswordReset}
//               className="text-sm text-blue-600 hover:underline mt-2 w-full text-center"
//               disabled={isLoading || isGoogleLoading}
//             >
//               Forgot Password?
//             </button>
//           )}

//           <div className="flex items-center my-4">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-4 text-gray-500">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button 
//             type="button"
//             onClick={handleGoogleSignIn}
//             className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
//             disabled={isLoading || isGoogleLoading}
//           >
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="24" 
//               height="24" 
//               viewBox="0 0 24 24" 
//               className="mr-2"
//             >
//               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//               <path fill="#34A853" d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.87 0-5.3-1.93-6.17-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//               <path fill="#FBBC05" d="M5.83 14.11c-.25-.69-.38-1.43-.38-2.11s.14-1.42.38-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.65-2.84z"/>
//               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.65 2.84c.87-2.6 3.3-4.51 6.17-4.51z"/>
//             </svg>
//             Continue with Google
//           </button>

//           <div className="text-center mt-4">
//             <button 
//               type="button"
//               onClick={() => {
//                 setIsLogin(!isLogin);
//                 setError(null);
//               }}
//               className="text-sm text-blue-600 hover:underline"
//               disabled={isLoading || isGoogleLoading}
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
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      
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

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
      setIsGoogleLoading(true);
      setError(null);
      
      await signInWithPopup(auth, provider);
      
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        onClose();
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          setError('An account already exists with a different credential.');
          break;
        case 'auth/popup-blocked':
          setError('Sign-in popup was blocked. Please allow popups for this site.');
          break;
        case 'auth/popup-closed-by-user':
          setError('Sign-in popup was closed before completion.');
          break;
        default:
          setError(error.message || 'Google Sign-In failed. Please try again.');
      }
    } finally {
      setIsGoogleLoading(false);
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
              disabled={isLoading || isGoogleLoading}
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
              disabled={isLoading || isGoogleLoading}
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
            disabled={isLoading || isGoogleLoading}
          >
            {isLoading 
              ? (isLogin ? 'Logging In...' : 'Signing Up...') 
              : (isLogin ? 'Login' : 'Sign Up')
            }
          </button>

         

          {/* Divider */}
          {/* <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div> */}

          {/* Google Sign-In Button */}
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            className="google-button"
            disabled={isLoading || isGoogleLoading}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              className="mr-2"
            >
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.87 0-5.3-1.93-6.17-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.83 14.11c-.25-.69-.38-1.43-.38-2.11s.14-1.42.38-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.65-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.65 2.84c.87-2.6 3.3-4.51 6.17-4.51z"/>
            </svg>
            Continue with Google
          </button>


          {isLogin && (
            <button 
              type="button"
              onClick={handlePasswordReset}
              className="text-sm text-blue-600 hover:underline mt-2"
              disabled={isLoading || isGoogleLoading}
            >
              Forgot Password?
            </button>
          )}

          <div className="text-center mt-4">
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-sm text-blue-600 hover:underline"
              disabled={isLoading || isGoogleLoading}
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