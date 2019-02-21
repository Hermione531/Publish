import React, { Component } from 'react';

import Location from '../Location';
import styles from './styles';

class Cooperation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['cooperation-container']}>
                <Location pathname={this.props.location.pathname}/>
                
            </div>
            );
    }
}

export default Cooperation;