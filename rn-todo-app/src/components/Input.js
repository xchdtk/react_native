import React, { useState } from "react";
import styled from "styled-components";
import { Dimensions, useWindowDimensions } from "react-native";
import propTypes from "prop-types";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.itemBackground};
    color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder }) => {
    // const width = Dimensions.get("window").width;
    const width = useWindowDimensions().width;
    const [newTask, setNewTask] = useState("");
    const onChangeText = (text) => setNewTask(text);
    const addTask = () => {
        alert(newTask);
        setNewTask("");
    };
    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={10}
            autoCapitalize="none"
            authCorrect={false}
            returnKeyType="done"
            keyboardAppearance="dark"
            value={newTask}
            onChangeText={onChangeText}
            onSubmitEditing={addTask}
        />
    );
};

Input.prototype = {
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    onChangeText: propTypes.func.isRequired,
    onSubmitEditing: propTypes.func.isRequired,
};

export default Input;
