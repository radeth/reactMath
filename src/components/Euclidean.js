import React, { Component } from 'react';


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
        let nwdNumber = this.number(a,b)
        console.log(nwdNumber)
        this.setState({
            NWD: nwdNumber
        })
    }
    number(a, b) {
        while(a!==b){
            if(a>b){
                a=a-b
                console.log(a)
            }
            else{
                b=b-a
                console.log(b)

        }
        
        }
        return a
    }
    render() {
        return (
            <div>
                <h1>Euclidean</h1>
                <form onSubmit={this.calculate}>
                    <input ref={(val) => this._inputOne = val} />
                    <input ref={(val) => this._inputTwo = val} />
                    <button>press</button>
                </form>
                <div>{this.state.NWD}</div>
            </div>
        );

    }
}
export default Euclidean