import React, { Component } from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.onBlockClick = this.onBlockClick.bind(this);
    this.state = {
        colunms: [],
        player: '',
        winner:''
     };
}

  onBlockClick = (id) => {
    if((id.currentTarget && (id.currentTarget.textContent == 'X' || id.currentTarget.textContent == 'O')) || this.state.winner !== '') {
      return;
    }
    var winPossibilities = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    if(this.state.player == '' || this.state.player == 'X') {
      $('#'+ id.target.id +'').html('X');
      this.setState({
        player: 'O'
      });
     
    } else if(this.state.player == 'O') {
      $('#'+ id.target.id +'').html('O');
      this.setState({
        player: 'X'
      });
    }
    winPossibilities.forEach((elem)=>{
      var one = document.getElementById(elem[0]).textContent;
      var two = document.getElementById(elem[1]).textContent;
      var three = document.getElementById(elem[2]).textContent;
      var firstElem = document.getElementById(elem[0]);
      var secondElem = document.getElementById(elem[1]);
      var thirdElem = document.getElementById(elem[2]);
      if(one=='X'&& two=='X'&&three=='X'){

       this.setState({
        winner: 'X'
       }); 
       firstElem.style.color = 'darkgreen';
       secondElem.style.color = 'darkgreen';
       thirdElem.style.color = 'darkgreen';

       $(firstElem.parentElement).find('td[id='+firstElem.id+']');
      

       document.getElementById('turn').style.display = 'none';
      } else if(one=='O'&& two=='O'&&three=='O'){
        firstElem.style.color = 'darkgreen';
        secondElem.style.color = 'darkgreen';
        thirdElem.style.color = 'darkgreen';
        this.setState({
          winner: 'O'
         }); 
         document.getElementById('turn').style.display = 'none';
        }
    });
  }

  restartGame =() => {
    this.setState({
      colunms: [],
      player: '',
      winner:''
    });
   var list =  document.getElementsByClassName('cell');
   Array.prototype.forEach.call(list, key =>{
    key.textContent = '';
    key.style.color = 'black';
    key.setAttribute('style', "color:blacks;background-image: linear-gradient(to bottom ,  transparent calc(50% - 1px), white, transparent calc(50% + 1px));"); 
   });
  }

  render() {
    return (
      <div className="App">
          <a>Tic Tac Toe Game</a>
          <div>
            <table>
              <tbody>
              <tr>
                <td className="cell" id="0" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="1" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="2" onClick={this.onBlockClick.bind(this)}></td>
              </tr>
               <tr>
                <td className="cell" id="3" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="4" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="5" onClick={this.onBlockClick.bind(this)}></td>
              </tr>
              <tr>
                <td className="cell" id="6" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="7" onClick={this.onBlockClick.bind(this)}></td>
                <td className="cell" id="8" onClick={this.onBlockClick.bind(this)}></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div  id="turn">TURN : {this.state.player}</div>
          <div className="result">The winner is player: {this.state.winner}</div>
          <button id="restart" onClick={this.restartGame}>Restart Game</button>
      </div>
    );
  }
}

export default App;
