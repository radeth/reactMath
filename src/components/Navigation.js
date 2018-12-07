import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink activeClassName="active" to='/' exact>Fibonacci</NavLink>
                <NavLink activeClassName="active" to='/prime-number' exact>PrimeNumber</NavLink>
                <NavLink activeClassName="active" to='/euclidean' exact>Euclidean</NavLink>
            </div>
        );

    }
}

export default Navigation