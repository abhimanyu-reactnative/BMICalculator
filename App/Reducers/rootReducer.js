import { combineReducers } from 'redux'
import BMIReducer from './BMIReducer'

const rootReducer = combineReducers({
    calculatorData: BMIReducer
})

export default rootReducer