import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    title: {
        textAlign: 'center',
    },
    card: {
        textAlign: 'center',
        minWidth: '150px',
    },
};

const todos = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
];

class App extends React.Component {
    // you will need a place to store your state in this component.
    constructor() {
        super();
        this.item = localStorage.getItem('todos');
        console.log(this.item);
        this.state = {
            todos: this.item ? JSON.parse(this.item) : todos,
            todo: ''
        };
    }

    handleChanges = event => this.setState({[event.target.name] : event.target.value});

    toggleTodo = id => {
        const newTodoList = () => this.state.todos.map(item => {
            if (item.id === id) {
                console.log("toggle ", item.task, " - ", item.completed);
                return {
                    ...item,
                    completed: !item.completed,
                }
            } else {
                return item;
            }
        });
        this.setState({
            todos: newTodoList()
        });
        localStorage.setItem('todos', JSON.stringify(newTodoList()));
    };

    addTodo = event => {
        event.preventDefault();
        const newTodo = {
            task: this.state.todo,
            id: Date.now(),
            completed: false,
        };
        const newTodoList = [...this.state.todos, newTodo];
        this.setState({
            todos: newTodoList
        });
        localStorage.setItem('todos', JSON.stringify(newTodoList));
    };

    clearCompleted = event => {
        event.preventDefault();
        const newTodoList = this.state.todos.filter(item => item.completed === false);
        this.setState({
            todos: newTodoList
        });
        localStorage.setItem('todos',JSON.stringify(newTodoList));
    };
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="h4" gutterBottom className={this.props.classes.title}>Welcome to your Todo App!</Typography>
                    <Card className={this.props.classes.card}>
                        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
                        <TodoForm
                            todo={this.state.todo}
                            addTodo={this.addTodo}
                            clearCompleted={this.clearCompleted}
                            handleChanges={this.handleChanges}/>
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);
