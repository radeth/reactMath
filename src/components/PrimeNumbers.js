import React, { Component } from 'react';


class PrimeNumbers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            primeNumbers:[]

        };
        this.calculate = this.calculate.bind(this);
    }

    calculate(e){
        e.preventDefault();
        let primeNumbersArray = this.numbers(this._input.value) 
        this.setState({
            primeNumbers: primeNumbersArray
        })
    }
    numbers(border){
        let primeNumbers = [];
        for(let i=1;i<=border;i++){
            let dividers = 0;
            for(let k=1;k<=i;k++){
                if(i%k===0){
                    dividers++
                }
            }
            if(dividers===2){
                primeNumbers.push(i)
            }
        }
        return primeNumbers
    }

    render() {
        return (
            <div>
                <h1>PrimeNumbers</h1>
                <form onSubmit={this.calculate}>
                    <input ref={(value)=> this._input = value}/>
                    <button>press</button>
                    <ul>
                        {this.state.primeNumbers.map((val)=><li>{val}</li>)}
                    </ul>
                </form>
                
            </div>

        );

    }
}

export default PrimeNumbers