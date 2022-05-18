import {Injectable, NotFoundException} from '@nestjs/common';
import { TaskStatus } from '../core/task-status.enum';
import { CreateTaskDto } from '../tasks/dtos/create-task.dto';
import { GetTasksFilterDto } from '../tasks/dtos/get-tasks-filter.dto';
import {TasksRepository} from "../tasks/tasks.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../tasks/task.entity";

// Owns the business logic
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository
    ) {}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filteredDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filteredDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return tasks;
  // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne(id);
        if (!found){
            throw new NotFoundException('Task with id ' + id + ' not found');
        }
        return found
    }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
