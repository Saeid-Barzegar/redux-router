import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import routes from './routes'

class router extends Component {
    render() {
        return (
            <Switch>
                {routes.map((route, index) =>
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                )}
            </Switch>
        );
    }
}

export default router;