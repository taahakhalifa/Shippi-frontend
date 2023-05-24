import {
    SafeAreaView,
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import HomeScreenImages from "./HomeScreenImages";
import HomeScreenSenderDetails from "./HomeScreenSenderDetails";

export default function HomeScreen() {
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
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.buttonText}>Next</Text>
                        <AntDesign name="arrowright" size={15} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
