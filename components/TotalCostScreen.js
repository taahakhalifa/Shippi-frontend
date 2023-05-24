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

export default function TotalCostScreen() {
    return (
        <SafeAreaView style={styles.screenContent}>
            <Text style={styles.mainText}>Your updating shipping label...</Text>
            <View style={styles.inputRow}>
                <View
                    style={[styles.inputRowText, styles.inputHalf, styles.icon]}
                >
                    <View style={styles.icon}></View>
                </View>
                <View style={styles.inputRowText}></View>
            </View>
            <View style={styles.inputRow}>
                <View
                    style={[styles.inputRowText, styles.inputHalf, styles.icon]}
                >
                    <Text style={styles.weightText}></Text>
                </View>
                <View style={styles.inputRowText}></View>
            </View>
            <View style={styles.shippingCostFees}>
                <View style={styles.leftSideTitle}>
                    <Text style={styles.feesText}>Shipment Base Cost</Text>
                    <Text style={styles.feesText}>Additional Charges</Text>
                    <Text style={styles.feesText}>Discounts</Text>
                </View>
                <View style={styles.rightSideTitle}>
                    <Text style={styles.feesText}>£10</Text>
                    <Text style={styles.feesText}>£20</Text>
                    <Text style={styles.feesText}>£10</Text>
                </View>
            </View>
            <View style={styles.totalCost}>
                <View style={styles.leftSideTitle}>
                    <Text style={styles.totalFee}>Total</Text>
                </View>
                <View style={styles.rightSideTitle}>
                    <Text style={styles.feesText}>£20</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.startAgainButton}>
                <AntDesign name="arrowleft" size={15} color="white" />
                <Text style={styles.startAgainButtonText}>Start Again</Text>
            </TouchableOpacity>
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
        marginVertical: 20,
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputRowText: {
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
    shippingCostFees: {
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 10,
        height: 100,
        flexDirection: "row",
    },
    totalCost: {
        backgroundColor: "#E5D9CA",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 10,
        height: 80,
        flexDirection: "row",
    },
    startAgainButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 120,
        backgroundColor: "#8C7A64",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    startAgainButtonText: {
        color: "white",
        marginLeft: 10,
    },
    kgBigText: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    leftSideTitle: {
        flexDirection: "column",
        marginRight: 80,
    },
    rightSideTitle: {
        flexDirection: "column",
    },
    feesText: {
        fontWeight: "bold",
    },
    totalFee: {
        fontWeight: "bold",
        marginRight: 105,
    },
});
