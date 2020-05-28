import {
   CALCULATE_BMI
} from '../Actions/ActionType'

const initialData = {
    status: "",
    calculatedValue: 0,
    message: ""
}


const reducer = (state=initialData, action) => {
    switch(action.type){
        case CALCULATE_BMI: {
            // Compute bmi value
            console.log(JSON.stringify(state))
            return {
                ...state,
            }
        }
        default: return state
    }
}

export default reducer