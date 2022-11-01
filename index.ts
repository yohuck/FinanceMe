import Expense from "./entities/Expense";
import Budget from "./entities/Budget";
import Category from "./enums/Category";


const expenses = [
    new Expense('Lyft', 40, '10/15/22'),
    new Expense('DEN -> SNA', 200, new Date()),
    new Expense('Neck Pillow', 20, '10/22/22'),
];

const budget = new Budget(
    'Travel Stuff',
    100,
    Category.Transportation,
    expenses
)

console.log(budget.getExpenses())

console.log(budget.getIsOverLimit())