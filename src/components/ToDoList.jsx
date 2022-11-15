import { useState } from 'react'
import ShowToDo from "./ShowToDo"
import AddToDo from "./AddToDo"


const ToDoList = () => {
    const [toDos, setToDos] = useState(
       [ 'task 1',
        'task 2',
        'task 3',]
    )

    return <div className='to-do-list'>
        <h2>ToDoList is here</h2>
        <AddToDo setToDos={ setToDos }/>
        <ShowToDo name={ toDos } />
    </div>

}

export default ToDoList