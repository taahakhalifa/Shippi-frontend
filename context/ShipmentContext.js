// ShipmentContext.js
import React, { useState, createContext } from "react";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
    const [pressedImage, setPressedImage] = useState(null);

    return (
        <ShipmentContext.Provider
            value={{
                pressedImage,
                setPressedImage,
            }}
        >
            {children}
        </ShipmentContext.Provider>
    );
};

export default ShipmentContext;
