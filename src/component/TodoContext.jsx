import React, {createContext, useState} from "react";

// コンテキストの作成
export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    // todoと検索の初期値は空に設定
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Todoの追加
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
        };
        setTodos([...todos, newTodo]);
    }

    // Todoの削除
    const deleteTodo = (id) => {
        // 削除したいTodoのidが一致しない場合にtrueを返す
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // 検索条件の更新
    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    }

    // フィルタリングされたtodo
    const filteredTodo =  todos.filter((todo) => 
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <TodoContext.Provider
            value={{ todos: addTodo, deleteTodo, setSearchTerm, updateSearchTerm, filteredTodo }}>
            {children}
        </TodoContext.Provider>
    );
}