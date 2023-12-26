import {ExpenseCreateType, ExpenseType} from "../store/redux/slices/ExpenseSlice";
import axios from "axios";

const BASE_URL = "https://react-native-course-e17a3-default-rtdb.firebaseio.com/"
const EXPENSE_DOMAIN = "expenses"

export function storeExpense(expenseData: ExpenseCreateType) {
    axios.post(BASE_URL + EXPENSE_DOMAIN + ".json", expenseData)
}

export async function fetchExpense() {
    const response = await axios.get(BASE_URL + EXPENSE_DOMAIN + ".json");
    const expenses = [];
    console.log(response.data)
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
