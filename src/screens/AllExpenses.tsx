import React from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";
import {useAppSelector} from "../store/redux/hooks";
import {selectedExpenses} from "../store/redux/slices/ExpenseSlice";

export default function AllExpenses() {

    const expensesSelected = useAppSelector(selectedExpenses);

    return (
        <ExpenseOutput
            expenses={expensesSelected}
            periodName={"Total"}
            fallbackText={"No registered expenses found!"}
        />
    );
}
