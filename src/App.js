import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Fibonacci from './components/Fibonacci'
import PrimeNumbers from './components/PrimeNumbers'
import Euclidean from './components/Euclidean'
import Error from './components/Error'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Fibonacci} exact/>
                    <Route path="/prime-numbers" component={PrimeNumbers} />
                    <Route path="/euclidean" component={Euclidean}/>
                    <Route component={Error}/>
                </Switch>
            </div>
            </BrowserRouter>
        );

    }
}

export default App