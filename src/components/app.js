const css = require('./scss/app.scss');

import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
    {
        task: 'eat dinner',
        isCompleted: false
    },
    {
        task: 'make React tutorial',
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos
        }
    }

    render() {
            return (
                 <div>
                    <h1>Hello, world!Again</h1>  
                    <CreateTodo 
                        todos={this.state.todos}
                        createTask={this.createTask.bind(this)}
                    />
                    <TodosList 
                        todos={this.state.todos}
                        toogleTask={this.toogleTask.bind(this)}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                    /> 
                </div>
            );
    };

    toogleTask(task){
        const foundTask = _.find(this.state.todos, todo => todo.task === task);
        foundTask.isCompleted = !foundTask.isCompleted;
        this.setState({todos: this.state.todos});
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTask = _.find(this.state.todos, todo => todo.task === oldTask);

        foundTask.task = newTask;
        this.setState({ todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
