import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import ReceiverContext from "../context/ReceiverContext";

export default function ReceiverDetails() {
    const { pressedImage } = useContext(ShipmentContext);
    const { receiverDetails } = useContext(ReceiverContext);
    return (
        <View style={styles.inputRowText}>
            {pressedImage === "Standard UK&I" && (
                <View style={styles.receiverContainer}>
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
                <View style={styles.receiverContainer}>
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
                <View style={styles.receiverContainer}>
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
