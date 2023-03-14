import { HasFormatter } from '../interfaces/HasFormatter';

// classes

class preRefactoredInvoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// refactor invoice class and use access modifiers

class invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

export { invoice };