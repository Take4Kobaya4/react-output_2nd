import React, {useState, useContext} from "react";
import { TodoContext } from "./TodoContext";
import { Button, TextField } from "@mui/material";

const TodoAdd = () => {
    const [title, setTitle] = useState('');
    const {todos} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === '') return;
        todos(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', marginTop: '20px' }}>
            <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                style={{ margin: '2%' }}
            >
                追加
            </Button>
        </form>
    );
}

export default TodoAdd;