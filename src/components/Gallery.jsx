import "../styles/Gallery.css";
import React from "react";
import Thumb from "./Thumb";
import data from "../data/data.json";

const Gallery = () => {
    return (
        <section className="gallery">
            {data.map((item) => (
                <Thumb key={item.id} id={item.id} src={item.cover}>
                    {item.title}
                </Thumb>
            ))}
            {data.length % 2 === 0 ? <div className="thumb" /> : null}
        </section>
    );
}

export default Gallery;