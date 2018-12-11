import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class PrimeNumbers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            primeNumbers: []

        };
        this.calculate = this.calculate.bind(this);
    }

    calculate(e) {
        e.preventDefault();
        let primeNumbersArray = this.numbers(this._input.value)
        this.setState({
            primeNumbers: primeNumbersArray
        })
    }
    numbers(border) {
        let primeNumbers = [];
        for (let i = 1; i <= border; i++) {
            let dividers = 0;
            for (let k = 1; k <= i; k++) {
                if (i % k === 0) {
                    dividers++
                }
            }
            if (dividers === 2) {
                primeNumbers.push(i)
            }
        }
        return primeNumbers
    }

    render() {
        return (

            <Fade>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>PrimeNumbers</h1>
                            <p>Progrma shows all prime numbers from 0 to n</p>
                            <form onSubmit={this.calculate}>
                                <input className="form-control" m-1 ref={(value) => this._input = value} />
                                <button  className="btn btn-primary m-1">press</button>
                            </form>
                            <ul>
                                {this.state.primeNumbers.map((val) => <Fade><li>{val}</li></Fade>)}
                            </ul>
                        </div>

                    </div>

                </div>



            </Fade>

        );

    }
}

export default PrimeNumbers