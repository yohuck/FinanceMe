import truncate from "../utils/truncate";
import genUniqueId from "../utils/genUniqueId";
import Expense from "./Expense";
import Category from "../enums/Category";

class Budget {
  private label: string;
  private limit: number;
  private id: string;
  private category: Category;
  private expenses: Expense[];

  constructor(
    label: string,
    limit: number,
    category: Category,
    expenses: Expense[]
  ) {
    this.updateLabel(label);
    this.updateLimit(limit);
    this.updateCategory(category);

    this.id = genUniqueId();
    this.expenses = expenses;
  }

  getId(): string {
    return this.id;
  }

  getLabel(): string {
    return this.label;
  }

  updateLabel(label: string) {
    this.label = truncate(label, 15);
  }

  getCategory(): Category {
    return this.category;
  }

  updateCategory(category: Category) {
    this.category = category;
  }

  getLimit(): number {
    return this.limit;
  }

  updateLimit(limit: number) {
    this.limit = limit;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getExpenseTotal(): number {
    return this.getExpenses().reduce(
      (sum, expense) => sum + expense.getAmount(),
      0
    );
  }

  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit();
  }
}

export default Budget;
