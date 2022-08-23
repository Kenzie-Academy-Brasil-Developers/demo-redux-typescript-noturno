import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

interface ActionReturn{
    type:string;
    payload:number;
}

export const addCounter = (payload:number) => ({type:ADD_COUNTER, payload} as ActionReturn);
export const subCounter = (payload:number) => ({type:SUB_COUNTER, payload} as ActionReturn);
