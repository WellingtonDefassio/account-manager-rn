import React from 'react';
import {View, Text, Pressable, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {GlobalStyles} from "../../constants/colors";

interface ButtonCustomProps {
    children: any,
    onPress: () => void
    mode?: string
    style?: StyleProp<ViewStyle>
}

export default function ButtonCustom(props: ButtonCustomProps) {
    return (
        <View style={props.style}>
            <Pressable onPress={props.onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={[styles.button, props.mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, props.mode === 'flat' && styles.flatText]}>{props.children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
})
