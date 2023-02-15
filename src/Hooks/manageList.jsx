import React from "react";

const HandleItems = ({ items, onItemClick }) => {
    const handleClick = (e) => {
        const item = e.target.value;
        onItemClick(item);
    }

    return (
        <div>
            {items.map((item, index) => (
                <button key={index} value={item} onClick={handleClick}>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default HandleItems