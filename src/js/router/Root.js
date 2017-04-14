import React, { Component } from 'react';
import { BrowserRouter as Link, Router } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Routes from '../router/Routes';

export default class Root extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Routes />
                </div>
            </Router>
        );
    }
}