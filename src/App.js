import './App.css'; 
import Banner from './components/banner'; 
import Navigation from './components/Navigation'; 
import Services from './components/services'; 
import LuxuryCarRental from './components/aboutus';
 import CarLocator from './components/carlocater';
  import CarDetailsPage from './components/cardetails'; 
  import { Routes, Route } from 'react-router-dom'; 
  import Footer from './components/footer';
   import ScrollToTop from './components/Animatedcarpages';
    function App() { 
        return (  
             <div className="App">   
             <ScrollToTop/>
                <Banner/>
                <Navigation/>       
                 <div id="about">        
                   <LuxuryCarRental/>       
                   </div>       
                   <div id="services">      
                       <Services />       
                       </div>      
                        <div id="locate-car">         
                          <CarLocator/>       
                          </div>      
                           <Routes>       
                              <Route path="/car/:id" element={<CarDetailsPage />} />    
                                 </Routes>     
                                   <Footer/>   
                                     </div>  
                                      ); 
                                    } 
                                     export default App; 