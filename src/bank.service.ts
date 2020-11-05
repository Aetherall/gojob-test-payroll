import { Injectable } from "@nestjs/common";
import { GojobberId } from "./domain/gojobber-id";
import { MoneyAmount } from "./domain/money-amount";

@Injectable()
export class BankService {

  /**
   * Sends money to an gojobber bank account
   */
  async sendMoney(gojobberId: GojobberId, money: MoneyAmount): Promise<void> {
    // magic method, just pretend it works ;)
  }

}