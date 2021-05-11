import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdGpsNotFixed, MdGpsFixed } from 'react-icons/md';

type TodoItemBlockProps = {
    done: boolean;
    pinned: boolean;
}

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
    color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props: TodoItemBlockProps) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Pinned = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #ced4da;
    font-size: 24px;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props: TodoItemBlockProps) =>
     props.pinned &&
     css`
        color : #38d9a9;
     `
    }
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props: TodoItemBlockProps) =>
    props.done &&
    css`
        text-decoration-line: line-through;
    `}
`;

type TodoItemProps = {
    key: number;
    id: number;
    text: string;
    done: boolean;
    pinned: boolean;
    removeTodo: (id: number) => void;
    doneTodo: (id: number) => void;
    pinnedTodo: (id: number) => void;
}

function TodoItem( props: TodoItemProps) {
    return (
        <TodoItemBlock>
            <CheckCircle done={props.done} pinned={props.pinned} onClick={() => props.doneTodo(props.id)}>
                {props.done && <MdDone />}
            </CheckCircle>
            <Pinned done={props.done} pinned={props.pinned} onClick={() => props.pinnedTodo(props.id)}>
                {props.pinned ? <MdGpsFixed /> : <MdGpsNotFixed /> }
            </Pinned>
            <Text done={props.done} pinned={props.pinned}>{props.text}</Text>
            <Remove onClick={() => props.removeTodo(props.id)}><MdDelete /></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;