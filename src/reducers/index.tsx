import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import formDataReducer from './formDataReducer'

export default combineReducers({
    tasks: taskReducer,
    formData: formDataReducer
})