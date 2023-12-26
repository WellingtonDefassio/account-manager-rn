import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Input from "./Input";
import {ExpenseCreateType, ExpenseType} from "../../../store/redux/slices/ExpenseSlice";
import ButtonCustom from "../../ui/ButtonCustom";
import {getInvalidsField, hasInvalidField, validateExpenseValues, validDate} from "../../../constants/util";
import {GlobalStyles} from "../../../constants/colors";


interface ExpenseFormProps {
    confirmExpenseHandler: (newExpense: ExpenseCreateType) => void
    cancelExpenseHandler: () => void
    defaultValue: ExpenseType | undefined
}

export type ExpenseTypeState = {
    id: string,
    description: string,
    amount: string,
    date: string
}

const initialState: ExpenseTypeState = {
    id: "",
    amount: "",
    date: "",
    description: ""
}

const initialValidateState = {
    amount: true,
    date: true,
    description: true
}

export default function ExpenseForm(props: ExpenseFormProps) {

    const [expenseState, setExpenseState] = useState(props.defaultValue ?? initialState)
    const [validateFields, setValidateFields] = useState(initialValidateState)

    function setAmountHandler(amount: string) {
        setValidateFields({...validateFields, amount: true})
        setExpenseState((current) => {
            return {...current, amount: amount}
        })
    }

    function setDateHandler(date: string) {
        setValidateFields({...validateFields, date: true})
        setExpenseState((current) => {
            return {...current, date: date}
        })
    }

    function setDescriptionHandler(description: string) {
        setValidateFields({...validateFields, description: true})
        setExpenseState((current) => {
            return {...current, description: description}
        })
    }

    function submitHandler() {
        const newExpense: ExpenseCreateType = {
            amount: +expenseState.amount,
            date: expenseState.date,
            description: expenseState.description
        }

        if (!validateExpenseValues(newExpense)) {
            setValidateFields(getInvalidsField(newExpense))
            return;
        }

        props.confirmExpenseHandler(newExpense)
    }

    const formIsInvalid = hasInvalidField(validateFields)

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.buttonsContainer}>
                <Input
                    label={"Amount"}
                    style={styles.rowInput}
                    valid={validateFields.amount}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: setAmountHandler,
                        value: expenseState.amount.toString()
                    }}/>
                <Input
                    label={"Date"}
                    style={styles.rowInput}
                    valid={validateFields.date}
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: setDateHandler,
                        value: expenseState.date.toString()
                    }}/>
            </View>
            <Input
                label={"Description"}
                valid={validateFields.description}
                textInputConfig={{
                    multiline: true,
                    onChangeText: setDescriptionHandler,
                    value: expenseState.description.toString()
                }}/>
            {formIsInvalid &&
                <Text style={styles.errorText}>Invalid input values - please check your entered data!!</Text>}
            <View style={styles.buttons}>
                <ButtonCustom onPress={props.cancelExpenseHandler} mode={"flat"}
                              style={styles.button}>Cancel</ButtonCustom>
                <ButtonCustom onPress={submitHandler} style={styles.button}>Confirm</ButtonCustom>
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
    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8
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
