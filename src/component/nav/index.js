import React from 'react';
import {Menu, Icon } from 'antd';
import styles from './styles';

const SubMenu = Menu.SubMenu;
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home',
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render(){
        return(
            <div className={styles['nav-container']}>
            <Menu
                onClick={this.handleClick}
                selectedKeys={this.state.current}
                mode="horizontal"
                className={styles['menu']}
            >
                <Menu.Item key="home" className={this.state.current === "home" ? styles['menu-item-active'] : styles['menu-item']}>首页</Menu.Item>
                <Menu.Item key="product" className={this.state.current === "product" ? styles['menu-item-active'] : styles['menu-item']}>产品中心</Menu.Item>
                <Menu.Item key="news" className={this.state.current === "news" ? styles['menu-item-active'] : styles['menu-item']}>新闻中心</Menu.Item>
                <Menu.Item key="cooperation" className={this.state.current === "cooperation" ? styles['menu-item-active'] : styles['menu-item']}>互动合作</Menu.Item>
                <Menu.Item key="info" className={this.state.current === "info" ? styles['menu-item-active'] : styles['menu-item']}>信息反馈</Menu.Item>
                <Menu.Item key="aboutUs" className={this.state.current === "aboutUs" ? styles['menu-item-active'] : styles['menu-item']}>关于我们</Menu.Item>
            </Menu>
            </div>
            );
    }
}

export default Nav;