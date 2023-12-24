import React from 'react';
import {View, Text} from 'react-native';
import {ExpenseType} from "./ExpenseOutput";

interface ExpenseSummaryProps {
    periodName: string
    expenses: ExpenseType[]
}

export default function ExpenseSummary(props: ExpenseSummaryProps) {

    const expensesSum = props.expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)


    return (
        <View>
            <Text>{props.periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}
