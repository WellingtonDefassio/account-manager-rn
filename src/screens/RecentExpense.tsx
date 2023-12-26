import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";
import {useAppSelector} from "../store/redux/hooks";
import {expenseActions, ExpenseType, selectedExpenses} from "../store/redux/slices/ExpenseSlice";
import {getDateMinusDays} from "../constants/util";
import {fetchExpense} from "../constants/http";
import {useDispatch} from "react-redux";
import LoadingOverlay from "../components/ui/LoadingOverlay";

export default function RecentExpense() {

    const [loading, setLoading] = useState(true)

    const expensesSelected = useAppSelector(selectedExpenses);
    const dispatch = useDispatch();


    useEffect(() => {
        async function getExpenses() {
            setLoading(true)
            const expenses = await fetchExpense();
            dispatch(expenseActions.setAllExpenses(expenses))
            setLoading(false)
        }

        getExpenses();
    }, []);

    const today = new Date();

    const recentExpenses = expensesSelected.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const days7DaysAgo = getDateMinusDays(today, 7)
        return (expenseDate >= days7DaysAgo) && (expenseDate <= today)
    });

    function isLoading() {
        return loading ? <LoadingOverlay/> : null
    }

    function renderExpenseOutput() {
        return (
            <ExpenseOutput
                expenses={recentExpenses}
                periodName={"Last 7 Days"}
                fallbackText={"No expenses registered for the last 7 days."}
            />
        )
    }

    return (
        <>
            {isLoading() || renderExpenseOutput()}
        </>

    );
}
