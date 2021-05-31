import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Projects } from './Projects'
import { Contact } from './Contact'

const Screens = () => {
    return (
        <Router>
            <Switch>
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
export { Screens }