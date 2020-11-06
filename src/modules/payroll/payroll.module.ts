import { Module } from '@nestjs/common';
import { PayrollController } from './payroll.controller';
import { PayrollInMemoryRepository } from './payroll.repository';
import { PayrollService } from './payroll.service';

@Module({
  imports: [],
  controllers: [PayrollController],
  providers: [PayrollService, PayrollInMemoryRepository],
})
export class PayrollModule {}
