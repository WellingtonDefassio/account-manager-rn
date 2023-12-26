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

interface FieldsValidate {
    amount: boolean,
    date: boolean,
    description: boolean
}

export function getInvalidsField(expense: ExpenseCreateType) {
    let validateFields = {
        amount: true,
        date: true,
        description: true
    }
    if (!validAmount(expense.amount)) {
        validateFields.amount = false
    }
    if (!validDate(expense.date)) {
        validateFields.date = false
    }
    if (!validDescription(expense.description)) {
        validateFields.description = false
    }
    return validateFields;
}

export function hasInvalidField(validateFields: FieldsValidate) {
  return !validateFields.amount || !validateFields.date || !validateFields.description
}
