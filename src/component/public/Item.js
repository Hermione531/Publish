import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, introduction, image } = this.props.file;
        return (
            <div className={styles['item-container']}>
                <Link to={`/product-center/product/${id}`}>
                    <div 
                        className={styles['item-image']}
                        style={{backgroundImage: `url(${image})`}}
                        >

                    </div>
                    <div className={styles['item-content']}>
                        <p className={styles['name']}>{name}</p>
                        <p className={styles['introduction']}>{introduction}</p>
                    </div>
                </Link>
            </div>
            );
    }
}

export default Item;