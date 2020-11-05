import { GojobberId } from "./gojobber-id";
import { MoneyAmount } from "./money-amount";
import { Month } from "./month";

export class Payroll {
  
  constructor(
    public gojobberId: GojobberId,
    public month: Month,
    private total: MoneyAmount
  ) { }

  getNetSalary() {
    return this.total
  }
}