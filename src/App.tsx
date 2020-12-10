import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from './view/Tags';
import Money from './view/Money';
import Statistics from './view/Statistics';
import NoMatch from './view/NoMatch';
import styled from 'styled-components';
import {Tag} from './view/Tag';

const AppWrapper = styled.div`
color: #333;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>

                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact path="/tags/:id">
                        <Tag/>
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
        </AppWrapper>
    );
}

export default App;
