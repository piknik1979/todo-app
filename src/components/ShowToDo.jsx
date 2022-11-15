import ToDoList from "./ToDoList"

const ShowToDo = (props) => {
    return <ul>
        { props.name.map((todo) => {
             return <li key={todo}>
             <input type="checkbox" id="scales" name="scales"></input> 
             {todo}
             <button>delete</button>
        </li>
        })}
    </ul>

}


export default ShowToDo