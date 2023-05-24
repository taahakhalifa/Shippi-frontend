import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ShipmentContext from "../context/ShipmentContext";

export default function ShippingType() {
    const { pressedImage } = useContext(ShipmentContext);
    return (
        <View style={[styles.inputRowText, styles.inputHalf, styles.icon]}>
            {pressedImage === "Standard UK&I" && (
                <View style={styles.icon}>
                    <Feather name="truck" size={24} color="black" />
                    <Text style={styles.iconText}>Standard UK&I</Text>
                </View>
            )}
            {pressedImage === "International" && (
                <View style={styles.icon}>
                    <Ionicons
                        name="ios-airplane-outline"
                        size={24}
                        color="black"
                    />
                    <Text style={styles.iconText}>International</Text>
                </View>
            )}
            {pressedImage === "Intergalactic" && (
                <View style={styles.icon}>
                    <FontAwesome5
                        name="space-shuttle"
                        size={24}
                        color="black"
                    />
                    <Text style={styles.iconText}>Intergalactic</Text>
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
    inputHalf: {
        marginRight: 10,
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconText: {
        marginTop: 10,
        fontWeight: "bold",
    },
});
