import React from 'react';
import styled from 'styled-components'
import Typography from "@material-ui/core/Typography";

const CompletedTrue = styled.p`
    text-decoration: line-through;
`;

export default function Todo(props) {

    return (
        <div onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.completed === false && (
                <Typography>{props.todo.task}</Typography>
            )}
            {props.todo.completed === true && (
                <CompletedTrue>{props.todo.task}</CompletedTrue>
            )}

        </div>
    );
}