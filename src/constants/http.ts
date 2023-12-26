import {ExpenseCreateType, ExpenseType} from "../store/redux/slices/ExpenseSlice";
import axios from "axios";

const BASE_URL = "https://react-native-course-e17a3-default-rtdb.firebaseio.com/"
const EXPENSE_DOMAIN = "expenses"

export async function storeExpense(expenseData: ExpenseCreateType): Promise<string> {
    const response = await axios.post(BASE_URL + EXPENSE_DOMAIN + ".json", expenseData);
    return response.data.name
}

export async function fetchExpense() {
    const response = await axios.get(BASE_URL + EXPENSE_DOMAIN + ".json");
    const expenses = [];
    for (const key in response.data) {
        const expenseObj: ExpenseType = {
            id: key,
            amount: response.data[key].amount,
            date: response.data[key].date,
            description: response.data[key].description,
        }
        expenses.push(expenseObj)
    }
    return expenses;
}
