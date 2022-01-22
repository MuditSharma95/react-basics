import { DECREMENT, INCREMENT } from "./actionConstants"


export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}