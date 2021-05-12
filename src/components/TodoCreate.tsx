import React, { useState } from 'react';
import styled from 'styled-components';

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

type TodoCreateProps = {
    createTodo: (newText: string) => void;
};

function TodoCreate(props : TodoCreateProps): JSX.Element {
    const [inputs, setInputs] = useState<string>('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.createTodo(inputs);
        setInputs('');
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputs(value);
    };

    return (
        <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
                <Input placeholder="Enter Task" onChange={onChange}/>
                <button>Enter</button>
            </InsertForm>
        </InsertFormPositioner>
    );
}

export default TodoCreate;