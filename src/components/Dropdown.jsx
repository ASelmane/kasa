import React from "react";
import "../styles/Dropdown.css";
import arrow from "../assets/arrow.svg";

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className={"dropdown" + (isOpen ? " active" : "")}>
            <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="dropdown__title">{title}</h2>
                <img className="dropdown__arrow" src={arrow} alt=""/>
            </div>
            <div className="dropdown__list">
                {Array.isArray(children) ? (children.map((item, index) => (
                    <p className="dropdown__item" key={index}>{item}</p>
                ))) : (
                    <p className="dropdown__item">{children}</p>
                )}
            </div>
        </div>
    );
};

export default Dropdown;