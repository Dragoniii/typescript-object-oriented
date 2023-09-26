export class Message {
    public readonly id: String;
    protected title: string;
    message: string;
    isSent: boolean;

    constructor (id: string, title: string, message: string, isSent: boolean){
        this.id = id;
        this.title = title;
        this.message = message;
        this.isSent = isSent;
    }
}

const message = new Message ('123', '123', '123', false);

message.isSent = true
//message.id = '234'
