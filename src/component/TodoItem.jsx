import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({todo}) =>  {
    const {deleteTodo} = useContext(TodoContext);

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    return (
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        }
        >
            <ListItemText primary={todo.title}/>

        </ListItem>
    );
}

export default TodoItem;