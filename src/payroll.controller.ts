import { Controller, Get, Param } from '@nestjs/common';

import { PayrollService } from './payroll.service';

import { GojobberId } from './domain/gojobber-id';
import { Month } from './domain/month';

@Controller()
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Get('/healthcheck')
  healthcheck() {
    return true
  }

  @Get('net-salary/:gojobberId/:month')
  getNetSalary(@Param('gojobberId') gojobberId: string, @Param('month') month: string): number {
    return this.payrollService.getNetSalary(GojobberId.fromString(gojobberId), Month.fromString(month)).toNumber();
  }

}
