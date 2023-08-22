import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import ReceiverContext from "../context/ReceiverContext";

const ReceiverDetails: React.FC = () => {

    const contextReceiver = useContext(ReceiverContext);
    if (!contextReceiver) {
        throw new Error("Must be used within a ReceiverProvider");
    }
    const { receiverDetails } = contextReceiver;

    const contextShipment = useContext(ShipmentContext);
    if (!contextShipment) {
        throw new Error("Must be used within a ShipmentProvider");
    }
    const { pressedImage } = contextShipment;

    return (
        <View style={styles.inputRowText}>
            {pressedImage === "Standard UK&I" && (
                <View>
                    <Text style={styles.receiverTitle}>Receiver</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.email_address}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                </View>
            )}
            {pressedImage === "International" && (
                <View>
                    <Text style={styles.receiverTitle}>Receiver</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.email_address}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                </View>
            )}
            {pressedImage === "Intergalactic" && (
                <View>
                    <Text style={styles.receiverTitle}>Receiver</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.email_address}`}</Text>
                    <Text
                        style={styles.receiverDescription}
                    >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputRowText: {
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
    },
    receiverTitle: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    receiverDescription: {
        fontSize: 10,
    },
});

export default ReceiverDetails