import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class StartScreen
 extends Component {
     constructor() {
         super();
         this.state = {
            player1Name: '',
            player2Name: ''
         }
     }
     setUserState1 = (event) => {
        
        this.setState({
            player1Name: event.target.value
        })
    }
     setUserState2 = (event) => {
        
         this.setState({
             player2Name: event.target.value
         })
     }
    render() {
        return (
        <div className="startScreen">
            <h1>Welcome</h1>
            <input type="text" value={this.state.player1Name} onChange={this.setUserState1}/>
            <br></br>
            <input type="text" value={this.state.player2Name} onChange={this.setUserState2}/><br></br>
            <Link to={{
                pathname: '/game',
                state: { fromStartScreen: true,
                player1: this.state.player1Name,
                player2: this.state.player2Name }
            }}>
            Начать игру
            <p></p>
            </Link>   
            
      </div>

        );
    }
}

export default StartScreen;