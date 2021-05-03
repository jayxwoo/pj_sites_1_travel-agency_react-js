import { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../contexts/TravelContext";

const TravelCard = ({ slice }) => {
    const { travels } = useContext(TravelContext);

    return (
        <>
            {travels.slice(slice[0], slice[1]).map((travel) => {
                return (
                    <li key={travel.id} className="travel-card__item">
                        <Link to={travel.path} className="travel-card__link">
                            <div className="travel-card__img-container" data-label={travel.label}>
                                <img src={travel.src} alt={travel.text} className="travel-card__img" />
                            </div>
                            <p className="travel-card__text">{travel.text}</p>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default TravelCard;