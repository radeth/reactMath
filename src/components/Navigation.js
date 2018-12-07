import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>Fibonacci</NavLink>
                <NavLink to='/prime-number'>PrimeNumber</NavLink>
                <NavLink to='/euclidean'>Euclidean</NavLink>
            </div>
        );

    }
}

export default Navigation