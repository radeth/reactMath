import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

class Navigation extends Component {
    render() {
        return (
            <Fade>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Fibonacci</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/prime-numbers' exact>PrimeNumbers</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/euclidean' exact>Euclidean</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </Fade>

        );

    }
}

export default Navigation