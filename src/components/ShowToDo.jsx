import ToDoList from "./ToDoList"
import { useState } from "react"
const ShowToDo = () => {
    /* console.log(toDo[1]) */
    console.log(ToDoList)
    return <ul>
        <li>
            <input type="checkbox" id="scales" name="scales"></input>
            <label for="scales">ToDo is here</label>
            <button>delete</button>
        </li>
        <li>Task 1</li>
        <li>----</li>
        <li>----</li>
    </ul>

}


export default ShowToDo