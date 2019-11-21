import React from 'react'


const TaskList = (props) => {

const {selectedName, taskList, defaultCategory} = props

const filteredTasks = taskList.filter(task => (
    selectedName === defaultCategory || selectedName === task.category
))


const lists = filteredTasks.map((task) => (<li key={task.text}>
        <span>
        {task.category} 
            </span>
            <span>{task.text}</span>
    </li>)
)
    return (<div className="tasks">
        <h5>Tasks</h5>
<ul>{lists}</ul>
    </div>)
}




export default TaskList