import React from 'react';
import {BrowserRouter as Link, Route, Switch, Redirect, NavLink} from 'react-router-dom';

import Layout from '../containers/MainLayout';
import qrGetStarted from '../sections/qr-get-started';
import qrConnect from '../sections/qr-connect';
import qrStatus from '../sections/qr-status';
import cardGetStarted from '../sections/cards-get-started';
import cardConnect from '../sections/cards-connect';
import cardCancel from '../sections/cards-cancel';
import cardStatus from '../sections/cards-status';
import notFound from '../sections/not-found';

const routes = () => {
    return (
        <Route className="root__inner" render={()=>(
            <Layout>
                <Switch>
                    <Redirect exact path="/" to="/payments/pay24/qr-get-started" />
                    <Redirect exact path="/payments" to="/payments/pay24/qr-get-started" />
                    <Redirect exact path="/payments/pay24" to="/payments/pay24/qr-get-started" />
                    <Route path="/payments/pay24/qr-get-started" component={qrGetStarted} />
                    <Route path="/payments/pay24/qr-status" component={qrStatus} />
                    <Route path="/payments/pay24/qr-connect" component={qrConnect} />

                    <Redirect exact path="/payments/cards" to="/payments/cards/cards-get-started" />
                    <Route path="/payments/cards/cards-get-started" component={cardGetStarted} />
                    <Route path="/payments/cards/cards-connect" component={cardConnect} />
                    <Route path="/payments/cards/cards-cancel" component={cardCancel} />
                    <Route path="/payments/cards/cards-status" component={cardStatus} />

                    <Route component={notFound}/>
                </Switch>
            </Layout>
            )}>
        </Route>
    );
};

export default routes;