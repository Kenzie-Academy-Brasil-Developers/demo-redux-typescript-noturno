import { addCounter, subCounter } from "./actions";
import { Dispatch } from "redux";

interface State {
    counter: number
}

export const addCounterThunk = (value:number) => (dispatch:Dispatch, getState: () => State) => {
    const {counter} = getState()
    const payload = counter + value;

    dispatch(addCounter(payload))
}

export const subCounterThunk = (value:number) => (dispatch:Dispatch, getState: () => State) => {
    const {counter} = getState()
    const payload = counter - value;

    dispatch(subCounter(payload))
}