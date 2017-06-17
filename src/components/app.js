const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default class App extends React.Component {
    render() {
            return (
                 <div>
                    <h1>Hello, world!Again</h1>  
                    <Button bsStyle="success" bsSize="large">
                        Something 
                    </Button>  
                </div>
            );
    };
}
