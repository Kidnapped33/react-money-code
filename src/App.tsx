import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Tags from './view/Tags';
import Money from './view/Money';
import Statistics from './view/Statistics';
import NoMatch from './view/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
