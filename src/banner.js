import video from './bmw2.mp4'
const Banner = () => {
    return ( 
        <div>
 <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>high perfomance exotic cars for you</h1>
        <p>Find your dream car today!</p>
      </div>
    </div>

        </div>
     );
}
 
export default Banner;