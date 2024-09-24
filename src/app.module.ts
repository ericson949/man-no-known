import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElectionPromiseModule } from './election-promises/insfrastructure/module/election-promises.module';

@Module({
  imports: [ElectionPromiseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
