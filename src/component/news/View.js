import React, { Component } from 'react';

import Location from '../Location';
import styles from './styles';

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: {},
        }
    }

    componentWillReceiveProps(newProps) {
        if( newProps.match.url !== this.props.match.url) {

            //此处应为获取后台信息，修改为截取所需信息
            (async() => {
                try {

                } catch(e) {
                    console.log(e);
                }
            })();
        }
    }

    render() {
        const { news } = this.props;
        let pathname = this.props.location.pathname;
        let newsId = pathname.split('/').pop();
        let title, content, created;
        news.forEach(item => {
            if (item.id === newsId) {
                title = item.title;
                content = item.content;
                created = item.created;
            }
        });
        return (
            <div className={styles['news-container']}>
                <Location pathname={this.props.location.pathname}/>
                <div className={styles['news-title']}>
                {title}
                </div>
                <div className={styles['content']}>
                {content}
                </div>
            </div>
            );
    }
}

export default View;