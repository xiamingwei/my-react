import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './router';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Root = () => {
    return (
        <Router>
            <Route path={'/'} component={BasicRoute}></Route>
        </Router>
    )

}

ReactDOM.render(<Root />, document.getElementById('root'));
