import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false)

    return (
        <ListItem>
            {isEditing ? (<EditTodoForm
                editTodo={editTodo}
                id={id}
                task={task}
                toggleEditForm={toggle}
            />
            ) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText
                        style={{ textDecoration: completed ? "line-through" : "none" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggle} >
                            <EditIcon></EditIcon>
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>

                    </ListItemSecondaryAction>
                </>)
            }
        </ListItem>
    );
}

export default Todo;