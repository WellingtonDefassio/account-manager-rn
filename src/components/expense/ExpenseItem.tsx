import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ExpenseType} from "./ExpenseOutput";
import {GlobalStyles} from "../../constants/colors";
import {getFormattedDate} from "../../constants/util";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

interface ExpenseItemProps {
    expense: ExpenseType
}

export default function ExpenseItem(props: ExpenseItemProps) {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    function expensePressHandler() {
       navigation.navigate("ManageExpense")
    }


    return (
        <Pressable
            onPress={expensePressHandler}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{props.expense.description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(props.expense.date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${props.expense.amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width:1, height: 1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.5
    }

})
