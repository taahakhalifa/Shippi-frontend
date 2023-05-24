import { SafeAreaView, StyleSheet, Text, Image } from "react-native";
import React from "react";

export default function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>
                Shipp
                <Text style={styles.specialChar}>i</Text>
            </Text>
            <Image
                style={styles.headerImage}
                source={{
                    uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1684787314~exp=1684787914~hmac=f90a0fc3c510104ae189b186f3e3a34d9b7d2a927933847065fdb327ef02e43c",
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 25,
    },
    headerText: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#413925",
    },
    specialChar: {
        color: "#DEB887",
    },
    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
});
