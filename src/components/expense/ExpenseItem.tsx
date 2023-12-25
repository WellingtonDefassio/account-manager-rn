import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ExpenseType} from "./ExpenseOutput";
import {GlobalStyles} from "../../constants/colors";

interface ExpenseItemProps {
    expense: ExpenseType
}

export default function ExpenseItem(props: ExpenseItemProps) {
    return (
        <Pressable>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{props.expense.description}</Text>
                    <Text style={styles.textBase}>{props.expense.date.toString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{props.expense.amount}</Text>
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
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    }

})