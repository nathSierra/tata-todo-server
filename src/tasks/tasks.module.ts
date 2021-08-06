import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { DatabaseModule } from 'src/database.module';
import { taskProviders } from './task.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [...taskProviders, TasksService],
})
export class TasksModule {}
