import {
    GENDER_TYPE,
    UPDATE_HEIGHT,
    INCREMENT_WEIGHT,
    DECREMENT_WEIGHT,
    INCREMENT_AGE,
    DECREMENT_AGE
} from '../Actions/ActionType'

const initialData = {
    gender: "male",
    height: 120,
    weight: 70,
    age: 25
}


const reducer = (state=initialData, action) => {
    console.log(action.type)
    switch(action.type){
        case GENDER_TYPE: {
            return {
                ...state,
                gender: action.payload
            }
        }
        case UPDATE_HEIGHT: {
            return {
                ...state,
                height: action.payload,
            }
        }
        case INCREMENT_WEIGHT: {
            return {
                ...state,
                weight: weight + 1
            }
        }
        case DECREMENT_WEIGHT: {
            return {
                ...state,
                weight: weight - 1
            }
        }
        case INCREMENT_AGE: {
            return {
                ...state,
                age: age + 1
            }
        }
        case DECREMENT_AGE: {
            return {
                ...state,
                age: age - 1
            }
        }
        default: return state

    }
}

export default reducer