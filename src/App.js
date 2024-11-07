// import './App.css';
// import Banner from './banner';
// import Navigation from './Navigation';
// import Services from './services';
// import LuxuryCarRental from './aboutus';
// import CarLocator from './carlocater';
// import CarDetailsPage from './cardetails';
// import {  Routes, Route } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//      <Banner/>
//       <Navigation/>
//       <LuxuryCarRental/>
//       <Services />
//        <CarLocator/>       
//       <Routes>
//       <Route path="/search" element={<CarLocator />} />
//         {/* <Route path="/" element={<CarLocator />} /> */}
//         <Route path="/car/:id" element={<CarDetailsPage />} />
//       </Routes>
    
//     </div>
//   );
// }

// export default App;
import './App.css';
import Banner from './banner';
import Navigation from './Navigation';
import Services from './services';
import LuxuryCarRental from './aboutus';
import CarLocator from './carlocater';
import CarDetailsPage from './cardetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navigation/>
      <LuxuryCarRental/>
      <Services />
      
      <Routes>
        <Route path="/" element={
          <>
            <CarLocator/>
          </>
        } />
        <Route path="/search" element={<CarLocator />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;