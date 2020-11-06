import { Module } from "@nestjs/common";
import { BankService } from "./bank.service";

@Module({
  imports: [],
  providers: [BankService],
  exports: [BankService]
})
export class BankModule { }