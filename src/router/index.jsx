import React from 'react';
import {Route, Switch, Router} from 'react-router-dom' // eslint-disable-line
import page1 from "../component/page1";
import page2 from "../component/page2";
import page3 from "../component/page3";
import Headers from "../component/common/Header";
import Footers from "../component/common/Footer";
import Home from "../component/Home";

export const RootHeader = () =>
    <Route path="*" component={Headers}/>;

export const RootFooter = () =>
    <Route path="*" component={Footers}/>;

export const RouterComponent = () =>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/page1/page2/:id" component={page1}/>
        <Route path="/page2/" component={page2}/>
        <Route path="/page3/" component={page3}/>
    </Switch>;
export default RouterComponent