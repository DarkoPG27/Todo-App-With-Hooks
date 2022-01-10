import { ListItem, ListItemText } from "@mui/material";

function Todo({ task, completed }) {
    return (
        <ListItem>
            <ListItemText>
                {task}
            </ListItemText>
        </ListItem>
    );
}

export default Todo;