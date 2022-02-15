import { DECREMENT_REQUEST, INCREMENT_REQUEST } from "./actionConstants"


export const incrementCounter = () => {
    return {
        type: INCREMENT_REQUEST
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_REQUEST
    }
}