import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState, useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function DatePicker() {
    const context = useContext(ShipmentContext);
    if (!context) {
        throw new Error("DatePicker must be used within a ShipmentProvider");
    }
    const { shipmentDetails, setShipmentDetails } = context;

    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<"date" | "time">("date");
    const [show, setShow] = useState<boolean>(false);
    const [text, setText] = useState<string>("empty");
    const [isDob, setIsDob] = useState<boolean>(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        setIsDob(true);

        let tempDate = new Date(currentDate);

        let fDate =
            tempDate.getDate() +
            "-" +
            (tempDate.getMonth() + 1) +
            "-" +
            tempDate.getFullYear() +
            ", " +
            tempDate.getDay();
        setText(fDate);

        setShipmentDetails({
            ...shipmentDetails,
            shipment_date: fDate,
        });
    };

    const showMode = (currentMode: "date" | "time") => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <View style={styles.datePickerContainer}>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    datePickerContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 15,
        padding: 3,
        width: "100%",
        alignItems: "flex-start",
    },
});
