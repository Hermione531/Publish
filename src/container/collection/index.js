import React from 'react';
import { connect } from 'react-redux';

import Homepage from '../../component/homepage/index';

import ProductCenter from '../../component/productCenter/index';
import ProductView from '../../component/productCenter/View';

import NewsCenter from '../../component/news/index';
import NewsView from '../../component/news/View';

import Introduction from '../../component/introduction';

const mapStateToProps = state => {
    return state.get("basicInfo");
}

export const Homepage_Cont = connect(mapStateToProps)(Homepage);

export const ProductCenter_Con = connect(mapStateToProps)(ProductCenter);
export const ProductView_Con = connect(mapStateToProps)(ProductView);

export const NewsCenter_Con = connect(mapStateToProps)(NewsCenter);
export const NewsView_Con = connect(mapStateToProps)(NewsView);

export const Introduction_Con = connect(mapStateToProps)(Introduction);