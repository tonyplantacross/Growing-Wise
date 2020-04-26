import React, { Component } from 'react';
import logo from '../../static/img/logo.png';

export default class Banner extends Component {
    render() {
        return (
            <div class="container">
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}
