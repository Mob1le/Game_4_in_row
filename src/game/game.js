import React, { Component } from 'react';
import Table from '../table/table.js'; 
import {Redirect,Link} from 'react-router-dom'; 


class Game extends Component {
     
  constructor(props) {
    super(props);
    this.state= {
      field: [
      [0,0,0,0,0,1],
      [0,0,0,0,1,2],
      [0,0,0,0,0,1],
      [0,0,0,0,1,2],
      [0,0,0,1,1,2],
      [0,0,0,0,0,2],
      [0,0,0,2,1,2],
      [0,0,0,0,0,0]]
    }
  }
  
  

  render() {
      
    const state = this.props.location.state;
    if (!state || !state.fromStartScreen) {
      return (<Redirect to="/" />);
    }
    
    return (
        <div className='LinkGameOver'>
            <Link to={{
                pathname: '/gameover',
                state: {fromGame: true}
            }}>
            Конец игры
            </Link>
    <h1>
        {state.player1} and {state.player2}
    </h1>
      <Table data = {this.state.field}/>
      </div>
    );
  }
}

export default Game;
