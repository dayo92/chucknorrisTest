import { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import RandomJoke from './components/RandomJoke/RandomJoke';
import SearchJoke from './components/SearchJoke/SearchJoke';

import './App.css';

class App extends Component {

  render(){
    return (
       <BrowserRouter>
        <div className="App">
            <Navbar/>
              <Switch>
                   <Route path="/" exact component={RandomJoke}/>
                   <Route path="/search" component={SearchJoke}/>  
              </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
