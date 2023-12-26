import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {GlobalStyles} from "../../../constants/colors";

interface InputForm {
    label: string
    textInputConfig?: TextInputProps
}

export default function Input(props: InputForm) {

    let inputStyles: any[] = [styles.input]
    if (props.textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiLine)
    }


    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput {...props.textInputConfig} style={inputStyles}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiLine: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})
