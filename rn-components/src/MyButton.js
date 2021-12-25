import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import propTypes from "prop-types";

const MyButton = ({ title, onPress, children }) => {
    return (
        <TouchableOpacity onPress={() => console.log("press")} onPressIn={() => console.log("in")} onPressOut={() => console.log("out")} onLongPress={() => console.log("long")} delayLongPress={3000}>
            <View style={{ backgroundColor: "red", padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20, color: "white" }}>{children || title}</Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: "너만을 사랑해",
    onPress: () => alert("default"),
};
MyButton.propTypes = {
    title: propTypes.string.isRequired,
    onPress: propTypes.func,
};

export default MyButton;
