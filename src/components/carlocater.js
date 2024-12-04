// import React, { useState, useEffect , useCallback } from 'react';
// import { Search, MapPin, Filter, SlidersHorizontal, Grid, List, Map, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Modal from '../components/Modal';

// const CarLocator = () => {
//   const navigate = useNavigate();
//   const [viewMode, setViewMode] = useState('grid');
//   const [priceRange, setPriceRange] = useState([0, 1000000]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [yearFilter, setYearFilter] = useState('All Years');
//   const [mileageFilter, setMileageFilter] = useState('Any Mileage');
//   const [locationFilter, setLocationFilter] = useState('All Locations');
//   const [cars, setCars] = useState([]); 
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userLocation, setUserLocation] = useState(null);
//   const [showAllCars, setShowAllCars] = useState(false);
//   const initialCarsCount = 4; 
//   const [originalCars, setOriginalCars] = useState([]);
//   const [isInitialView, setIsInitialView] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   const LoadingSpinner = () => (
//     <div className="loading-container">
//       <Loader2 
//         className="loading-spinner animate-spin" 
//         size={64} 
//         strokeWidth={3} 
//         color="#3498db" 
//       />
//       <p className="mt-4 text-xl text-gray-600">
//         {userLocation 
//           ? `Finding cars near ${userLocation}...` 
//           : 'Loading cars...'}
//       </p>
//     </div>
//   );
//   const fetchCars = useCallback(async (location = '') => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/api/cars2`, {
//         params: { location }
//       });

//       if (!originalCars.length) {
//         setOriginalCars(response.data);
//       }

//       setCars(response.data);
      
//       if (location && response.data.length === 0) {
//         setIsInitialView(false);
//       }
//     } catch (error) {
//       console.error('Error fetching car data:', error);
//     }finally {
//       setIsLoading(false);
//     }
//   }, [originalCars.length]);

//   useEffect(() => {
//     const storedLocation = localStorage.getItem('userLocation');
//     if (storedLocation) {
//       setUserLocation(storedLocation);
//       fetchCars(storedLocation);
//       setIsInitialView(false);
//     } else {
//       fetchCars();
//     }
//   }, [fetchCars]);


//   const handleLocationSubmit = (location) => {
//     setUserLocation(location);
//     fetchCars(location);
//     setIsModalOpen(false);
//     setShowAllCars(false);
//     setIsInitialView(false);
//   };

//   const handleBackToInitialCars = () => {
//     setCars(originalCars);
//     setUserLocation(null);
//     setShowAllCars(false);
//     setIsInitialView(true);
//   };

//   const filteredCars = cars.filter(car =>
//     car.price >= priceRange[0] &&
//     car.price <= priceRange[1] &&
//     (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//      car.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
//     (yearFilter === 'All Years' || car.year === parseInt(yearFilter)) &&
//     (mileageFilter === 'Any Mileage' || (
//       mileageFilter === 'Under 1,000' && parseInt(car.mileage.replace(',', '')) < 1000
//     ) || (
//       mileageFilter === 'Under 5,000' && parseInt(car.mileage.replace(',', '')) < 5000
//     ) || (
//       mileageFilter === 'Under 10,000' && parseInt(car.mileage.replace(',', '')) < 10000
//     )) &&
//     (locationFilter === 'All Locations' || car.location === locationFilter)
//   );

//   const displayedCars = showAllCars 
//     ? filteredCars 
//     : filteredCars.slice(0, initialCarsCount);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCardClick = (car) => {
//     const carId = car._id;
//     navigate(`/car/${carId}`, { state: { scrollToDetail: true } });
//   };

//   const handleYearFilterChange = (e) => {
//     setYearFilter(e.target.value);
//   };

//   const handleMileageFilterChange = (e) => {
//     setMileageFilter(e.target.value);
//   };

//   const handleLocationFilterChange = (e) => {
//     setLocationFilter(e.target.value);
//   };

//   const handleShowMoreCars = (value) => {
//     setShowAllCars(value);
//   };

//   return (
//     <div className="car-locator">
//       <header className="search-header">
//         <div className="container">
//           {!isInitialView && (
//             <button 
//               onClick={handleBackToInitialCars} 
//               className="back-button"
//             >
//               <ArrowLeft /> Back
//             </button>
//           )}

//           <h2 className="carlocater-header">
//             {userLocation 
//               ? `Cars near ${userLocation}` 
//               : 'Locate your car'
//             }
//           </h2>
//           <div className="search-wrapper">
//             <div className="search-input-wrapper">
//               <Search className="search-icon" />
//               <input
//                 type="text"
//                 placeholder="Search by make, model, or keyword..."
//                 className="search-input"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <div className="header-buttons">
//               <button 
//                 className="icon-button" 
//                 onClick={handleOpenModal}
//               >
//                 <MapPin />
//               </button>
//               <button className="icon-button">
//                 <Filter />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="main-content container">
//         <div className="content-wrapper">
//           <aside className="filters-sidebar">
//             <div className="filter-card">
//               <h3 className="filter-title">
//                 <SlidersHorizontal className="filter-icon" /> Filters
//               </h3>
              
//               <div className="filter-section">
//                 <label className="filter-label">Price Range</label>
//                 <input
//                   type="range"
//                   min="0"
//                   max="1000000"
//                   value={priceRange[0]}
//                   onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
//                   className="price-slider"
//                 />
//                 <input
//                   type="range"
//                   min="0"
//                   max="1000000"
//                   value={priceRange[1]}
//                   onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
//                   className="price-slider"
//                 />
//                 <div className="price-range-labels">
//                   <span>${priceRange[0].toLocaleString()}</span>
//                   <span>${priceRange[1] === 1000000 ? '1M+' : priceRange[1].toLocaleString()}</span>
//                 </div>
//               </div>

//               <div className="filter-section">
//                 <label className="filter-label">Year</label>
//                 <select className="filter-select" value={yearFilter} onChange={handleYearFilterChange}>
//                   <option>All Years</option>
//                   <option>2024</option>
//                   <option>2023</option>
//                   <option>2022</option>
//                 </select>
//               </div>

//               <div className="filter-section">
//                 <label className="filter-label">Mileage</label>
//                 <select className="filter-select" value={mileageFilter} onChange={handleMileageFilterChange}>
//                   <option>Any Mileage</option>
//                   <option>Under 1,000</option>
//                   <option>Under 5,000</option>
//                   <option>Under 10,000</option>
//                 </select>
//               </div>

//               <div className="filter-section">
//                 <label className="filter-label">Location</label>
//                 <select className="filter-select" value={locationFilter} onChange={handleLocationFilterChange}>
//                   <option>All Locations</option>
//                   <option>Harare</option>
//                   <option>Bulawayo</option>
//                   <option>Norton</option>
//                   <option>Mutare</option>
//                 </select>
//               </div>
//             </div>
//           </aside>

//           <div className="cars-display">
//             <div className="view-toggle">
//               <button 
//                 className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
//                 onClick={() => setViewMode('grid')}
//               >
//                 <Grid /> Grid
//               </button>
//               <button 
//                 className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
//                 onClick={() => setViewMode('list')}
//               >
//                 <List /> List
//               </button>
//               {/* <button 
//                 className={`view-button ${viewMode === 'map' ? 'active' : ''}`}
//                 onClick={() => setViewMode('map')}
//               >
//                 <Map /> Map
//               </button> */}
//             </div>

//             {isLoading ? (
//               <LoadingSpinner />
//             ) : (
//               <>
//             {filteredCars.length === 0 && userLocation && (
//               <div className="no-cars-container">
//                 <h2>No cars available in {userLocation}</h2>
//                 <button 
//                   onClick={handleBackToInitialCars} 
//                   className="back-to-cars-button"
//                 >
//                   <ArrowLeft /> Back to All Cars
//                 </button>
//               </div>
//             )}

//             {filteredCars.length > 0 && (
//               <div className={`car-listings ${viewMode}`}>
//                 {displayedCars.map(car => (
//                   <div  
//                     key={car._id || car.id} 
//                     className="card-card" 
//                     onClick={() => handleCardClick(car)} 
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <div className="card-image">
//                       <img src={`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${car.images[2]}`} alt={car.name} />
//                     </div>
//                     <div className="card-details">
//                       <h3 className="card-name">{car.name}</h3>
//                       <div className="card-specs">
//                         <span className="card-year">{car.year}</span>
//                         <span className="card-mileage">{car.mileage} miles</span>
//                       </div>
//                       <div className="card-location">
//                         <MapPin className="location-icon" />
//                         {car.location}
//                       </div>
//                       <div className="card-price">
//                         ${car.price.toLocaleString()}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {!showAllCars && filteredCars.length > initialCarsCount && (
//               <button 
//                 onClick={handleOpenModal} 
//                 className="see-more-cars-button"
//               >
//                 See More Cars
//               </button>
//             )}

//             {isModalOpen && (
//               <Modal 
//                 onClose={handleCloseModal}
//                 onSubmitLocation={handleLocationSubmit}
//                 onShowMoreCars={handleShowMoreCars}
//               />
//             )}
//          </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CarLocator;


import React, { useState, useEffect, useCallback } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal, Grid, List, ArrowLeft } from 'lucide-react';
import { Loader2 } from 'lucide-react'; // Added import for Loader2
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';

const CarLocator = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All Years');
  const [mileageFilter, setMileageFilter] = useState('Any Mileage');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [cars, setCars] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [showAllCars, setShowAllCars] = useState(false);
  const initialCarsCount = 4; 
  const [originalCars, setOriginalCars] = useState([]);
  const [isInitialView, setIsInitialView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const LoadingSpinner = () => (
    <div className="loading-container">
      <Loader2 
        className="loading-spinner animate-spin" 
        size={64} 
        strokeWidth={3} 
        color="#3498db" 
      />
      <p className="mt-4 text-xl text-gray-600">
        {userLocation 
          ? `Finding cars near ${userLocation}...` 
          : 'Loading cars...'}
      </p>
    </div>
  );

  const fetchCars = useCallback(async (location = '') => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://mechanical-else-keisherdev-38b3431a.koyeb.app/api/cars2`, {
        params: { location }
      });

      if (!originalCars.length) {
        setOriginalCars(response.data);
      }

      setCars(response.data);
      
      if (location && response.data.length === 0) {
        setIsInitialView(false);
      }
    } catch (error) {
      console.error('Error fetching car data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [originalCars.length]);

  useEffect(() => {
    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      setUserLocation(storedLocation);
      fetchCars(storedLocation);
      setIsInitialView(false);
    } else {
      fetchCars();
    }
  }, [fetchCars]);

  const handleLocationSubmit = (location) => {
    setUserLocation(location);
    fetchCars(location);
    setIsModalOpen(false);
    setShowAllCars(false);
    setIsInitialView(false);
  };

  const handleBackToInitialCars = () => {
    setCars(originalCars);
    setUserLocation(null);
    setShowAllCars(false);
    setIsInitialView(true);
  };

  const filteredCars = cars.filter(car =>
    car.price >= priceRange[0] &&
    car.price <= priceRange[1] &&
    (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     car.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (yearFilter === 'All Years' || car.year === parseInt(yearFilter)) &&
    (mileageFilter === 'Any Mileage' || (
      mileageFilter === 'Under 1,000' && parseInt(car.mileage.replace(',', '')) < 1000
    ) || (
      mileageFilter === 'Under 5,000' && parseInt(car.mileage.replace(',', '')) < 5000
    ) || (
      mileageFilter === 'Under 10,000' && parseInt(car.mileage.replace(',', '')) < 10000
    )) &&
    (locationFilter === 'All Locations' || car.location === locationFilter)
  );

  const displayedCars = showAllCars 
    ? filteredCars 
    : filteredCars.slice(0, initialCarsCount);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (car) => {
    const carId = car._id;
    navigate(`/car/${carId}`, { state: { scrollToDetail: true } });
  };

  const handleYearFilterChange = (e) => {
    setYearFilter(e.target.value);
  };

  const handleMileageFilterChange = (e) => {
    setMileageFilter(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleShowMoreCars = (value) => {
    setShowAllCars(value);
  };

  return (
    <div className="car-locator">
      <header className="search-header">
        <div className="container">
          {!isInitialView && (
            <button 
              onClick={handleBackToInitialCars} 
              className="back-button"
            >
              <ArrowLeft /> Back
            </button>
          )}

          <h2 className="carlocater-header">
            {userLocation 
              ? `Cars near ${userLocation}` 
              : 'Locate your car'
            }
          </h2>
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="header-buttons">
              <button 
                className="icon-button" 
                onClick={handleOpenModal}
              >
                <MapPin />
              </button>
              <button className="icon-button">
                <Filter />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content container">
        <div className="content-wrapper">
          <aside className="filters-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">
                <SlidersHorizontal className="filter-icon" /> Filters
              </h3>
              
              <div className="filter-section">
                <label className="filter-label">Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="price-slider"
                />
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="price-slider"
                />
                <div className="price-range-labels">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1] === 1000000 ? '1M+' : priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              <div className="filter-section">
                <label className="filter-label">Year</label>
                <select className="filter-select" value={yearFilter} onChange={handleYearFilterChange}>
                  <option>All Years</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>

              <div className="filter-section">
                <label className="filter-label">Mileage</label>
                <select className="filter-select" value={mileageFilter} onChange={handleMileageFilterChange}>
                  <option>Any Mileage</option>
                  <option>Under 1,000</option>
                  <option>Under 5,000</option>
                  <option>Under 10,000</option>
                </select>
              </div>

              <div className="filter-section">
                <label className="filter-label">Location</label>
                <select className="filter-select" value={locationFilter} onChange={handleLocationFilterChange}>
                  <option>All Locations</option>
                  <option>Harare</option>
                  <option>Bulawayo</option>
                  <option>Norton</option>
                  <option>Mutare</option>
                </select>
              </div>
            </div>
          </aside>

          <div className="cars-display">
            <div className="view-toggle">
              <button 
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid /> Grid
              </button>
              <button 
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List /> List
              </button>
            </div>

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {filteredCars.length === 0 && userLocation && (
                  <div className="no-cars-container">
                    <h2>No cars available in {userLocation}</h2>
                    <button 
                      onClick={handleBackToInitialCars} 
                      className="back-to-cars-button"
                    >
                      <ArrowLeft /> Back to All Cars
                    </button>
                  </div>
                )}

                {filteredCars.length > 0 && (
                  <div className={`car-listings ${viewMode}`}>
                    {displayedCars.map(car => (
                      <div  
                        key={car._id || car.id} 
                        className="card-card" 
                        onClick={() => handleCardClick(car)} 
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="card-image">
                          <img src={`https://mechanical-else-keisherdev-38b3431a.koyeb.app/${car.images[2]}`} alt={car.name} />
                        </div>
                        <div className="card-details">
                          <h3 className="card-name">{car.name}</h3>
                          <div className="card-specs">
                            <span className="card-year">{car.year}</span>
                            <span className="card-mileage">{car.mileage} miles</span>
                          </div>
                          <div className="card-location">
                            <MapPin className="location-icon" />
                            {car.location}
                          </div>
                          <div className="card-price">
                            ${car.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!showAllCars && filteredCars.length > initialCarsCount && (
                  <button 
                    onClick={() => handleShowMoreCars(true)} 
                    className="see-more-cars-button"
                  >
                    See More Cars
                  </button>
                )}

                {isModalOpen && (
                  <Modal 
                    onClose={handleCloseModal}
                    onSubmitLocation={handleLocationSubmit}
                    onShowMoreCars={handleShowMoreCars}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarLocator;