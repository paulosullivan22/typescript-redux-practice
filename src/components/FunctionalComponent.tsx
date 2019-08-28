import React from 'react'

interface Task {
    title: string
}

interface TaskListProps {
    tasks: Task[];
}

const tasks = [
    { title: "Task One"},
    { title: "Task Two"},
    { title: "Task Three"},
]

const App: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.map((el, i) => {
                return (
                    <p key={i}>{el.title}</p>
                )
            })}
        </div>
    )
}

export default () => <div><App tasks={tasks} /> </div>;