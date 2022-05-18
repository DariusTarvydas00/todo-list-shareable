import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from '../Business logic/tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTasksFilterDto } from './dtos/get-tasks-filter.dto';
import {UpdateTaskStatusDto} from "./dtos/update-task-status.dto";
import {Task} from "./task.entity";
// Entry point to communicate with service and return the result
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  // @Get()
  // getTasks(@Query() filteredDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filteredDto).length) {
  //     return this.tasksService.getTasksWithFilters(filteredDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  @Get('/:id')
  getTaskById(@Param('id') id:string):Promise<Task>{
    return this.tasksService.getTaskById(id);
  }
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string) {
  //   return this.tasksService.deleteTask(id);
  // }
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateStatusTaskDto:UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateStatusTaskDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
