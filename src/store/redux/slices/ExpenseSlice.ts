import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type ExpenseType = {
    id: string,
    description: string,
    amount: number,
    date: Date
}


const DUMMY_EXPENSES: ExpenseType[] = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-12-05')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.00,
        date: new Date('2023-12-19')
    },
    {
        id: 'e4',
        description: 'A guitar',
        amount: 299.99,
        date: new Date('2023-12-25')
    },
    {
        id: 'e5',
        description: 'Macbook',
        amount: 3000.00,
        date: new Date('2023-12-14')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-12-05')
    },
    {
        id: 'e8',
        description: 'Some bananas',
        amount: 5.00,
        date: new Date('2023-12-19')
    },
    {
        id: 'e9',
        description: 'A guitar',
        amount: 299.99,
        date: new Date('2023-12-25')
    },
    {
        id: 'e10',
        description: 'Macbook',
        amount: 3000.00,
        date: new Date('2023-12-14')
    },
]

const initialState: ExpenseType[] = DUMMY_EXPENSES

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {}
});

export const selectedExpenses = (state: RootState) => state.expense
export default expenseSlice.reducer
