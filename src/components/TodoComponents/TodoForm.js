import React from 'react';



class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }
    handleChanges = event => {
      this.setState({
          [event.target.name] : event.target.value
      })
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.props.addTodo(this.state.task);
    };
    handleAddTodo = event =>{
        event.preventDefault();
        this.props.addTodo(this.state.task);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="...todo"
                    name="task"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    }


}
export default TodoForm;