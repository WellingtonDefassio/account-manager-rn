import React from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";
import {useAppSelector} from "../store/redux/hooks";
import {selectedExpenses} from "../store/redux/slices/ExpenseSlice";
import {getDateMinusDays} from "../constants/util";

export default function RecentExpense() {

    const expensesSelected = useAppSelector(selectedExpenses);

    const today = new Date();

    const recentExpenses = expensesSelected.filter((expense) => {
        const days7DaysAgo = getDateMinusDays(today, 7)
        return expense.date > days7DaysAgo
    });

    return (
        <ExpenseOutput expenses={recentExpenses} periodName={"Last 7 Days"}/>
    );
}
