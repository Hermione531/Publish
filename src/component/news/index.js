import React, { Component } from 'react';
import { Pagination, Icon } from 'antd';
import { Link } from 'react-router-dom';

import Location from '../Location';
import styles from './styles';

const PAGE_SIZE = 15;

class NewsCenter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(pageNumber) {
        this.setState({
            page: pageNumber
        });
        console.log('此功能待完善，谢谢使用！');
    }

    render() {
        const { news } = this.props;
        const { page } = this.state;
        let size = news.length / PAGE_SIZE + 1;
        let NewsContainer = null;
        if(news.length){
                let idx = (page - 1) * PAGE_SIZE;
                NewsContainer = news.slice(idx, idx + PAGE_SIZE).map((item, index) => {
                return (
                    <li key={`news_${index}`} className={styles['news-item']}>
                        <Icon type="file-text"/>
                        <Link to={`/news-center/news/${item.id}`}>{item.title}
                        <span>{item.created}</span>
                        </Link>
                    </li>
                    );
            });
        } else {

        }
        
        return(
            <div className={styles['news-container']}>
                <Location pathname={this.props.location.pathname}/>
                <div className={styles['news']}>
                    {NewsContainer}
                </div>
                {news.length && 
                    <Pagination 
                        className={styles['pagination']}
                        showQuickJumper 
                        defaultCurrent={1} 
                        total={news.length} 
                        onChange={this.onChange}
                    />}
            </div>
            );
    }
}

export default NewsCenter;