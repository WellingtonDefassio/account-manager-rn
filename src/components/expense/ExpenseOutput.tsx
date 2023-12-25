import React from 'react';
import {StyleSheet, View} from 'react-native';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import {GlobalStyles} from "../../constants/colors";
import {ExpenseType, selectedExpenses} from "../../store/redux/slices/ExpenseSlice";
import {useAppSelector} from "../../store/redux/hooks";

interface ExpenseOutputProps {
    expenses: ExpenseType[]
    periodName: string
}

export default function ExpenseOutput(props: ExpenseOutputProps) {



    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={props.expenses} periodName={props.periodName}/>
            <ExpenseList expenses={props.expenses}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})
