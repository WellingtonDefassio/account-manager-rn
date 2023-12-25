import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ExpenseType} from "./ExpenseOutput";
import {GlobalStyles} from "../../constants/colors";

interface ExpenseSummaryProps {
    periodName: string
    expenses: ExpenseType[]
}

export default function ExpenseSummary(props: ExpenseSummaryProps) {

    const expensesSum = props.expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)


    return (
        <View style={styles.container}>
            <Text style={styles.period}>{props.periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500
    }
})
