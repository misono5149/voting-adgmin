import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
	Route,
	Link,
	Switch
} from "react-router-dom";
import Header from './component/Header.js';
import Voting from './container/Voting.js';
import VotingResult from './container/VotingResult.js';


const Main =()=>(
    <Switch>
      <Route exact path="/" component={Voting}></Route>
      <Route exact path="/voting/result" component={VotingResult}></Route>
    </Switch>
  )

class App extends Component {

  render() {
    return (
      <div className="App">
         <Header />
         <div className="content">
         	<Main />
         </div>
         
      </div>
    );
  }
}

export default App;