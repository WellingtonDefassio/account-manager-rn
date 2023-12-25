import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ExpenseType} from "../components/expense/ExpenseOutput";
import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/colors";
import ButtonCustom from "../components/ui/ButtonCustom";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationProp, ParamListBase} from "@react-navigation/native";


interface ManageExpensesProps {
    expenseId: string
    route: { params: { expenseId: string } }
    navigation: NavigationProp<ParamListBase>
}

export default function ManageExpenses(props: ManageExpensesProps) {

    const expenseId = props.route.params?.expenseId;
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [props.navigation, isEditing]);

    function deleteExpenseHandler() {
        console.log("DELETE!")
        props.navigation.goBack()
    }

    function cancelExpenseHandler() {
        props.navigation.goBack()
    }
    function confirmExpenseHandler() {

        console.log("Confirm!!")
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
            <View style={styles.buttons}>
                <ButtonCustom onPress={cancelExpenseHandler} mode={"flat"} style={styles.button}>Cancel</ButtonCustom>
                <ButtonCustom onPress={confirmExpenseHandler} style={styles.button}>Confirm</ButtonCustom>
            </View>
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
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
})
