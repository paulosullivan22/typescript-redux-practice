export const fetchTasks = (): object => {
    return {
        type: "FETCH_TASKS",
        payload: [
            { title: "Task Uno" },
            { title: "Task Duo" }
        ]
    }
}