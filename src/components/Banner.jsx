import React from "react";
import "./Banner.css";

const Banner = ({img, children}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={img} alt="" />
            <div className="bg-shadow"></div>
            {children ? <h1 className="banner__title">{children}</h1> : null}
        </div>
    );
};

export default Banner;