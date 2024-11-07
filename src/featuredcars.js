import car1 from './images/i8.jpeg'
import car2 from './images/doors.jpeg'
import car3 from './images/bughatti.jpeg'
import car4 from './images/lambo.jpeg'


const FeaturedCars = () => {
    // Sample static data for featured cars
    const cars = [
        {
            id: 1,
            name: 'Car Model 1',
            price: '$200,000',
            description: 'High performance with luxury features.',
            image: car1, // Replace with actual image path
        },
        {
            id: 2,
            name: 'Car Model 2',
            price: '$250,000',
            description: 'Experience the thrill of speed.',
            image: car2, // Replace with actual image path
        },
        {
            id: 3,
            name: 'Car Model 3',
            price: '$300,000',
            description: 'Luxury and performance combined.',
            image: car3, // Replace with actual image path
        },
        {
            id: 4,
            name: 'Car Model 4',
            price: '$350,000',
            description: 'A masterpiece of engineering.',
            image: car4, // Replace with actual image path
        },
        // Add more car objects as needed
    ];

    return (
        <section className="featured-cars">
            <h2 className='featured-cars-header'>Featured Cars</h2>
            <div className="car-grid">
                {cars.map(car => (
                    <div className="car-card" key={car.id}>
                        <img src={car.image} alt={car.name} />
                        <h3>{car.name}</h3>
                        <p>{car.price}</p>
                        <p>{car.description}</p>
                        <button>View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCars;
