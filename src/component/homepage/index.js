import React from 'react';
import { Carousel } from 'antd';

import Item from '../public/Item';
import styles from './styles';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        };
    }

    showMore() {

    }

    render() {
        const { images, products } = this.props;
        let ListContainer = null;

         if(products.length) {
            products.length < 6 ? (ListContainer = products.map((file, index) => <Item key={`f_${index}`} file={file} />)) : (ListContainer = products.slice(0, 6).map((file, index) => <Item key={`f_${index}`} file={file} />));

            
        } 

        return (
            <div className={styles['homepage-container']}>
                <div  className={styles["banner-project-elem"]}>
                    <Carousel autoplay autoplaySpeed={2000}>
                    {images.map((img, idx) => (
                        <div className={styles["banner-bg"]}  key={`img_${idx}`}>
                            <div><img src={img} /></div>
                        </div>
                    ))}
                </Carousel>
                </div>
                <div className={styles['content-container']}>
                    <div className={styles['content-title']}>
                    内容提示
                    <span onClick={this.showMore}>更多 >></span>
                    </div>
                    <div className={styles['list']}>
                        {ListContainer}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;