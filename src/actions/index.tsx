export const fetchTasks = (): object => {
    return {
        type: "FETCH_TASKS",
        payload: [
            { title: "Task Uno" },
            { title: "Task Duo" }
        ]
    }
}

export const fetchFormData = (name: string): object => {
    return {
        type: "FETCH_FORM_DATA",
        payload: {
            first_name: name || "Paul",
            last_name: "O'Sullivan",
            age: 27
        }
    }
}