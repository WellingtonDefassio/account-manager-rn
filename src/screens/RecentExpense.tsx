import React from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";

export default function RecentExpense() {
  return (
    <ExpenseOutput expenses={[]} periodName={"Last 7 Days"}/>
  );
}
