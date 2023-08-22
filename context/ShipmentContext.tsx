// ShipmentContext.js
import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

interface IShipmentDetails {
    weight: number,
    method: string,
    sender_details: string,
    receipt_details: string,
    shipment_date: string,
    cost: number
}

interface IShipmentContext {
shipmentDetails: IShipmentDetails
setShipmentDetails: Dispatch<SetStateAction<IShipmentDetails>>
pressedImage: any
setPressedImage: Dispatch<SetStateAction<any>>
shippingRates: any[]
setShippingRates: Dispatch<SetStateAction<any[]>>
cost: any
setCost: Dispatch<SetStateAction<any>>
}

const ShipmentContext = createContext<IShipmentContext | undefined>(undefined);

export const ShipmentProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [pressedImage, setPressedImage] = useState(null);
    const [shipmentDetails, setShipmentDetails] = useState<IShipmentDetails>({
        weight: 0, 
        method: "",
        sender_details: "",
        receipt_details: "",
        shipment_date: "",
        cost: 0,
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
