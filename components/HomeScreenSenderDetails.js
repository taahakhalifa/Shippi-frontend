import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext } from "react";
import SenderContext from "../context/SenderContext";

export default function HomeScreenSenderDetails() {
    const { senderDetails, setSenderDetails } = useContext(SenderContext);

    return (
        <View>
            <Text style={styles.innerText}>Sender Details</Text>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="First Name"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={senderDetails.first_name}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            first_name: text,
                        });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Last Name"
                    style={styles.inputRowText}
                    value={senderDetails.last_name}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            last_name: text,
                        });
                    }}
                ></TextInput>
            </View>
            <TextInput
                placeholder="Email"
                style={styles.inputText}
                value={senderDetails.email_address}
                onChangeText={(text) => {
                    setSenderDetails({
                        ...senderDetails,
                        email_address: text,
                    });
                }}
            ></TextInput>
            <Text style={styles.innerText}>Sender Address</Text>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="Address Line 1"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={senderDetails.address_line_1}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            address_line_1: text,
                        });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Address Line 2"
                    style={styles.inputRowText}
                    value={senderDetails.address_line_2}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            address_line_2: text,
                        });
                    }}
                ></TextInput>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="City"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={senderDetails.city}
                    onChangeText={(text) => {
                        setSenderDetails({ ...senderDetails, city: text });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Country"
                    style={styles.inputRowText}
                    value={senderDetails.country}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            country: text,
                        });
                    }}
                ></TextInput>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="Post code"
                    style={styles.inputTextHalfAlone}
                    value={senderDetails.post_code}
                    onChangeText={(text) => {
                        setSenderDetails({
                            ...senderDetails,
                            post_code: text,
                        });
                    }}
                ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputRowText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        flex: 1,
    },
    inputText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
    },
    inputTextHalfAlone: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        width: 167,
    },
    inputHalf: {
        marginRight: 10,
    },
});
