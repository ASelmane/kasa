import React from "react";
import "./DropdownLarge.css";
import arrow from "../arrow.svg";

const DropdownLarge = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className={"lg_dropdown" + (isOpen ? " active" : "")}>
            <div className="lg_dropdown__header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="lg_dropdown__title">{title}</h2>
                <img className="lg_dropdown__arrow" src={arrow} alt=""/>
            </div>
            <div className="lg_dropdown__list">
                <p className="lg_dropdown__text">{children}</p>
            </div>
        </div>
    );
};

export default DropdownLarge;