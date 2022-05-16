import type {ListItem} from "@/models/ListItem";

export class ListTodo {
    listId: number;
    name: string;
    list: ListItem[];

    public constructor(id: number, name: string) {
        this.name = name;
        this.listId = id;
        this.list = [];
    }
}
