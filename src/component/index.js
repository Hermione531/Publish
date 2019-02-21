import React, { Component } from 'react';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header'
import Nav from './nav/index';
import Footer from './footer';

import { Homepage_Cont, ProductCenter_Con, ProductView_Con, NewsCenter_Con, NewsView_Con, Introduction_Con} from '../container/collection';

import FeedBack from './feedback';
import Cooperation from './cooperation';


import styles from './styles';

import history from '../history';

class Test extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.location.pathname !== this.props.location.pathname) {
            windwo.scroll(0, 0);
        }
    }

    render() {
        return (
            <div className={styles['container']}>
                <Header />

                <BrowserRouter>
                    <div>
                        <Nav />
                            <Route exact path="/" component={Homepage_Cont} />
                            <Route exact path="/product-center" component={ProductCenter_Con} />
                            <Route exact path="/product-center/product/:productId" component={ProductView_Con} />
                            <Route exact path="/news-center" component={NewsCenter_Con} />
                            <Route exact path="/news-center/news/:newsId" component={NewsView_Con} />
                            <Route exact path="/cooperation" component={Cooperation} />
                            <Route exact path="/info-feedback" component={FeedBack} />
                            <Route exact path="/introduction" component={Introduction_Con} />
                    </div>
                </BrowserRouter>
                <Footer />
            </div>
            );
    }
}

export default Test;