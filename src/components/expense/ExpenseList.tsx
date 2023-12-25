import React from 'react';
import {FlatList} from 'react-native';
import ExpenseItem from "./ExpenseItem";
import {ExpenseType} from "../../store/redux/slices/ExpenseSlice";

interface ExpenseListProps {
    expenses: ExpenseType[]
}


export default function ExpenseList(props: ExpenseListProps) {

    function renderExpenseItem(item: ExpenseType) {
        return (
            <ExpenseItem expense={item} />
        )
    }

    return (
        <FlatList
            data={props.expenses}
            renderItem={({item}) => renderExpenseItem(item)}
            keyExtractor={(item) => item.id}
        />
    );
}
