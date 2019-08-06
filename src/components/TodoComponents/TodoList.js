// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    list: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        textAlign: 'center',
        minWidth: '150px',
        width: '100%',
    }
}));
export default function TodoList(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.list}>
            {props.todos.map(item => (
                <Todo key={item.id} todo={item} toggleTodo={props.toggleTodo}/>
            ))}
        </Paper>
    );
}
