import TravelCard from "./TravelCard"

const TravelSection = () => {
    return (
        <section className="travel-section">
            <div className="travel-section-container">
                <h1 className="travel-section-title">Check out these EPIC Destinations!</h1>
                <div className="travel-cards-container">
                    <ul className="travel-cards-group travel-cards-group-upper">
                        <TravelCard slice={[0, 2]} />
                    </ul>
                    <ul className="travel-cards-group travel-cards-group-lower">
                        <TravelCard slice={[2, 5]} />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TravelSection;