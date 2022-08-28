import "./Gallery.css";
import React from "react";
import Thumb from "./Thumb";
import data from "../data.json";

const Gallery = () => {
    return (
        <section className="gallery">
            {data.map((item) => (
                <Thumb key={item.id} id={item.id} src={item.cover}>
                    {item.title}
                </Thumb>
            ))}
        </section>
    );
}

export default Gallery;