import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import DefinePackage from "./components/DefinePackage";
import RecipientScreen from "./components/RecipientScreen";
import ShipmentCost from "./components/ShipmentCost";
import TotalCostScreen from "./components/TotalCostScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Header />
                <Stack.Navigator>
                    {/* <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    /> */}
                    {/* <Stack.Screen
                        name="Shipping Label"
                        component={DefinePackage}
                        options={{ headerShown: false }}
                    /> */}
                    {/* <Stack.Screen
                        name="Recipient Screen"
                        component={RecipientScreen}
                        options={{ headerShown: false }}
                    /> */}
                    {/* <Stack.Screen
                        name="Shipment Cost"
                        component={ShipmentCost}
                        options={{ headerShown: false }}
                    /> */}
                    <Stack.Screen
                        name="Total Cost Screen"
                        component={TotalCostScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
                <Footer />
            </NavigationContainer>
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
