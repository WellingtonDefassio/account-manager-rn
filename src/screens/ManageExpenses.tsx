import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/colors";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {expenseActions, ExpenseCreateType, ExpenseType, selectedExpenses} from "../store/redux/slices/ExpenseSlice";
import ExpenseForm from "../components/expense/form/ExpenseForm";
import {useAppSelector} from "../store/redux/hooks";


interface ManageExpensesProps {
    route: any
    navigation: NavigationProp<ParamListBase>
    expense?: ExpenseType
}

export default function ManageExpenses(props: ManageExpensesProps) {

    const expenseId = props.route.params?.expenseId;
    const isEditing = !!expenseId

    const dispatch = useDispatch()

    const expenseSelected = useAppSelector(selectedExpenses).find(expense => expense.id === expenseId)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [props.navigation, isEditing]);

    function deleteExpenseHandler() {
        dispatch(expenseActions.deleteExpense(expenseId))
        props.navigation.goBack()
    }

    function cancelExpenseHandler() {
        props.navigation.goBack()
    }

    function confirmExpenseHandler(expense: ExpenseCreateType) {
        if (isEditing) {

            dispatch(expenseActions.updateExpense({
                id: expenseId,
                ...expense
            }))
        } else {
            dispatch(expenseActions.addExpense(expense))
        }

        props.navigation.goBack()
    }

    function renderTrash() {
        return (
            <View style={styles.deleteContainer}>
                <IconButton
                    name={"trash"} size={36} color={GlobalStyles.colors.error500}
                    onPress={deleteExpenseHandler}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ExpenseForm
                confirmExpenseHandler={confirmExpenseHandler}
                cancelExpenseHandler={cancelExpenseHandler}
                defaultValue={expenseSelected}
            />
            {isEditing && renderTrash()}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
})
