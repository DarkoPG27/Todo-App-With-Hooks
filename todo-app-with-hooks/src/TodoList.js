import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;