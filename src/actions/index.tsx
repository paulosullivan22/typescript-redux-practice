import * as constants from '../constants'

export const fetchTasks = (): object => {
    return {
        type: "FETCH_TASKS",
        payload: [
            { title: "Task Uno" },
            { title: "Task Duo" }
        ]
    }
}

export const fetchFormData = (): object => {
    return {
        type: "FETCH_FORM_DATA",
        payload: {
            first_name: "Paul",
            last_name: "O'Sullivan",
            age: 27
        }
    }
}