import React, { Component } from 'react';

import Location from '../Location';
import styles from './styles';

class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products } = this.props;
        let pathname = this.props.location.pathname;
        let productId = pathname.split("/").pop();

        let name, introduction, image;
        products.forEach(item => {
            if (item.id === productId) {
                name = item.name;
                introduction = item.introduction;
                image = item.image;
            }
        });
        return (
            <div className={styles['product-container']}>
                <Location pathname={this.props.location.pathname}/>
                <div className={styles['product-info']}>

                        <p className={styles['title']}>{name}</p>
                        <p className={styles['content']}>{introduction}</p>
                    </div>
                    <div className={styles['product-img']} >
                        <img src={image} />
                    </div>
            
            </div>
            );
    }
}

export default View;