import Expense from "./entities/Expense";
import Budget from "./entities/Budget";
import Category from "./enums/Category";
import TrackedMonth from "./entities/TrackedMonth";
import User from "./entities/User";

const user = new User("Eric", []);

const janExpenses = {
  home: [
    new Expense("Google Fi", 55, "1/15/22"),
    new Expense("Rent", 1000, "1/1/22"),
  ],
  snacks: [
    new Expense("Sour Patch Kids", 2, "1/23/22"),
    new Expense("Beef Jerky", 50, "1/11/22"),
  ],
};

//creates February Expenses
const febExpenses = {
  home: [new Expense("Wine Club", 55, "2/15/22")],
  snacks: [new Expense("VooDoo Chips", 3, "2/23/22")],
};

// creates January Budget
const janBudgets = [
  new Budget("Home", 200, Category.Housing, janExpenses.home),
  new Budget("Snacks", 50, Category.Food, janExpenses.snacks),
];

// creates February Budget
const febBudgets = [
  new Budget("Home", 1200, Category.Housing, febExpenses.home),
  new Budget("Snacks", 50, Category.Food, febExpenses.snacks),
];

// creates tracked months
const trackedMonths = [
  new TrackedMonth(1, 2022, janBudgets),
  new TrackedMonth(2, 2022, febBudgets),
];

user.getTrackedMonths().push(...trackedMonths);

user.getTrackedMonths().forEach((trackedMonth) => {
  const month = trackedMonth.getMonth();
  const year = trackedMonth.getYear();

  const numOverLimitBudgets = trackedMonth
    .getBudgets()
    .filter((budget) => budget.getIsOverLimit()).length;

  if (numOverLimitBudgets > 0) {
    console.log(
      `You are over budget for ${numOverLimitBudgets} ${
        numOverLimitBudgets === 1 ? "budget" : "budgets"
      } for ${month}-${year}`
    );
  }
});
