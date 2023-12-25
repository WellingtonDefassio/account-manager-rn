import React, {useState} from 'react';
import {View} from 'react-native';
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

    function setAmountHandler(amount: string){
        console.log(amount)
    }
    function setDateHandler(date: string){
        console.log(date)
    }

    return (
        <View>
            <Input label={"Amount"} textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: setAmountHandler
            }}/>
            <Input label={"Date"} textInputConfig={{
                placeholder: "date YYYY-MM-DD",
                maxLength: 10,
                onChangeText: setDateHandler
            }}/>
            <Input label={"Description"} textInputConfig={{
                multiline: true,

            }}/>
        </View>
    );
}
