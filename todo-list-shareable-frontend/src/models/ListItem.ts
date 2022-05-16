export class ListItem {
    itemId: number;
    text: string;

    public constructor(id: number, text: string) {
        this.text = text;
        this.itemId = id;
    }
}
