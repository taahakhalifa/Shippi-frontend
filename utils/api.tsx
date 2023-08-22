import axios from "axios";

const shipmentsApi = axios.create({
    baseURL: "https://shippi-backend.onrender.com/api",
});

export const getRates = () => {
    let path = "/rates";
    return shipmentsApi.get(path).then(({ data }) => {
        return data;
    });
};

export const postShipment = (
    shipmentDetails,
    senderDetails,
    receiverDetails
) => {
    let path = "/shipments";

    const postBody = {
        shipment: shipmentDetails,
        sender: senderDetails,
        receiver: receiverDetails,
    };

    return shipmentsApi.post(path, postBody).then(({ data }) => {
        return data;
    });
};
