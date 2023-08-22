import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import SenderContext from "../context/SenderContext";

const SenderDetails: React.FC = () => {
    const contextSender = useContext(SenderContext);
    if (!contextSender) {
        throw new Error("Must be used within a SenderProvider");
    }
    const { senderDetails } = contextSender;

    const contextShipment = useContext(ShipmentContext);
    if (!contextShipment) {
        throw new Error("Must be used within a ShipmentProvider");
    }
    const { pressedImage } = contextShipment;

    return (
        <View style={styles.inputRowText}>
            {pressedImage === "Standard UK&I" && (
                <View>
                    <Text style={styles.senderTitle}>Sender</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.email_address}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                </View>
            )}
            {pressedImage === "International" && (
                <View>
                    <Text style={styles.senderTitle}>Sender</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.email_address}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                </View>
            )}
            {pressedImage === "Intergalactic" && (
                <View>
                    <Text style={styles.senderTitle}>Sender</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.email_address}`}</Text>
                    <Text
                        style={styles.senderDescription}
                    >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputRowText: {
        marginVertical: 20,
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 15,
        flex: 1,
    },
    senderTitle: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    senderDescription: {
        fontSize: 10,
    },
});

export default SenderDetails