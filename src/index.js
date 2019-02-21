import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import history from './history';
import store from './store';

import AppRouter from './routers';
import Test from './component/index.js';
import 'antd/dist/antd.less';

// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

render(
    <Provider store={store}>
        <Test />
    </Provider>
    , document.getElementById('root')
);