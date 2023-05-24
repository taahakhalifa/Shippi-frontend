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

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.homeContent}>
            <ScrollView>
                <Text style={styles.mainText}>
                    Where are you wanting to ship?
                </Text>
                <ScrollView horizontal={true} style={styles.imageContent}>
                    <ImageBackground
                        style={[styles.homeImage]}
                        source={{
                            uri: "https://i2-prod.mirror.co.uk/incoming/article28871029.ece/ALTERNATES/s615b/1_An-elevated-view-of-the-London-skyline-looking-east-to-westjpgLondon-at-sunrise.jpg",
                        }}
                    >
                        <Text style={styles.imageQuestion}>Standard UK&I</Text>
                    </ImageBackground>
                    <ImageBackground
                        style={[styles.homeImage]}
                        source={{
                            uri: "https://w0.peakpx.com/wallpaper/350/948/HD-wallpaper-beautiful-airplane.jpg",
                        }}
                    >
                        <Text style={styles.imageQuestion}>International</Text>
                    </ImageBackground>

                    <ImageBackground
                        style={[styles.homeImage]}
                        source={{
                            uri: "https://media.cnn.com/api/v1/images/stellar/prod/211012150618-spaceship-neptune-over-bahamas.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
                        }}
                    >
                        <Text style={styles.imageQuestion}>Intergalactic</Text>
                    </ImageBackground>
                </ScrollView>
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
    imageContent: {
        flexDirection: "row",
        marginBottom: 20,
    },
    homeImage: {
        marginTop: 20,
        width: 180,
        height: 100,
        borderRadius: 12,
        overflow: "hidden",
        marginRight: 15,
    },
    imageQuestion: {
        position: "absolute",
        bottom: 10,
        left: 10,
        color: "white",
        fontSize: 16,
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
