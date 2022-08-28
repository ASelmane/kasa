import React from "react";
import "./Dropdown.css";
import arrow from "../arrow.svg";

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className={"dropdown" + (isOpen ? " active" : "")}>
            <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="dropdown__title">{title}</h2>
                <img className="dropdown__arrow" src={arrow} alt=""/>
            </div>
            <div className="dropdown__list">
                {children.map((item, index) => (
                    <p className="dropdown__item" key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;