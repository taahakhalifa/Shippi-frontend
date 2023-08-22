// ReceiverContext.js
import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react";

interface IReceiverDetails {
    first_name: string;
    last_name: string;
    email_address: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    country: string;
    post_code: string;
}

interface IReceiverContext {
    receiverDetails: IReceiverDetails;
    setReceiverDetails: Dispatch<SetStateAction<IReceiverDetails>>;
}

const ReceiverContext = createContext<IReceiverContext | undefined>(undefined);

export const ReceiverProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [receiverDetails, setReceiverDetails] = useState<IReceiverDetails>({
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
