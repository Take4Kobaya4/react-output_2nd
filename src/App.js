import React from "react";
import { TodoProvider } from "./component/TodoContext";
import { Container, Typography } from "@mui/material";
import TodoSearch from "./component/TodoSearch";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        <Typography align="center" variant="h3">
          Todoリスト
        </Typography>
        <TodoSearch/>
        <TodoAdd/>
        <TodoList/>
      </Container>
    </TodoProvider>
  );
}

export default App;
