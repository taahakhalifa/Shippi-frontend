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
import ReceiverDetails from "./ReceiverDetails";
import { useNavigation } from "@react-navigation/native";

export default function ShipmentCost() {
    const navigator = useNavigation();
    const { shipmentDetails, setShipmentDetails } = useContext(ShipmentContext);
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
                <View style={styles.inputRow}>
                    <View
                        style={[
                            styles.inputRowText,
                            styles.inputHalf,
                            styles.icon,
                        ]}
                    >
                        <Text style={styles.kgBigText}>KG</Text>
                        <Text
                            style={styles.weightText}
                        >{`${shipmentDetails.weight}`}</Text>
                    </View>
                    <ReceiverDetails />
                </View>
                <Text style={styles.mainText}>Calculate shipping cost...</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigator.navigate("Recipient Screen")}
                    >
                        <AntDesign name="arrowleft" size={15} color="white" />
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.calculateButton}
                        onPress={() => navigator.navigate("Total Cost Screen")}
                    >
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
