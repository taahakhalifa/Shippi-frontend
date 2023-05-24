import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function RecipientScreen() {
    return (
        <SafeAreaView style={styles.screenContent}>
            <ScrollView>
                <Text style={styles.mainText}>
                    Your updating shipping label...
                </Text>
                <View style={styles.inputRow}>
                    <View
                        style={[
                            styles.inputRowText,
                            styles.inputHalf,
                            styles.icon,
                        ]}
                    >
                        <View style={styles.icon}></View>
                    </View>
                    <View style={styles.inputRowText}></View>
                </View>
                <View style={[styles.inputRowTextSingle, styles.icon]}>
                    <Text style={styles.weightText}></Text>
                </View>
                <Text style={styles.mainText}>Enter recipient details...</Text>
                <Text style={styles.innerText}>Recipient Details</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="First Name"
                        style={[styles.recipientRowText, styles.recipientHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Last Name"
                        style={styles.recipientRowText}
                    ></TextInput>
                </View>
                <TextInput
                    placeholder="Email"
                    style={styles.recipientText}
                ></TextInput>
                <Text style={styles.innerText}>Recipient Address</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="Address Line 1"
                        style={[styles.recipientRowText, styles.recipientHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Address Line 2"
                        style={styles.recipientRowText}
                    ></TextInput>
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="City"
                        style={[styles.recipientRowText, styles.recipientHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Country"
                        style={styles.recipientRowText}
                    ></TextInput>
                </View>
                <View style={styles.recipientRow}>
                    <TextInput
                        placeholder="Post code"
                        style={styles.recipientTextHalfAlone}
                    ></TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <AntDesign name="arrowleft" size={15} color="white" />
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Next</Text>
                        <AntDesign name="arrowright" size={15} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContent: {
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: "#FAEBD7",
    },
    mainText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    innerText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
    },
    inputRowText: {
        marginVertical: 20,
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 10,
        flex: 1,
    },
    inputHalf: {
        marginRight: 10,
    },
    buttonContainer: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nextButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        backgroundColor: "#8C7A64",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    backButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        backgroundColor: "#8C7A64",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    nextButtonText: {
        color: "white",
        marginRight: 10,
    },
    backButtonText: {
        color: "white",
        marginLeft: 10,
    },
    inputRowTextSingle: {
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 167,
        marginBottom: 10,
    },
    recipientRowText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        flex: 1,
    },
    recipientText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
    },
    recipientTextHalfAlone: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        width: 167,
    },
    recipientHalf: {
        marginRight: 10,
    },
});
