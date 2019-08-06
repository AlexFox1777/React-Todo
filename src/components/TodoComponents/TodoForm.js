import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import {teal} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";



const StyledTextField = withStyles(theme => ({
    root: {
        width: '90%',
        minWidth: '100px',
        margin: theme.spacing(1),
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: teal.A400,
            },
            '&:hover fieldset': {
                borderColor: teal.A700,
            },
            '&.Mui-focused fieldset': {
                borderColor: teal.A700,
            },
        },
    },

}))(TextField);

const StyledButton = withStyles(theme => ({
    root: {
        height: '55px',
        width: '90%',
        textAlign: 'center',
        minWidth: '100px',
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
}))(Button);


class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
    };

    handleAddTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                    <StyledTextField
                        variant="outlined"
                        type="text"
                        placeholder="...todo"
                        name="task"
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                    <StyledButton variant="outlined" onClick={this.handleAddTodo}>
                        <Typography>Add Todo</Typography>
                    </StyledButton>
                    <StyledButton variant="outlined" onClick={this.props.clearCompleted}>
                        <Typography>Clear Completed</Typography>
                    </StyledButton>

            </form>
        );
    }


}

export default TodoForm;