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

export default function ShipmentCost() {
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
                        <Text style={styles.iconText}></Text>
                    </View>
                    <View style={[styles.inputRowText]}></View>
                </View>
                <View style={styles.inputRow}>
                    <View
                        style={[
                            styles.inputRowText,
                            styles.inputHalf,
                            styles.icon,
                        ]}
                    >
                        <Text style={styles.weightText}></Text>
                    </View>
                    <View style={styles.inputRowText}>
                        <View style={styles.receiverContainer}>
                            <Text style={styles.receiverDescription}></Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.mainText}>Calculate shipping cost...</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <AntDesign name="arrowleft" size={15} color="white" />
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calculateButton}>
                        <Text style={styles.calculateButtonText}>
                            Calculate
                        </Text>
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
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    calculateButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        backgroundColor: "#8C7A64",
        borderRadius: 5,
        marginTop: 15,
    },
    backButton: {
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        backgroundColor: "#8C7A64",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    calculateButtonText: {
        color: "white",
    },
    backButtonText: {
        color: "white",
        marginLeft: 10,
    },
});
