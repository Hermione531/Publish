import React, { Component } from 'react';

import Item from '../public/Item';
import Location from '../Location';
import styles from './styles';

class ProductCenter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products } = this.props;
        let productContainer = null;
        if(products.length) {
            productContainer = products.map((file, index) => 
                <Item key={`p_${index}`} file={file} />);
        }
        return (
            <div className={styles['product-container']}>
                <Location pathname={this.props.location.pathname}/>
                <div className={styles['product']}>
                    {productContainer}
                </div>
            </div>
            );
    }
}

export default ProductCenter;