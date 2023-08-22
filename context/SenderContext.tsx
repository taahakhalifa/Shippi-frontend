import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react";

interface ISenderDetails {
    first_name: string;
    last_name: string;
    email_address: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    country: string;
    post_code: string;
}

interface ISenderContext {
    senderDetails: ISenderDetails;
    setSenderDetails: Dispatch<SetStateAction<ISenderDetails>>;
}

const SenderContext = createContext<ISenderContext | undefined>(undefined);

export const SenderProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [senderDetails, setSenderDetails] = useState<ISenderDetails>({
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
