import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';

const Routes = () => {
    return (
        <section>
            
            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>
        </section>
    )
}

export default Routes
