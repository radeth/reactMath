import React, { Component } from 'react';


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
        this.setState({fibonacciNumbers:fibonacciNumbersArray})
    }
    numbers(border) {
        let fibonacciNumbers = [1,2];
        for (let i=2; i <= border; i++) {
          if(i===fibonacciNumbers[fibonacciNumbers.length-1]+fibonacciNumbers[fibonacciNumbers.length-2]){
              fibonacciNumbers.push(i)
          }
        }
        return fibonacciNumbers

    }
    render() {
        return (
            <div>
                <h1>Fibonacci</h1>
                <form onSubmit={this.calculate}>
                    <input ref={(value) => this._input = value} />
                    <button>press</button>
                </form>
                <ul>
                    {this.state.fibonacciNumbers.map((val) => <li>{val}</li>)}
                </ul>
            </div>

        );

    }
}

export default Fibonacci