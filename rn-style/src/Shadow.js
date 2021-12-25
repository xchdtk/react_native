import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

const Shadow = () => {
    return (
        <View style={styles.shadow}>
            <Text>{Platform.OS === "ios" ? "ios" : "android"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: "white",
        width: 200,
        height: 200,
        ...Platform.select({
            ios: {
                shadowColor: "#000000",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 20,
            },
        }),
    },
});

export default Shadow;
