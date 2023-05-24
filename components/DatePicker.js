import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker() {
    const { shipmentDetails, setShipmentDetails } = useContext(ShipmentContext);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [text, setText] = useState("empty");
    const [isDob, setIsDob] = useState(false);

    const onChange = (event, selectedDate) => {
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

    const showMode = (currentMode) => {
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
