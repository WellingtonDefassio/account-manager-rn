import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {GlobalStyles} from "../../../constants/colors";

interface InputForm {
    label: string
    textInputConfig?: TextInputProps
    style?: any
    valid: boolean
}

export default function Input(props: InputForm) {

    let inputStyles: any[] = [styles.input]
    if (props.textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiLine)
    }
    if (!props.valid) {
        inputStyles.push(styles.invalidInput)
    }


    return (
        <View style={[styles.inputContainer, props.style]}>
            <Text style={[styles.label, !props.valid && styles.invalidLabel]}>{props.label}</Text>
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
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})
