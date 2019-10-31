import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import Home from './paginas/Home/Home';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="wrapper">
        <Router>
            <div className="container">
                <Route exact path="/" component={ Home } />
            </div>
        </Router>
    </div> , document.getElementById('root'));

serviceWorker.unregister();
