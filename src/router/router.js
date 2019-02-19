import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import routes from './routes'

class router extends Component {
    render() {
        return (
            <Switch>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact} />
                )}
            </Switch>
        );
    }
}

export default router;