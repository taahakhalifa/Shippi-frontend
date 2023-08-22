import React, { useContext } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeScreenImages from "./HomeScreenImages";
import HomeScreenSenderDetails from "./HomeScreenSenderDetails";
import ShipmentContext from "../context/ShipmentContext";
import SenderContext from "../context/SenderContext";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const contextShipment = useContext(ShipmentContext)
    if (!contextShipment) {
        throw new Error ("Must be used within a ShipmentProvider")
    }
    const {shipmentDetails, setShipmentDetails} = contextShipment

    const contextSender = useContext(SenderContext)
    if (!contextSender) {
        throw new Error ("Must be used within a SenderProvider")
    }
    const {senderDetails} = contextSender

    const handlePress = () => {
        navigation.navigate("Shipping Label");
        setShipmentDetails({
            ...shipmentDetails,
            sender_details: `${senderDetails.first_name} ${senderDetails.last_name}, ${senderDetails.city}`,
        });
    };

    return (
        <SafeAreaView style={styles.homeContent}>
            <ScrollView>
                <Text style={styles.mainText}>
                    Where are you wanting to ship?
                </Text>
                <HomeScreenImages />
                <Text style={styles.mainText}>Enter your details...</Text>
                <HomeScreenSenderDetails />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                        <AntDesign name="arrowright" size={15} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeContent: {
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: "#FAEBD7",
    },
    mainText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
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
    buttonText: {
        color: "white",
        marginRight: 10,
    },
});

export default HomeScreen;
