import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../biliingCycle/billingCycle'

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard2} />
            <Route path='/billingCycles' component={BillingCycle}/>
            <Redirect from='*' to='/'/>
        </Router>
    )

}

