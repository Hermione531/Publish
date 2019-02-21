import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Location from '../../container/Location';
// import Location from './Location/index';
import Nav from '../nav/index';
import Homepage from '../../container/homepage';
import Product from '../../container/productCenter';

class MainBody extends Component {
    render() {
        return (
            <div>
                <Location /> 
                <Switch>                               
                    <Route exact path="/"  component={Homepage} />
                    <Route exact path="/product-center" component={Product} />
                </Switch>
            </div>
            );
    }
}

export default MainBody;