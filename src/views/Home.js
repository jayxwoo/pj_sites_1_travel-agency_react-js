import { useEffect } from "react";
import Hero from "../components/Hero"
import TravelSection from "../components/TravelSection"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <Hero />
            <TravelSection />
        </div>
    );
};

export default Home;