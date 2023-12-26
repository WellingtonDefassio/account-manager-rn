import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import axios from "axios/index";

export type ExpenseType = {
    id: string,
    description: string,
    amount: number,
    date: string
}
export type ExpenseCreateType = {
    description: string,
    amount: number,
    date: string
}


const expenseSlice = createSlice({
    name: "expense",
    initialState : [] as ExpenseType[],
    reducers: {
        addExpense: (state, action: PayloadAction<ExpenseCreateType>) => {
            const id = new Date().toString() + Math.random().toString()
            const newExpense: ExpenseType = {
                id,
                ...action.payload
            }
            state.push(newExpense)
        },
        deleteExpense: (state, action: PayloadAction<string>) => {
            return state.filter(expense => expense.id !== action.payload)
        },
        setAllExpenses: (state, action: PayloadAction<ExpenseType[]>) => {
            return action.payload
        },
        updateExpense: (state, action: PayloadAction<ExpenseType>) => {
            return state.map(expense => {
                if (expense.id === action.payload.id) {
                    return action.payload
                }
                return expense
            })
        },

    }
});

export const expenseActions = expenseSlice.actions
export const selectedExpenses = (state: RootState) => state.expense
export default expenseSlice.reducer
