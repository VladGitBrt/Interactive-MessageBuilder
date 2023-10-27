export interface IMessage{
    id: string;
    text: string[];
    isStartMessage: boolean;
    xPos: number;
    yPos: number;
    layer: number;
}

export interface IMessageStore{
    messageList: IMessage[];
    targetMessage: IMessage;
    randomizeList: IRandomize[];
}

export interface IRandomize{
    id: string;
    AElement: string;
    BElement: string;
    xPos: number;
    yPos: number;
    layer: number;
}