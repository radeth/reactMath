import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Euclidean extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NWD: ''

        }

        this.calculate = this.calculate.bind(this)
    }

    calculate(e) {
        e.preventDefault();
        let a = parseInt(this._inputOne.value)
        let b = parseInt(this._inputTwo.value)
        let nwdNumber = this.number(a, b)
        console.log(nwdNumber)
        this.setState({
            NWD: nwdNumber
        })
    }
    number(a, b) {
        while (a !== b) {
            if (a > b) {
                a = a - b
                console.log(a)
            }
            else {
                b = b - a
                console.log(b)

            }

        }
        return a
    }
    render() {
        return (
            <Fade>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Euclidean</h1>
                            <p>Program shows greatest common divisor of two numbers</p>
                            <form onSubmit={this.calculate}>
                                <input className="form-control m-1" placeholder="Number One" ref={(val) => this._inputOne = val} />
                                <input className="form-control m-1" placeholder="Number Two" ref={(val) => this._inputTwo = val} />
                                <button className="btn btn-primary m-1">press</button>
                            </form>
                            <Fade> 
                                {this.state.NWD}
                            </Fade>
                        </div>

                    </div>

                </div>

            </Fade>
        );

    }
}
export default Euclidean