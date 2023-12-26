import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";
import {useAppSelector} from "../store/redux/hooks";
import {expenseActions, ExpenseType, selectedExpenses} from "../store/redux/slices/ExpenseSlice";
import {getDateMinusDays} from "../constants/util";
import {fetchExpense} from "../constants/http";
import {useDispatch} from "react-redux";

export default function RecentExpense() {

    const expensesSelected = useAppSelector(selectedExpenses);
    const dispatch = useDispatch();


    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpense();
            dispatch(expenseActions.setAllExpenses(expenses))
        }
        getExpenses();
    }, []);

    const today = new Date();

    const recentExpenses = expensesSelected.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const days7DaysAgo = getDateMinusDays(today, 7)
        return (expenseDate >= days7DaysAgo) && (expenseDate <= today)
    });

    return (
        <ExpenseOutput
            expenses={recentExpenses}
            periodName={"Last 7 Days"}
            fallbackText={"No expenses registered for the last 7 days."}
        />
    );
}
