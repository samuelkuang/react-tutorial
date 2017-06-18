import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        console.log(props);

        return _.map(this.props.todos, (todo, index) => {return (<TodosListItem key={index} {...todo} {...props} />)});
    }

    render() {
        console.log(this.props.todos);

        return (
            <Table striped bordered condensed hover>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </Table>            
        );
    };
}
