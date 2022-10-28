import Expense from "./entities/Expense";

const myExpense = new Expense('0123456789123456789 this text should be removed', 20.99, '10/28/22')

console.log(myExpense.getId())
console.log(myExpense.getLabel())
console.log(myExpense.getDate())

myExpense.updateLabel('Coding lessons')
console.log(myExpense.getLabel())