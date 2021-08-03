import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  create(task: Task) {
    this.tasks.push(task);
  }

  findAll(): Task[] {
    return this.tasks;
  }
}
