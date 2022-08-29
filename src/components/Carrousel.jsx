import React from "react";
import "./Carrousel.css";
import arrow from "../arrow.svg";

const Carrousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const next = () => {
        setCurrentIndex((currentIndex) => {
            if (currentIndex === children.length - 1) {
                return 0;
            }
            return currentIndex + 1;
        });
    };

    const prev = () => {
        setCurrentIndex((currentIndex) => {
            if (currentIndex === 0) {
                return children.length - 1;
            }
            return currentIndex - 1;
        });
    };

    return (
        <div className="carrousel">
            <img className="carrousel__image" src={children[currentIndex]} alt=""/>
            <div className="carrousel__control">
                <img className="arrow_left" src={arrow} alt="" onClick={prev}/>
                <img className="arrow_right" src={arrow} alt="" onClick={next}/>
                <span className="carrousel__nb">{(currentIndex + 1) + "/" + (children.length)}</span>
            </div>
        </div>
    );
};

export default Carrousel;