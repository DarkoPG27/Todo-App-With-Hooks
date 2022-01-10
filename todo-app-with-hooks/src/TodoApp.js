import { useState } from "react";
import TodoList from "./TodoList";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";

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
            <TodoList todos={todos}>

            </TodoList>
        </Paper >
    );
}

export default TodoApp;