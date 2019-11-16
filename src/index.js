import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import './assets/sass/grid.scss'

import Home from './paginas/Home/Home';
import Servicos from './paginas/Servicos/Servicos';
import Contato from './paginas/Contato/Contato';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="wrapper">
        <Router>
            <div className="container">
                <Route exact path={`${process.env.PUBLIC_URL}/`}  component={ Home } />
                <Route exact path={`${process.env.PUBLIC_URL}/servicos`} component={ Servicos } />
                <Route exact path={`${process.env.PUBLIC_URL}/contato`} component={ Contato } />
            </div>
        </Router>
    </div> , document.getElementById('root'));

serviceWorker.unregister();
