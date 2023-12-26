import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from "./Input";
import {ExpenseType} from "../../../store/redux/slices/ExpenseSlice";
import ButtonCustom from "../../ui/ButtonCustom";


interface ExpenseFormProps {
    confirmExpenseHandler: () => void
    cancelExpenseHandler: () => void
}

const initialState: ExpenseType = {
    id: "",
    amount: 0,
    date: "",
    description: ""
}

export default function ExpenseForm(props: ExpenseFormProps) {

    const [expenseState, setExpenseState] = useState(initialState)

    function setAmountHandler(amount: string) {
        let number = parseFloat(amount);
        setExpenseState((current) => {
            return {...current, amount: number}
        })
    }

    function setDateHandler(date: string) {
        setExpenseState((current) => {
            return {...current, date: date}
        })
    }

    function setDescriptionHandler(description: string) {
        setExpenseState((current) => {
            return {...current, description: description}
        })
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.buttonsContainer}>
                <Input
                    label={"Amount"}
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: setAmountHandler,
                        value: expenseState.amount.toString()
                    }}/>
                <Input
                    label={"Date"}
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: setDateHandler,
                        value: expenseState.date.toString()
                    }}/>
            </View>
            <Input label={"Description"} textInputConfig={{
                multiline: true,
                onChangeText: setDescriptionHandler,
                value: expenseState.description.toString()
            }}/>
            <View style={styles.buttons}>
                <ButtonCustom onPress={props.cancelExpenseHandler} mode={"flat"} style={styles.button}>Cancel</ButtonCustom>
                <ButtonCustom onPress={props.confirmExpenseHandler} style={styles.button}>Confirm</ButtonCustom>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 24,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
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
})
