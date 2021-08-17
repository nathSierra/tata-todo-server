import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Account } from './accounts/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';
import { Team } from './team/team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nathan',
      password: 'flareon',
      database: 'tata-db',
      entities: [Account, Task, Team],
      synchronize: false,
    }),
    AuthModule,
    AccountsModule,
    TasksModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
