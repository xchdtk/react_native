import { StatusBar } from "expo-status-bar";
import React from "react";
import styled, { css } from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: #e3e3e3;
    align-items: center;
    justify-content: center;
`;

const cssText = css`
    font-size: 40px;
    font-weight: 600;
`;

const StyledText = styled.Text`
    ${cssText}
    color: blue;
`;

const ErrorText = styled.Text`
    ${cssText}
    color: red;
`;

const StyledButton = styled.Button``;

export default function App() {
    return (
        <Container>
            <StatusBar style="auto" />
            <StyledText>style componenets</StyledText>
            <ErrorText>error !!</ErrorText>
            <StyledButton title="사랑해" onPress={() => alert("더 사랑해")} />
        </Container>
    );
}
