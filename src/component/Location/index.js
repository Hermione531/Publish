import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LOC_TREE from '../../unit/locationTree';
import styles from './styles';

const Location = ({ pathname }) => {

    function renderLocHtml(tree, path, isFirst) {
        for (let m in tree) {
            let { name, regex, isLink, children } = tree[m];
            let matchRst = path.match(regex);
            if (matchRst) {
                locHtml.push(isLink ?
                    <span key={name} className={styles['curLoc-item']}>
                    {isFirst ? '' : '>'}
                        <Link to={matchRst[0]}>{name}</Link>
                    </span> :
                    <span key={name} className={styles['curLoc-item']}>
                    {isFirst ? '' : '>'}
                    {name}
                    </span>
                );
                if (children) {
                    renderLocHtml(children, path);
                }
                break;
            }
        }
    }


    let locHtml = [];
    renderLocHtml(LOC_TREE, pathname, true);
    locHtml = pathname == '/' ? [] : [<span key='curLoc' className={styles['curLoc-item']}>当前位置：</span>, ...locHtml];

    return (
        <div className={styles['curLoc']}>
        {locHtml}
        </div>
    );

}


export default Location;