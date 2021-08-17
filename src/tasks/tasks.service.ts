import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { ReadTaskDto } from './dto/read-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    console.info(createTaskDto);
    return this.taskRepository.save(createTaskDto);
  }

  // findAll(): Promise<Task[]> {
  //   return this.taskRepository.find();
  // }

  // async findByTeamID(teamID: string): Promise<Task[]> {
  //   console.info('wehehehehehhe');
  //   return await this.taskRepository.find({ where: { teamID } });
  // }

  async getTasksByTeam(teamID: string): Promise<ReadTaskDto[]> {
    console.info('teamID', teamID);
    const tasks: Task[] = await this.taskRepository
      .createQueryBuilder('tasks')
      .where('"teamID" = :teamID ', { teamID: teamID })
      .getMany();

    console.log(tasks);
    return tasks;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async delete(id: string) {
    // console.info(this.taskRepository.delete(id));
    return await this.taskRepository.delete(id);
  }
}
