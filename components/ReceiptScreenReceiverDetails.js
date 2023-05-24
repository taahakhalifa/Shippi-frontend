import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext } from "react";
import ReceiverContext from "../context/ReceiverContext";

export default function ReceiptScreenReceiverDetails() {
    const { receiverDetails, setReceiverDetails } = useContext(ReceiverContext);

    return (
        <View>
            <Text style={styles.innerText}>Recipient Details</Text>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="First Name"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={receiverDetails.first_name}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
                            first_name: text,
                        });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Last Name"
                    style={styles.inputRowText}
                    value={receiverDetails.last_name}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
                            last_name: text,
                        });
                    }}
                ></TextInput>
            </View>
            <TextInput
                placeholder="Email"
                style={styles.inputText}
                value={receiverDetails.email_address}
                onChangeText={(text) => {
                    setReceiverDetails({
                        ...receiverDetails,
                        email_address: text,
                    });
                }}
            ></TextInput>
            <Text style={styles.innerText}>Receiver Address</Text>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="Address Line 1"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={receiverDetails.address_line_1}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
                            address_line_1: text,
                        });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Address Line 2"
                    style={styles.inputRowText}
                    value={receiverDetails.address_line_2}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
                            address_line_2: text,
                        });
                    }}
                ></TextInput>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="City"
                    style={[styles.inputRowText, styles.inputHalf]}
                    value={receiverDetails.city}
                    onChangeText={(text) => {
                        setReceiverDetails({ ...receiverDetails, city: text });
                    }}
                ></TextInput>
                <TextInput
                    placeholder="Country"
                    style={styles.inputRowText}
                    value={receiverDetails.country}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
                            country: text,
                        });
                    }}
                ></TextInput>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    placeholder="Post code"
                    style={styles.inputTextHalfAlone}
                    value={receiverDetails.post_code}
                    onChangeText={(text) => {
                        setReceiverDetails({
                            ...receiverDetails,
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
