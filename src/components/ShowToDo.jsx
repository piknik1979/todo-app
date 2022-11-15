const ShowToDo = (props) => {

    const setToDos = props.setToDos


    const handleDelete = (event) => {

        const taskToDelete = event.target.value
        setToDos((currTodos) => {
            const updatedList = []
            currTodos.forEach(task => {
                if (task !== taskToDelete) {
                    updatedList.push(task)
                }
            });
            return updatedList

        })
    }
    return <ul>
        { props.name.map((todo) => {
             return <li key={todo}>
                       <input type="checkbox" id="scales" name="scales"></input> 
            <label for="scales">{todo}</label> 

            <button onClick={handleDelete} value={todo} >delete</button> 
        </li>
        })}
         <p>Total tasks: {props.name.length}</p>
    </ul>

}


export default ShowToDo