import {TaskStatus} from "../../core/task.model";
import {IsEnum} from "class-validator";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}