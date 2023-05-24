// ReceiverContext.js
import React, { useState, createContext } from "react";

const ReceiverContext = createContext();

export const ReceiverProvider = ({ children }) => {
    const [receiverDetails, setReceiverDetails] = useState({
        first_name: "",
        last_name: "",
        email_address: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        country: "",
        post_code: "",
    });

    return (
        <ReceiverContext.Provider
            value={{ receiverDetails, setReceiverDetails }}
        >
            {children}
        </ReceiverContext.Provider>
    );
};

export default ReceiverContext;
