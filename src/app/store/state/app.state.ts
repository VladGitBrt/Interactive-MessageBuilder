import { IMessage, IMessageStore } from "src/app/model/app.model";
import { generateGuid } from "src/app/helpers/guid";

export const initialState: IMessageStore = {
    messageList: [
        {
            id: generateGuid(),
            text: [''],
            isStartMessage: false,
            xPos: 10050,
            yPos: 9600,
            layer: 0
        },
    ],
    randomizeList: [
       
    ],
    targetMessage: {
        id: "",
        text: [],
        isStartMessage: false,
        xPos: 0,
        yPos: 0,
        layer: 0
    }  
} 