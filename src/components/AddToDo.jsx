import {useState} from 'react';

const AddToDo = (props) => {
    const { setToDos } = props;
    const [toDo, setToDo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDos((currToDos) => {
            const newTodo = toDo;
            const newTodos = [...currToDos, newTodo];
            return newTodos; 
        })
  setToDo('');
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="add-name">Add task: </label>
        <input type="text"
        id="add-name"
        onChange={(event) => {
        setToDo(event.target.value);
        }} 
        value={toDo}
        />
              <button>AddToDo</button>
    </form>
}

export default AddToDo