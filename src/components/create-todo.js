import React from 'react';
import { Table } from 'react-bootstrap';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderEroor() {
        if (!this.state.error) {
            return null;
        }

        return (<div style={{color:'red'}}>{this.state.error}</div>)
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
                {this.renderEroor()}
            </form>
        );
    };

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        this.setState({error: validateInput});
        if (validateInput) {
            return;
        }

        this.props.createTask(task);
        createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        }
        else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        }
        else {
            return null;
        }
    }
}
