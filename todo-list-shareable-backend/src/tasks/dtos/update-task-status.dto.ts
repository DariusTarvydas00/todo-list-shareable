import {TaskStatus} from "../../core/task-status.enum";
import {IsEnum} from "class-validator";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}