import React from 'react';

import styles from './styles.scss';

class Header extends React.Component {
    render() {
        return(
            <div className={styles['header-container']}>
                <div className={styles['header-logo']}>
                    img logo
                </div>
                <div className={styles['header-operate']}>
                    <span>
                        <span className={styles['login']}>登陆</span> | <span className={styles['register']}>注册</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;