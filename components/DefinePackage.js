import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";
import ShippingType from "./ShippingType";

export default function DefinePackage() {
    return (
        <SafeAreaView style={styles.screenContent}>
            <Text style={styles.mainText}>Your updating shipping label...</Text>
            <View style={styles.inputRow}>
                <ShippingType />
                <View style={styles.inputRowText}></View>
            </View>
            <Text style={styles.mainText}>Define your package...</Text>
            <Text style={styles.innerText}>Weight</Text>
            <View style={styles.kgAtEnd}>
                <TextInput
                    placeholder="e.g. 100"
                    style={styles.inputWeightText}
                ></TextInput>
                <Text style={styles.kgText}>Kg</Text>
            </View>
            <Text style={styles.innerText}>Preferred Shipping Date</Text>
            <View style={styles.datePickerContainer}></View>

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
        marginBottom: 15,
        flex: 1,
    },
    inputHalf: {
        marginRight: 10,
    },
    inputWeightText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        width: 300,
    },
    inputDateText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
    },
    kgAtEnd: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    kgText: {
        marginBottom: 12,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
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
    datePickerContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 15,
        padding: 20,
        width: "100%",
        alignItems: "flex-start",
    },
});
