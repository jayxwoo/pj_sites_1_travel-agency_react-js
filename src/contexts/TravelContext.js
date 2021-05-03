import { createContext, useState } from "react";
import img01 from '../assets/images/img-01.jpeg';
import img02 from '../assets/images/img-02.jpeg';
import img03 from '../assets/images/img-03.jpeg';
import img04 from '../assets/images/img-04.jpeg';
import img05 from '../assets/images/img-05.jpeg';

export const TravelContext = createContext();

const TravelContextProvider = (props) => {
    const [travels, setTravels] = useState([
        {
            src: img01,
            text: "Travel product 01",
            label: "Peaceful",
            path: "/products",
            id: "1"
        },
        {
            src: img02,
            text: "Travel product 02",
            label: "Road Trip",
            path: "/products",
            id: "2"
        },
        {
            src: img03,
            text: "Travel product 03",
            label: "Road Trip",
            path: "/products",
            id: "3"
        },
        {
            src: img04,
            text: "Travel product 04",
            label: "Adventure",
            path: "/products",
            id: "4"
        },
        {
            src: img05,
            text: "Travel product 05",
            label: "Peaceful",
            path: "/products",
            id: "5"
        }
    ]);

    return (
        <TravelContext.Provider value={{travels}}>
            {props.children}
        </TravelContext.Provider>
    );
}

export default TravelContextProvider;