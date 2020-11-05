import { NestFactory } from '@nestjs/core';
import { PayrollModule } from './payroll.module';

async function bootstrap() {
  const app = await NestFactory.create(PayrollModule);
  await app.listen(3000);
}
bootstrap();
