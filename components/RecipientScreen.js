import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import ShippingType from "./ShippingType";
import SenderDetails from "./SenderDetails";
import ShipmentContext from "../context/ShipmentContext";
import ReceiptScreenReceiverDetails from "./ReceiptScreenReceiverDetails";

export default function RecipientScreen() {
    const { shipmentDetails } = useContext(ShipmentContext);
    return (
        <SafeAreaView style={styles.screenContent}>
            <ScrollView>
                <Text style={styles.mainText}>
                    Your updating shipping label...
                </Text>
                <View style={styles.inputRow}>
                    <ShippingType />
                    <SenderDetails />
                </View>
                <View style={[styles.inputRowTextSingle, styles.icon]}>
                    <Text style={styles.kgBigText}>KG</Text>
                    <Text
                        style={styles.weightText}
                    >{`${shipmentDetails.weight}`}</Text>
                </View>
                <Text style={styles.mainText}>Enter recipient details...</Text>
                <ReceiptScreenReceiverDetails />
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
    kgBigText: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
    },
});
