import { StyleSheet, View } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEBD7",
        justifyContent: "space-between",
    },
});
