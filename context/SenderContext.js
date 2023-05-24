// SenderContext.js
import React, { useState, createContext } from "react";

const SenderContext = createContext();

export const SenderProvider = ({ children }) => {
    const [senderDetails, setSenderDetails] = useState({
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
        <SenderContext.Provider value={{ senderDetails, setSenderDetails }}>
            {children}
        </SenderContext.Provider>
    );
};

export default SenderContext;
