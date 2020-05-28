import {
    GENDER_TYPE,
    UPDATE_HEIGHT,
    INCREMENT_WEIGHT,
    DECREMENT_WEIGHT,
    INCREMENT_AGE,
    DECREMENT_AGE
} from './ActionType'

export const updateGender = (value) => {
    return {
        type: GENDER_TYPE,
        payload: value
    }
}

export const updateHeight = (value) => {
    return {
        type: UPDATE_HEIGHT,
        payload: value
    }
}

export const incrementWeight = () => {
    return {
        type: INCREMENT_WEIGHT,
    }
}

export const decrementWeight = () => {
    return {
        type: DECREMENT_WEIGHT,
    }
}

export const incrementAge = () => {
    return {
        type: INCREMENT_AGE,
    }
}

export const decrementAge = () => {
    return {
        type: DECREMENT_AGE,
    }
}