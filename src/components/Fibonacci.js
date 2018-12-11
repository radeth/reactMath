import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'


class Fibonacci extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fibonacciNumbers: []
        }

        this.calculate = this.calculate.bind(this);
    }
    calculate(e) {
        e.preventDefault();
        let fibonacciNumbersArray = this.numbers(this._input.value)
        console.log(fibonacciNumbersArray)
        this.setState({ fibonacciNumbers: fibonacciNumbersArray })
    }
    numbers(border) {
        let fibonacciNumbers = [1, 2];
        for (let i = 2; i <= border; i++) {
            if (i === fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]) {
                fibonacciNumbers.push(i)
            }
        }
        return fibonacciNumbers

    }
    render() {
        return (
            <Fade>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Fibonacci</h1>
                            <p>Program shows all fibonacci numbers from 0 to n</p>
                            <form onSubmit={this.calculate}>
                                <input className="form-control m-1" placeholder='n' ref={(value) => this._input = value} />
                                <button  className="btn btn-primary m-1">press</button>
                            </form>
                            <ul>
                                {this.state.fibonacciNumbers.map((val) => <Fade><li>{val}</li></Fade>)}
                            </ul>
                        </div>

                    </div>

                </div>

            </Fade>

        );

    }
}

export default Fibonacci