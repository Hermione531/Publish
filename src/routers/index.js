import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Test from '../component/index.js';

// export default function(props) {
//     return(
//         <ConnectedRouter history={props.history}>
//             <Route path="/" component={Test} />
//         </ConnectedRouter>
//     );
// };

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
         return (
            <ConnectedRouter history={this.props.history}>
                <Route path="/" component={Test} />
            </ConnectedRouter>
        )
    }
}

export default AppRouter;