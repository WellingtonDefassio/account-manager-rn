import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import {GlobalStyles} from "../../constants/colors";
import {ExpenseType, selectedExpenses} from "../../store/redux/slices/ExpenseSlice";
import {useAppSelector} from "../../store/redux/hooks";

interface ExpenseOutputProps {
    expenses: ExpenseType[]
    periodName: string
    fallbackText: string
}

export default function ExpenseOutput(props: ExpenseOutputProps) {

    const hasExpenses = props.expenses.length > 0

    function renderNoExpenses() {
        return (
            <Text style={styles.infoText}>{props.fallbackText}</Text>
        )
    }


    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={props.expenses} periodName={props.periodName}/>
            {hasExpenses ? <ExpenseList expenses={props.expenses}/> : renderNoExpenses()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 32
    }
})
