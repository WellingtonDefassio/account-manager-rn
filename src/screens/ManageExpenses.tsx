import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/colors";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {expenseActions, ExpenseCreateType, ExpenseType, selectedExpenses} from "../store/redux/slices/ExpenseSlice";
import ExpenseForm from "../components/expense/form/ExpenseForm";
import {useAppSelector} from "../store/redux/hooks";
import {deleteExpense, storeExpense, updateExpense} from "../constants/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";


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

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ message: string, state: boolean }>({state: false, message: ""})

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [props.navigation, isEditing]);

    async function deleteExpenseHandler() {
        try {
            setLoading(true)
            await deleteExpense(expenseId)
            dispatch(expenseActions.deleteExpense(expenseId))
            props.navigation.goBack()
        } catch (e) {
            setError({state: true, message: "Error trying to delete expense with id : " + expenseId})
        } finally {
            setLoading(false)
        }
    }

    function cancelExpenseHandler() {
        props.navigation.goBack()
    }

    async function confirmExpenseHandler(expense: ExpenseCreateType) {

        try {
            if (isEditing) {
                setLoading(true)
                await updateExpense(expenseId, expense)
                dispatch(expenseActions.updateExpense({
                    id: expenseId,
                    ...expense
                }))
                props.navigation.goBack()
            } else {
                setLoading(true)
                const id = await storeExpense(expense);
                dispatch(expenseActions.addExpense({...expense, id}))
                props.navigation.goBack()
            }
        } catch (e) {
            setError({state: true, message: "Error trying create/update expense"})
        } finally {
            setLoading(false)
        }
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

    function isLoading() {
        return loading ? <LoadingOverlay/> : null
    }

    function renderExpenseForm() {
        return (
            <View style={styles.container}>
                <ExpenseForm
                    confirmExpenseHandler={confirmExpenseHandler}
                    cancelExpenseHandler={cancelExpenseHandler}
                    defaultValue={expenseSelected}
                />
                {isEditing && renderTrash()}
            </View>
        )
    }

    function resetErrorState() {
        setError({state: false, message: ""})
        props.navigation.goBack()
    }

    function hasError() {
        return error.state ? <ErrorOverlay message={error.message} onConfirm={resetErrorState}/> : null
    }


    return (
        <>
            {hasError() || isLoading() || renderExpenseForm()}
        </>
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
