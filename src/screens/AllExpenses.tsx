import React from 'react';
import {View, Text} from 'react-native';
import ExpenseOutput from "../components/expense/ExpenseOutput";

export default function AllExpenses() {
  return (
   <ExpenseOutput expenses={[]} periodName={"Total"} />
  );
}
