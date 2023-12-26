import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from "./Input";
import {ExpenseType} from "../../../store/redux/slices/ExpenseSlice";


const initialState: ExpenseType = {
    id: "",
    amount: 0,
    date: "",
    description: ""
}

export default function ExpenseForm() {

    const [expenseState, setExpenseState] = useState(initialState)

    function setAmountHandler(amount: string) {
        console.log(amount)
    }

    function setDateHandler(date: string) {
        console.log(date)
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
                        onChangeText: setAmountHandler
                    }}/>
                <Input
                    label={"Date"}
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: setDateHandler
                    }}/>
            </View>
            <Input label={"Description"} textInputConfig={{
                multiline: true,

            }}/>
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
    }
})
