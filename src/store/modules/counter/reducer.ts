import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

interface Action{
    type:string;
    payload:number;
}

const counterReducer = (state : number = 0, action:Action) => {
    switch(action.type){
        case ADD_COUNTER:
            return action.payload;
            
        case SUB_COUNTER:
            return action.payload;

        default:
            return state
    }
}

export default counterReducer