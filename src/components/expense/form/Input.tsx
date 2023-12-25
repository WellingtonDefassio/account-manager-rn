import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface InputForm {
    label: string
    textInputConfig?: TextInputProps
}

export default function Input(props: InputForm) {

    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput {...props.textInputConfig} />
        </View>
    );
}
