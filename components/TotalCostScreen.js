import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ReceiverContext from "../context/ReceiverContext";
import ShipmentContext from "../context/ShipmentContext";
import SenderContext from "../context/SenderContext";
import { getRates, postShipment } from "../utils/api";

export default function TotalCostScreen() {
    const navigator = useNavigation();
    const { receiverDetails } = useContext(ReceiverContext);
    const {
        shipmentDetails,
        setShipmentDetails,
        pressedImage,
        shippingRates,
        setShippingRates,
        cost,
        setCost,
    } = useContext(ShipmentContext);
    const { senderDetails } = useContext(SenderContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isPosted, setIsPosted] = useState(false);

    useEffect(() => {
        getRates().then((ratesFromApi) => {
            setShippingRates(ratesFromApi);
        });
    }, [setShippingRates]);

    const getShipmentBaseCost = () => {
        const { weight } = shipmentDetails;
        const selectedType = pressedImage;

        const matchingRate = shippingRates.find(
            (rate) =>
                rate.type === selectedType &&
                weight >= rate.minweight &&
                weight <= rate.maxweight
        );

        return matchingRate ? Number(matchingRate.basecost).toFixed(2) : 0;
    };
    const shipmentBaseCost = getShipmentBaseCost();

    const additionalCharges = () => {
        if (receiverDetails.post_code.startsWith("NE1")) {
            return Number(shipmentBaseCost * 1.05).toFixed(2);
        } else if (shipmentDetails.shipment_date.endsWith("7")) {
            return Number((4 * shipmentBaseCost) / 3).toFixed(2);
        } else return 0;
    };
    const additionalChargeFee = additionalCharges();

    const discountCharges = () => {
        if (senderDetails.post_code.startsWith("DH1")) {
            return Number(shipmentBaseCost * 0.8).toFixed(2);
        } else if (shipmentDetails.shipment_date.endsWith("5")) {
            return Number(shipmentBaseCost + 15).toFixed(2);
        } else return 0;
    };
    const discountFee = discountCharges();

    useEffect(() => {
        const totalAmount = Number(
            shipmentBaseCost + additionalChargeFee - discountFee
        ).toFixed(2);
        setCost(totalAmount);
        setTotalAmount(totalAmount);
        shipmentDetails.cost = Number(totalAmount);
        shipmentDetails.weight = Number(shipmentDetails.weight);
    }, [shipmentBaseCost, additionalChargeFee, discountFee, setCost]);

    const handleStartAgain = () => {
        navigator.navigate("Home");
        if (!isPosted) {
            postShipment(shipmentDetails, senderDetails, receiverDetails)
                .then((posted) => {
                    setShipmentDetails({
                        weight: "",
                        method: "",
                        sender_details: "",
                        receipt_details: "",
                        shipment_date: "",
                        cost: "",
                    });
                    setIsPosted(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <SafeAreaView style={styles.screenContent}>
            <Text style={styles.mainText}>Your updating shipping label...</Text>
            <View style={styles.inputRow}>
                <View
                    style={[styles.inputRowText, styles.inputHalf, styles.icon]}
                >
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
                <View style={styles.inputRowText}>
                    {pressedImage === "Standard UK&I" && (
                        <View style={styles.senderContainer}>
                            <Text style={styles.senderTitle}>Sender</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.email_address}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                        </View>
                    )}
                    {pressedImage === "International" && (
                        <View style={styles.senderContainer}>
                            <Text style={styles.senderTitle}>Sender</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.email_address}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                        </View>
                    )}
                    {pressedImage === "Intergalactic" && (
                        <View style={styles.senderContainer}>
                            <Text style={styles.senderTitle}>Sender</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.first_name} ${senderDetails.last_name}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.email_address}`}</Text>
                            <Text
                                style={styles.senderDescription}
                            >{`${senderDetails.address_line_1}, ${senderDetails.post_code}`}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.inputRow}>
                <View
                    style={[styles.inputRowText, styles.inputHalf, styles.icon]}
                >
                    <Text style={styles.kgBigText}>KG</Text>
                    <Text style={styles.weightText}>{`${Number(
                        shipmentDetails.weight
                    )}`}</Text>
                </View>
                <View style={styles.inputRowText}>
                    {pressedImage === "Standard UK&I" && (
                        <View style={styles.receiverContainer}>
                            <Text style={styles.receiverTitle}>Receiver</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.email_address}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                        </View>
                    )}
                    {pressedImage === "International" && (
                        <View style={styles.receiverContainer}>
                            <Text style={styles.receiverTitle}>Receiver</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.email_address}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                        </View>
                    )}
                    {pressedImage === "Intergalactic" && (
                        <View style={styles.receiverContainer}>
                            <Text style={styles.receiverTitle}>Receiver</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.first_name} ${receiverDetails.last_name}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.email_address}`}</Text>
                            <Text
                                style={styles.receiverDescription}
                            >{`${receiverDetails.address_line_1}, ${receiverDetails.post_code}`}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.shippingCostFees}>
                <View style={styles.leftSideTitle}>
                    <Text style={styles.feesText}>Shipment Base Cost</Text>
                    <Text style={styles.feesText}>Additional Charges</Text>
                    <Text style={styles.feesText}>Discounts</Text>
                </View>
                <View style={styles.rightSideTitle}>
                    <Text
                        style={styles.feesText}
                    >{`£ ${shipmentBaseCost}`}</Text>
                    <Text
                        style={styles.feesText}
                    >{`£ ${additionalChargeFee}`}</Text>
                    <Text style={styles.feesText}>{`£ ${discountFee}`}</Text>
                </View>
            </View>
            <View style={styles.totalCost}>
                <View style={styles.leftSideTitle}>
                    <Text style={styles.totalFee}>Total</Text>
                </View>
                <View style={styles.rightSideTitle}>
                    <Text style={styles.feesText}>{`£ ${totalAmount}`}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.startAgainButton}
                onPress={handleStartAgain}
            >
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
    icon: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconText: {
        marginTop: 10,
        fontWeight: "bold",
    },
    senderTitle: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    senderDescription: {
        fontSize: 10,
    },
    receiverTitle: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    receiverDescription: {
        fontSize: 10,
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
