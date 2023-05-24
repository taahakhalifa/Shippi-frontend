// ShipmentContext.js
import React, { useState, createContext } from "react";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
    const [pressedImage, setPressedImage] = useState(null);
    const [shipmentDetails, setShipmentDetails] = useState({
        weight: "",
        method: "",
        sender_details: "",
        receipt_details: "",
        shipment_date: "",
        cost: "",
    });
    const [shippingRates, setShippingRates] = useState([]);
    const [cost, setCost] = useState("");

    return (
        <ShipmentContext.Provider
            value={{
                shipmentDetails,
                setShipmentDetails,
                pressedImage,
                setPressedImage,
                shippingRates,
                setShippingRates,
                cost,
                setCost,
            }}
        >
            {children}
        </ShipmentContext.Provider>
    );
};

export default ShipmentContext;
