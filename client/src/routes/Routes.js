import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound'
const Routes = () => {
    return (
        <section className='container'>
            
            <Switch>
                
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact} />
                <Route exact path ='/portfolio' component={Portfolio} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
