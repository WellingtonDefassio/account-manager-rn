import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {ExpenseType} from "../components/expense/ExpenseOutput";


interface ManageExpensesProps {
    expenseId: string
    route: { params: { expenseId: string } }
    navigation: any
}

export default function ManageExpenses(props: ManageExpensesProps) {

    const expenseId = props.route.params?.expenseId;
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [props.navigation, isEditing]);

    return (
        <View>
            <Text> ManageExpenses </Text>
        </View>
    );
}
