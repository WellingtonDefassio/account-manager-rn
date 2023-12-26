import {ExpenseCreateType, ExpenseType} from "../store/redux/slices/ExpenseSlice";

export function getFormattedDate(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date: Date, days: number) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function validAmount(number: number): boolean {
    return !isNaN(number) && number > 0;
}

export function validDate(dateString: string): boolean {
    const date = new Date(dateString);
    return date.toString() !== 'Invalid Date' && date.toISOString().length === 24
}

export function validDescription(description: string): boolean {
    return description.trim().length > 0
}

export function validateExpenseValues(expense: ExpenseCreateType): boolean {
    return !(!validAmount(expense.amount) || !validDate(expense.date) || !validDescription(expense.description));

}
