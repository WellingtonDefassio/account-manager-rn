import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

interface ExpenseOutputProps {
    expenses: any[]
}

export default function ExpenseOutput() {
    return (
        <View>
            <ExpenseSummary/>
            <ExpenseList/>
        </View>
    );
}
