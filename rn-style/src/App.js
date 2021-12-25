import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Box from "./Box";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Box style={{ backgroundColor: "red", flex: 1 }} />
            <Box style={{ backgroundColor: "green", flex: 3 }} />
            <Box style={{ backgroundColor: "blue", flex: 1 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
