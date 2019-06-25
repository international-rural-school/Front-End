import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectLinks from './ProjectLinks';
import IssueHub from './projects/issue/IssueHub';
import AdminVisits from './projects/AdminVisits';
import Payment from './projects/Payment'
import IssueDetail from './projects/issue/IssueDetail'
import IssueAdd from './projects/issue/IssueAdd';

export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row">
                    <div className="col s3">
                        <ProjectLinks />
                    </div>
                    <div className="col s9">
                        <Switch>
                            <Route path='/dashboard/issue_hub' component={IssueHub} />
                            <Route path='/dashboard/issue_add' component={IssueAdd} />
                            <Route path='/dashboard/issues/:id' component={IssueDetail} />
                            <Route path='/dashboard/issues_add' component={IssueAdd} />
                            <Route path='/dashboard/admin_visits' component={AdminVisits} />
                            <Route path='/dashboard/payment' component={Payment} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
