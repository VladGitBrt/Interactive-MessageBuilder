import { createAction, props } from "@ngrx/store";


export namespace MessageActions {
    export const showMessages = createAction("SHOW_MESSAGE");
    export const moveMessage = createAction("MOVE_MESSAGE",props<{x:number,y:number,id:string}>());
    export const setTargetMessage = createAction("SET_TARGET", props<{id:string}>())
    export const moveRandomize = createAction("MOVE_RANDOMIZE",props<{x:number,y:number,id:string}>());
    export const deleteMessage = createAction("DELETE_MESSAGE", props<{id: string}>());
    export const deleteRandomizer = createAction("DELETE_RANDOMIZER", props<{id: string}>());
    export const addMessage = createAction("ADD_MESSAGE");
    export const addRandomize = createAction("ADD_RANDOMIZE");
    export const elementLayerUp = createAction('LAYER_UP', props<{id: string}>())
    export const setStartMessage = createAction('SET_START_MESSAGE', props<{id: string}>())
    export const addText = createAction("ADD_TEXT", props<{text: string,id: string}>())
}
