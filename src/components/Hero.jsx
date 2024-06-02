import './Hero.css';
import background from '../assets/background.jpg';


const Hero = () => {
    return (
      <section id="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <h1>Welcome to CleverBooks</h1>
          <p>Your ultimate solution for innovative and efficient inventory management.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
