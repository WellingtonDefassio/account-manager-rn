import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Ionicons, MaterialIcons } from "@expo/vector-icons"

interface IconButtonProps {
    name: any,
    size: number,
    color: string | undefined,
    onPress: () => void
}
export default function IconButton(props: IconButtonProps) {
  return (
    <Pressable onPress={props.onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.buttonContainer}>
            <Ionicons name={props.name} size={props.size} color={props.color}/>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})
