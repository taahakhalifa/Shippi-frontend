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

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.homeContent}>
            <ScrollView>
                <Text style={styles.mainText}>
                    Where are you wanting to ship?
                </Text>
                <HomeScreenImages />
                <Text style={styles.mainText}>Enter your details...</Text>
                <Text style={styles.innerText}>Sender Details</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="First Name"
                        style={[styles.inputRowText, styles.inputHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Last Name"
                        style={styles.inputRowText}
                    ></TextInput>
                </View>
                <TextInput
                    placeholder="Email"
                    style={styles.inputText}
                ></TextInput>
                <Text style={styles.innerText}>Sender Address</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="Address Line 1"
                        style={[styles.inputRowText, styles.inputHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Address Line 2"
                        style={styles.inputRowText}
                    ></TextInput>
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="City"
                        style={[styles.inputRowText, styles.inputHalf]}
                    ></TextInput>
                    <TextInput
                        placeholder="Country"
                        style={styles.inputRowText}
                    ></TextInput>
                </View>
                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="Post code"
                        style={styles.inputTextHalfAlone}
                    ></TextInput>
                </View>
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
    innerText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputRowText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        flex: 1,
    },
    inputText: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
    },
    inputTextHalfAlone: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        width: 167,
    },
    inputHalf: {
        marginRight: 10,
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
