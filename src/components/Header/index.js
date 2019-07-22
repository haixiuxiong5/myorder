/*
 * @Author: haixiuxiong5
 * @Date: 2019-07-22 10:53:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-07-22 15:29:07
 */

import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className="header">
                我的订单
            </header>
        );
    }
}
 
export default Header;