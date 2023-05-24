import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Ionicons
                    name="ios-home-outline"
                    size={35}
                    color="white"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign
                    name="search1"
                    size={35}
                    color="black"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    name="account"
                    size={35}
                    color="black"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B89467",
        flexDirection: "row",
    },
    icon: {
        marginHorizontal: 45,
    },
});
