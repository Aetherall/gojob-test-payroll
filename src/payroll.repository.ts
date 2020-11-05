import { Payroll } from "./domain/payroll";
import { GojobberId } from "./domain/gojobber-id";
import { Month } from "./domain/month";
import { MoneyAmount } from "./domain/money-amount";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PayrollInMemoryRepository {

  private store = new Map<string, number>()

  load(gojobberId: GojobberId, month: Month): Payroll | undefined {
    const earnedMoney = this.store.get(`${gojobberId.toString()}:${month.toString()}`)
    
    return new Payroll(gojobberId, month, new MoneyAmount(earnedMoney))
  }

  save(payroll: Payroll): void {
    this.store.set(`${payroll.gojobberId.toString()}:${payroll.month.toString()}`, payroll.getNetSalary().toNumber())
  }

}