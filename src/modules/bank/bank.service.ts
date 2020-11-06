import { Injectable } from "@nestjs/common";

@Injectable()
export class BankService {

  /**
   * Sends money to an gojobber bank account
   */
  async sendMoney(gojobberId: string, money: number): Promise<void> {
    // magic method, just pretend it works ;)
  }

}