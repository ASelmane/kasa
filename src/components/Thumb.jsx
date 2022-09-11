import React from "react";
import { Link } from "react-router-dom";
import "../styles/Thumb.css";

const Thumb = ({ id, src, children }) => {
    return (
        <div className="thumb">
            <Link to={"/Logement/" + id }>
                <img className="thumb__image" src={src} alt=""/>
                <div className="thumb__gradient"></div>
                <h2 className="thumb__title">{children}</h2>
            </Link>    
        </div>
    );
};

export default Thumb;