import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ExpenseType} from "./ExpenseOutput";

interface ExpenseListProps {
    expenses: ExpenseType[]
}


export default function ExpenseList(props: ExpenseListProps) {

    function renderExpenseItem(item: ExpenseType) {
        return (
            <Text>{item.description}</Text>
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
