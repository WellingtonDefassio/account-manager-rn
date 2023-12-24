import React from 'react';
import {View} from 'react-native';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

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
]


interface ExpenseOutputProps {
    expenses: ExpenseType[]
    periodName: string
}

export default function ExpenseOutput(props: ExpenseOutputProps) {
    return (
        <View>
            <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={props.periodName}/>
            <ExpenseList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}
