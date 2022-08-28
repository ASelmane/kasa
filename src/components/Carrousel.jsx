import React from "react";
import "./Carrousel.css";
import arrow from "../arrow.svg";

const Carrousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const next = () => {
        if(currentIndex < children.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else {
            setCurrentIndex(0);
        }
    };

    const prev = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        else {
            setCurrentIndex(children.length - 1);
        }
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