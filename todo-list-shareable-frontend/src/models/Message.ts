export class Message {
    messageId: number;
    messageText: string;

    public constructor(id: number, text: string) {
        this.messageId = id;
        this.messageText = text;
    }
}
