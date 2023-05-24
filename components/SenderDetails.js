import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import SenderContext from "../context/SenderContext";

export default function SenderDetails() {
    const { pressedImage } = useContext(ShipmentContext);
    const { senderDetails } = useContext(SenderContext);
    return (
        <View style={styles.inputRowText}>
            {pressedImage === "Standard UK&I" && (
                <View style={styles.senderContainer}>
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
                <View style={styles.senderContainer}>
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
                <View style={styles.senderContainer}>
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
