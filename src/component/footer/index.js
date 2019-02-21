import React, { Component } from 'react';

import styles from './styles';

class Footer extends Component {
    render() {
        return (
            <div className={styles['footer-container']}>
                <p>这里填个单位</p>
                <p>电话：027-88988868  邮箱：hh@edu.cn</p>
                <p>地址：查令十字街84号</p>
                <p>Copyright2002-2019 All right reserved</p>
            </div>
            );
    }
}

export default Footer;