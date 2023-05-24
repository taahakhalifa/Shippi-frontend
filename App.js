import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEBD7",
        justifyContent: "space-between",
    },
});
