import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from "../../constants/colors";
import ButtonCustom from "./ButtonCustom";

export default function ErrorOverlay(props: {message : string, onConfirm: () => void}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={styles.text}>{props.message}</Text>
            <ButtonCustom onPress={props.onConfirm}>Okay</ButtonCustom>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: "white",
        textAlign: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
