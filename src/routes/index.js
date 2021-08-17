import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StoreProvider } from '../store';
import AppProvider from '../layouts/App';

import routePath from '../constants/path';
import HomePage from '../layouts/Home';

const Routes = () => {
    return (
        <StoreProvider>
            <Router>
                <AppProvider>
                    <Switch>
                        <Route
                            exact
                            path={routePath.home}
                            component={HomePage}
                        />
                    </Switch>
                </AppProvider>
            </Router>
        </StoreProvider>
    );
};

export default Routes;
