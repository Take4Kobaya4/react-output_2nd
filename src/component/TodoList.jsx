import React, {useContext} from "react";
import { TodoContext } from "./TodoContext";
import {List} from "@mui/material";
import TodoItem from "./TodoItem";
const TodoList = () => {
    const {filteredTodo} = useContext(TodoContext);

    return (
        <List>
            {filteredTodo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
    );
}

export default TodoList;