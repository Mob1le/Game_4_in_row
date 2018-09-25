import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Game from './game/game.js';
import StartScreen from '../src/startscreen/startscreen.js';
import GameOver from './game/gameover.js';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route path="/" component={StartScreen} exact={true}/>
        <Route path="/game" component={Game} />
        <Route path="/gameover" component={GameOver} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
