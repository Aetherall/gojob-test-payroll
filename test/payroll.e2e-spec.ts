import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { Payroll } from '../src/domain/payroll';
import { GojobberId } from '../src/domain/gojobber-id';
import { Month } from '../src/domain/month';
import { MoneyAmount } from '../src/domain/money-amount';
import { PayrollInMemoryRepository } from '../src/payroll.repository';
import { PayrollModule } from '../src/payroll.module';

describe('PayrollController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PayrollModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('GET /net-salary', () => {

    it('returns the net salary of the gojobber on the given month', () => {
      const gojobberId = GojobberId.fromString('e29e1e49-c952-4dd2-a49c-0a2cff391ce1')
      const month = Month.fromString('2020-11')
      const earnedMoney = MoneyAmount.fromNumber(258)

      const payroll = new Payroll(gojobberId, month, earnedMoney)

      app.get(PayrollInMemoryRepository).save(payroll)

      return request(app.getHttpServer())
        .get(`/net-salary/${gojobberId.toString()}/${month.toString()}`)
        .expect(HttpStatus.OK)
        .expect('258')
    })

  })
});
