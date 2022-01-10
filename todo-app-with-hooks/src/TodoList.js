import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList({ todos, removeTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;