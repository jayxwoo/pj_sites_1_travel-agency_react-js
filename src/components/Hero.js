import { Link } from 'react-router-dom';
import video01 from '../assets/videos/bg-video-01.mp4';
import Button from './Button';

const Hero = () => {
    return (
        <section className="hero">
            <video className="hero-video" autoPlay loop muted>
                <source src={video01} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <h1 className="hero-title">EXPLORE THE WORLD</h1>
            <h3 className="hero-subtitle">What are you waiting for?</h3>
            <div className="hero__btn-container">
                <Link to="/sign-up" className="hero__btn-link hero__btn-link-01"><Button btnStyle="btn-outline" className="hero__btn-01">LET'S GO</Button></Link>
                <Link to="/products" className="hero__btn-link hero__btn-link-02"><Button btnStyle="btn-outline" className="hero__btn-02">WATCH TRAILER<span className="material-icons play-icon">play_circle_filled</span></Button></Link>
            </div>
        </section>
    );
}

export default Hero;