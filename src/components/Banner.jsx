import React from "react";
import "./Banner.css";

const Banner = ({img}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={img} alt="" />
            <div className="bg-shadow"></div>
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;