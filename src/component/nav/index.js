import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home',
        }
    }

    handleClick(tag) {
        return () => {
            this.setState({
                current: e.key,
            });
        }
    }

    render(){
        return(
            <div className={styles['nav-container']}>
            <ul className={styles['menu']}>
                <li key="home" className={styles['menu-item']}>
                    <Link to="/">首页</Link>
                </li>
                <li key="product" className={styles['menu-item']}>
                    <Link to="/product-center">产品中心</Link>
                </li>
                <li key="news" className={styles['menu-item']}>
                    <Link to="/news-center" className={styles['item']} >新闻中心</Link>
                </li>
                <li key="cooperation" className={styles['menu-item']}>
                    <Link to="/cooperation">互动合作</Link>
                </li>
                <li key="info-feedback" className={styles['menu-item']}>
                    <Link to="/info-feedback">信息反馈</Link>
                </li>
                <li key="introduction" className={styles['menu-item']}>
                    <Link to="/introduction">关于我们</Link>
                </li>
            </ul>
            </div>
            );
    }
}

export default Nav;