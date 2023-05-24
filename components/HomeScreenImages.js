import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";

export default function HomeScreenImages() {
    const { pressedImage, setPressedImage } = useContext(ShipmentContext);
    const handleImagePress = (image) => {
        setPressedImage(image);
    };
    return (
        <View>
            <ScrollView horizontal={true} style={styles.imageContent}>
                <TouchableOpacity
                    style={[
                        styles.imageContainer,
                        pressedImage === "Standard UK&I" &&
                            styles.centeredImage,
                    ]}
                    onPress={() => handleImagePress("Standard UK&I")}
                >
                    <ImageBackground
                        style={[
                            styles.homeImage,
                            pressedImage !== "Standard UK&I" &&
                                styles.fadeImage,
                        ]}
                        source={{
                            uri: "https://i2-prod.mirror.co.uk/incoming/article28871029.ece/ALTERNATES/s615b/1_An-elevated-view-of-the-London-skyline-looking-east-to-westjpgLondon-at-sunrise.jpg",
                        }}
                    >
                        <Text style={styles.imageQuestion}>Standard UK&I</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.imageContainer,
                        pressedImage === "International" &&
                            styles.centeredImage,
                    ]}
                    onPress={() => handleImagePress("International")}
                >
                    <ImageBackground
                        style={[
                            styles.homeImage,
                            pressedImage !== "International" &&
                                styles.fadeImage,
                        ]}
                        source={{
                            uri: "https://w0.peakpx.com/wallpaper/350/948/HD-wallpaper-beautiful-airplane.jpg",
                        }}
                    >
                        <Text style={styles.imageQuestion}>International</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.imageContainer,
                        pressedImage === "Intergalactic" &&
                            styles.centeredImage,
                    ]}
                    onPress={() => handleImagePress("Intergalactic")}
                >
                    <ImageBackground
                        style={[
                            styles.homeImage,
                            pressedImage !== "Intergalactic" &&
                                styles.fadeImage,
                        ]}
                        source={{
                            uri: "https://media.cnn.com/api/v1/images/stellar/prod/211012150618-spaceship-neptune-over-bahamas.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
                        }}
                    >
                        <Text style={styles.imageQuestion}>Intergalactic</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
    imageContainer: {
        marginRight: 15,
        opacity: 1,
    },
    centeredImage: {
        justifyContent: "center",
        alignItems: "center",
    },
    fadeImage: {
        opacity: 0.3,
    },
});
