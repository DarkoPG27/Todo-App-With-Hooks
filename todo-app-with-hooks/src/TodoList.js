import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ListItem>
                            <ListItemText>
                                {todo.task}
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;