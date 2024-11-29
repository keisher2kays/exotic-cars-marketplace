import React, { useState, useEffect } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal, Grid, List, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Modal from '../components/Modal';

const CarLocator = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All Years');
  const [mileageFilter, setMileageFilter] = useState('Any Mileage');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [cars, setCars] = useState([]); // State to hold car data
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars2'); // Replace with your actual API endpoint
        setCars(response.data); // Set the fetched data to the cars state
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []); // Empty dependency array means this runs once when the component mounts

  

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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

  const handleCardClick = (car) => {
    const carId = car._id;
    navigate(`/car/${carId}`, { state: { scrollToDetail: true } });
  };

  return (
    <div className="car-locator">
      {/* Search Header */}
      <header className="search-header">
        <div className="container">
          <h2 className="carlocater-header">Locate your car</h2>
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="header-buttons">
              <button className="icon-button">
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

          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">
                <SlidersHorizontal className="
 filter-icon" /> Filters
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

          {/* Main Content Area */}
          <div className="cars-display">
            {/* View Toggle */}
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
              <button 
                className={`view-button ${viewMode === 'map' ? 'active' : ''}`}
                onClick={() => setViewMode('map')}
              >
                <Map /> Map
              </button>
            </div>

            {/* Car Listings */}
            <div className={`car-listings ${viewMode}`}>
              {filteredCars.map(car => (
                <div  key={car._id || car.id} 
                className="card-card" 
                onClick={() => handleCardClick(car)} 
                style={{ cursor: 'pointer' }}>
                  <div className="card-image">
                     <img src={`http://localhost:5000/${car.images[2]}`} alt={car.name} />
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

            <button onClick={handleOpenModal} className="see-more-cars-button">
              See More Cars
            </button>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarLocator;


