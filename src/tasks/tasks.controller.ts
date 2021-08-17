import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ReadTaskDto } from './dto/read-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    console.info('taskController', createTaskDto);
    return this.tasksService.create(createTaskDto);
  }

  // @Get()
  // findAll() {
  //   return this.tasksService.findAll();
  // }

  @Get(':teamID')
  findByTeamID(@Param('teamID') teamID: string) {
    console.info('teamID', teamID);
    return this.tasksService.getTasksByTeam(teamID);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tasksService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.info(id);
    return this.tasksService.delete(id);
  }
}
