import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import ShippingType from "./ShippingType";
import SenderDetails from "./SenderDetails";
import DatePicker from "./DatePicker";
import ShipmentContext from "../context/ShipmentContext";

export default function DefinePackage() {
    const navigation = useNavigation();
    const { shipmentDetails, setShipmentDetails } = useContext(ShipmentContext);
    return (
        <SafeAreaView style={styles.screenContent}>
            <Text style={styles.mainText}>Your updating shipping label...</Text>
            <View style={styles.inputRow}>
                <ShippingType />
                <SenderDetails />
            </View>
            <Text style={styles.mainText}>Define your package...</Text>
            <Text style={styles.innerText}>Weight</Text>
            <View style={styles.kgAtEnd}>
                <TextInput
                    placeholder="e.g. 100"
                    style={styles.inputWeightText}
                    value={shipmentDetails.weight}
                    onChangeText={(text) => {
                        setShipmentDetails({
                            ...shipmentDetails,
                            weight: text,
                        });
                    }}
                ></TextInput>
                <Text style={styles.kgText}>Kg</Text>
            </View>
            <Text style={styles.innerText}>Preferred Shipping Date</Text>
            <DatePicker />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Home")}
                >
                    <AntDesign name="arrowleft" size={15} color="white" />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate("Recipient Screen")}
                >
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

    inputWeightText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        width: 300,
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
});
