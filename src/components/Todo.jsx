
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        console.log("delete",id);
        dispatch(deleteTodo(id));


    }

    return(
    <>
   
    <AddForm />
    <h2>Todo List App </h2>
    <br />
    <ul>
        {
            todos && todos.map((todo) => (
                <li key={todo.id}>{todo.task}
                <button onClick={() => deleteHandler(todo.id)} >Delete</button>
                </li>
            ))
        }
    </ul>
    </>

    );
}