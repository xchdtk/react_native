import React from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Input from "./components/Input";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.main};
    width: 100%;
    align-items: flex-end;
    padding: 0 20px;
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>TODO List</Title>
                <StatusBar barStyle="light-content" backgroundColor={theme.background} />
                <Input placeholder="+ Add a Task" />
            </Container>
        </ThemeProvider>
    );
}
