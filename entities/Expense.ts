class Expense {
  private label: string;
  private amount: number;
  private date: Date;

  constructor(label: string, amount: number, date: Date | string) {
    this.updateLabel(label);
    this.updateAmount(amount);
    this.updateDate(date);
  }

  getLabel(): string {
    return this.label;
  }

  updateLabel(label: string): void {
    this.label = label;
  }

  getAmount(): number {
    return this.amount;
  }

  updateAmount(amount: number) {
    this.amount = amount;
  }

  getDate(): Date {
    return this.date;
  }

  updateDate(date: Date | string) {
    this.date = new Date(date);
  }
}

export default Expense;
