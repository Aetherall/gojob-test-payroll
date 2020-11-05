import { Injectable } from '@nestjs/common';

import { PayrollInMemoryRepository } from './payroll.repository'

import { MoneyAmount } from "./domain/money-amount";
import { GojobberId } from "./domain/gojobber-id";
import { Month } from "./domain/month";

@Injectable()
export class PayrollService {
  constructor(private readonly payrollRepository: PayrollInMemoryRepository){}

  /**
   * Retrieves the net salary for the gojobber on a specific month.
   * Each end of month, the net salary is sent to the bank account of the gojobber.
   */
  getNetSalary(gojobberId: GojobberId, month: Month): MoneyAmount {
    const payroll = this.payrollRepository.load(gojobberId, month)

    if (!payroll) {
      return MoneyAmount.fromNumber(0)
    }

    return payroll.getNetSalary()
  }
}
