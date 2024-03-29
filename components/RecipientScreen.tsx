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
import { useNavigation } from "@react-navigation/native";
import ShippingType from "./ShippingType";
import SenderDetails from "./SenderDetails";
import ShipmentContext from "../context/ShipmentContext";
import ReceiptScreenReceiverDetails from "./ReceiptScreenReceiverDetails";
import ReceiverContext from "../context/ReceiverContext";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

const RecipientScreen: React.FC = () => {

    const contextReceiver = useContext(ReceiverContext);
    if (!contextReceiver) {
        throw new Error("Must be used within a ReceiverProvider");
    }
    const { receiverDetails } = contextReceiver;

    const contextShipment = useContext(ShipmentContext);
    if (!contextShipment) {
        throw new Error("Must be used within a ShipmentProvider");
    }
    const { shipmentDetails, setShipmentDetails} = contextShipment;

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handlePress = () => {
        navigation.navigate("Shipment Cost");
        setShipmentDetails({
            ...shipmentDetails,
            receipt_details: `${receiverDetails.first_name} ${receiverDetails.last_name}, ${receiverDetails.city}`,
        });
    };
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
                        
                    >{`${shipmentDetails.weight}`}</Text>
                </View>
                <Text style={styles.mainText}>Enter recipient details...</Text>
                <ReceiptScreenReceiverDetails />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Shipping Label")}
                    >
                        <AntDesign name="arrowleft" size={15} color="white" />
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handlePress}
                    >
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
        paddingVertical: 30,
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

export default RecipientScreen