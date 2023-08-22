import React from "react"; // Include React import for TypeScript
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
import { ShipmentProvider } from "./context/ShipmentContext";
import { SenderProvider } from "./context/SenderContext";
import { ReceiverProvider } from "./context/ReceiverContext";

// Define the type for the navigation parameters
export type RootStackParamList = {
    Home: undefined;
    "Shipping Label": undefined;
    "Recipient Screen": undefined;
    "Shipment Cost": undefined;
    "Total Cost Screen": undefined;
};

// Use the type with the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    // Define the component as a Functional Component
    return (
        <ShipmentProvider>
            <SenderProvider>
                <ReceiverProvider>
                    <View style={styles.container}>
                        <NavigationContainer>
                            <Header />
                            <Stack.Navigator>
                                <Stack.Screen
                                    name="Home"
                                    component={HomeScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Shipping Label"
                                    component={DefinePackage}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Recipient Screen"
                                    component={RecipientScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Shipment Cost"
                                    component={ShipmentCost}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Total Cost Screen"
                                    component={TotalCostScreen}
                                    options={{ headerShown: false }}
                                />
                            </Stack.Navigator>
                            <Footer />
                        </NavigationContainer>
                    </View>
                </ReceiverProvider>
            </SenderProvider>
        </ShipmentProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEBD7",
        justifyContent: "space-between",
    },
});

export default App; // Make sure to export the component
