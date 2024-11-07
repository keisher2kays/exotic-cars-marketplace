// import React from 'react';
// // import video from './bmw2.mp4'
// import FeaturedCars from './featuredcars';
// import racing from './videos/racing.mp4'
// const Services = () => {
//     return (
//         <div className="services">
          
//             <div className="services-content">
//                 <div className="services-description">
//                 <h1 className='services-header'>Our Services</h1>
//                     <p className='services-para'>At our Exotic Car Marketplace, we revolutionize the way automotive enthusiasts discover and acquire the world's most exceptional vehicles. Our comprehensive platform serves as a premier destination where luxury meets convenience, offering an unparalleled suite of services designed to transform the exotic car buying experience. Through our advanced search technology, users can effortlessly filter through our extensive collection using specific criteria including make, model, year, price range, and geographical location, ensuring that finding your dream car is both efficient and enjoyable.</p>
//                 </div>
//                 <div className="services-video">
//                     <iframe 
//                         width="100%" 
//                         height="315" 
//                         src= {racing} 
//                         title="Car Running on Freeway" 
//                         frameBorder="0" 
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//             </div>

//            <FeaturedCars/>

//             <div className="cta">
//                 <h2>Interested in Our Services?</h2>
//                 <button onClick={() => window.location.href='/car-locator'}> Find Exotic Cars Near You</button>
//             </div>
//         </div>
//     );
// };

// export default Services;

import React from 'react';
// import video from './bmw2.mp4'
import FeaturedCars from './featuredcars';
import racing from './videos/racing.mp4';

const Services = () => {
    return (
        <div className="services">
            <div className="services-content">
                <div className="services-description">
                    <h1 className='services-header'>Our Services</h1>
                    <p className='services-para'>
                        At our Exotic Car Marketplace, we revolutionize the way automotive enthusiasts discover and acquire the world's most exceptional vehicles. Our comprehensive platform serves as a premier destination where luxury meets convenience, offering an unparalleled suite of services designed to transform the exotic car buying experience. Through our advanced search technology, users can effortlessly filter through our extensive collection using specific criteria including make, model, year, price range, and geographical location, ensuring that finding your dream car is both efficient and enjoyable.
                    </p>
                </div>
                <div className="services-video">
                    <video 
                        width="100%" 
                        height="315" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={racing} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <FeaturedCars/>

         
        </div>
    );
};

export default Services;