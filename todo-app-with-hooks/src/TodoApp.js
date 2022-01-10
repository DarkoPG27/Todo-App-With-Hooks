import { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {

    const initialTodos = [
        { id: 1, task: "Wash Car", completed: false },
        { id: 2, task: "Walking dog", completed: false }
    ];

    const [todos, setTodos] = useState(initialTodos)

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }} >
                <Toolbar>
                    <Typography color="inherit" >TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm />
            <TodoList todos={todos} />
        </Paper >
    );
}

export default TodoApp;