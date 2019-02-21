import React, { Component } from 'react';

import Location from '../Location';
import styles from './styles';

class Introduction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['introduction-container']}>
                <Location pathname={this.props.location.pathname}/>
                
            </div>
            );
    }
}

export default Introduction;