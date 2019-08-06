import React from 'react';
import styled from 'styled-components'

const CompletedTrue = styled.p`
    text-decoration: line-through;
`;

export default function Todo(props) {

    return (
        <div onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.completed === false && (
                <p>{props.todo.task}</p>
            )}
            {props.todo.completed === true && (
                <CompletedTrue>{props.todo.task}</CompletedTrue>
            )}

        </div>
    );
}