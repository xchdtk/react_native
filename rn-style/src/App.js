import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles, orangeText } from "./style";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, orangeText]}>style code</Text>
            <Text style={[styles.text, styles.errorText]}>error text</Text>
            <StatusBar style="auto" />
        </View>
    );
}
