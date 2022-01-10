import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";

function TodoApp() {
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

            </AppBar>
        </Paper >
    );
}

export default TodoApp;