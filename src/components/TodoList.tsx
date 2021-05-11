import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoCreate from './TodoCreate';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

type TodoListProps = {

};

type Item = {
    id: number;
    text: string;
    done: boolean;
    pinned: boolean;
    removeTodo: (id: number) => void;
    doneTodo: (id: number) => void;
    pinnedTodo: (id: number) => void;
}

function TodoList(props: TodoListProps) {
    
    const [todos, setTodos] = useState<Item[]>([]);

    const createTodo = (newText: string) => {
        if (!todos) return;

        const todo: Item = {
            id: todos.length, text: newText, done: false, pinned: false, 
            removeTodo: removeTodo, doneTodo: doneTodo, pinnedTodo: pinnedTodo,
        };

        setTodos([todo, ...todos]);
    }

    const removeTodo = (id: number) => {
        if (!todos) return;

        setTodos(todos.filter(todo => todo.id !== id));
    }

    const doneTodo = (id: number) => {
        if (!todos) return;

        setTodos(todos.map(todo => ({
            ...todo,
            done: (todo.id === id)? !todo.done : todo.done,
        })));
    }

    const pinnedTodo = (id: number) => {
        if (!todos) return;

        setTodos(todos.map(todo => ({
            ...todo,
            pinned: (todo.id === id)? !todo.pinned : todo.pinned,
        })));
    }
    
    return (
        <TodoListBlock>
            <TodoCreate createTodo={createTodo}/>
            {todos.map(todo => (
                todo.pinned &&
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    pinned={todo.pinned}
                    removeTodo={removeTodo}
                    doneTodo={doneTodo}
                    pinnedTodo={pinnedTodo}
                />
            ))}
            {todos.map(todo => (
                !todo.pinned &&
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    pinned={todo.pinned}
                    removeTodo={removeTodo}
                    doneTodo={doneTodo}
                    pinnedTodo={pinnedTodo}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;