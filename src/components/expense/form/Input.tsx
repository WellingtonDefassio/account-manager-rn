import React from 'react';
import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import {JSX} from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;

interface InputForm {
    label : string
    textInputConfig: IntrinsicAttributes
}

export default function Input(props: InputForm) {
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput {...props.textInputConfig}/>
        </View>
    );
}
