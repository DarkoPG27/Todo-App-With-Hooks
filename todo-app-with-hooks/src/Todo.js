import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ task, completed }) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText
                style={{ textDecoration: completed ? "line-through" : "none" }}
            >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <EditIcon></EditIcon>
                </IconButton>
                <IconButton aria-label="Delete">
                    <DeleteIcon></DeleteIcon>
                </IconButton>

            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;