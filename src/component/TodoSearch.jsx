import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { TextField } from '@mui/material';

const TodoSearch = () => {
    const {searchTerm, updateSearchTerm} = useContext(TodoContext);

    // textにて検索の変化
    const handleChange = (e) => {
        updateSearchTerm(e.target.value);
    }

    return (
        <TextField
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export default TodoSearch;