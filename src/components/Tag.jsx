import React from "react";
import "../styles/Tag.css";

const Tag = ({ children }) => {
    return (
        <div className="tag">
            <span>{children}</span>
        </div>
    );
};

export default Tag;