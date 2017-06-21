const css = require('./scss/app.scss');

import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import ModalDialog from './modal-dialog';

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
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Image src={require( "../images/img_logo.png")} />
                        </Col>
                        <Col xs={12} md={8}>
                            <h1>Webpack 2 and Twitter Bootstrap</h1>
                            <h2>How to configure Webpack 2 to load Twitter Bootstrap SCSS and JavaScript?</h2>
                            <ModalDialog />
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12}>
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
                        </Col>
                    </Row>
                </Grid>
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
