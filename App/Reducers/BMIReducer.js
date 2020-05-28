import {
    GENDER_TYPE,
    UPDATE_HEIGHT,
    INCREMENT_WEIGHT,
    DECREMENT_WEIGHT,
    INCREMENT_AGE,
    DECREMENT_AGE,
    CALCULATE_BMI
} from '../Actions/ActionType'

const initialData = {
    gender: "Male",
    height: 120,
    weight: 70,
    age: 25,
    status: "",
    calculatedValue: 0,
    message: ""
}


const reducer = (state = initialData, action) => {
    console.log(action.type)
    switch (action.type) {
        case GENDER_TYPE: {
            return {
                ...state,
                gender: action.payload
            }
        }
        case UPDATE_HEIGHT: {
            return {
                ...state,
                height: Math.round(action.payload),
            }
        }
        case INCREMENT_WEIGHT: {
            return {
                ...state,
                weight: state.weight + 1
            }
        }
        case DECREMENT_WEIGHT: {
            return {
                ...state,
                weight: state.weight - 1
            }
        }
        case INCREMENT_AGE: {
            return {
                ...state,
                age: state.age + 1
            }
        }
        case DECREMENT_AGE: {
            return {
                ...state,
                age: state.age - 1
            }
        }
        case CALCULATE_BMI: {
            // Compute bmi value
            let message = ""
            let status = ""
            console.log(JSON.stringify(state))
            let imc = (state.weight) / ((state.height*state.height)/10000 );

            if (imc < 18.5) {
                status = "UNDERWEIGHT";
                message = "You are underweight, try eating more";
            } else if (imc > 18.5 && imc < 25) {
                status = "NORMAL";
                message = "You have a normal body weight. Good job!";
            } else if (imc >= 25 && imc < 30) {
                status = "OVERWEIGHT";
                message  = "You are overweight, try to exercise more";
            } else {
                status = "OBESE";
                message = "You are obese";
            }
            return {
                ...state,
                status: status,
                message: message,
                calculatedValue: imc
            }
    }
        default: return state

    }
}

export default reducer