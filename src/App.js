import React, { Component } from 'react';
import './App.css';

class App  extends Component
{
   state={
    numberOfballs:0
   }

ballChangedhandler = (event) =>{
  this.setState({
      
    numberOfballs : event.target.value
  })
}
 

  
  render(){

   let balls =  this.state.numberOfballs;
   let display;

   if(balls === 0){
     display = <h3>Please enter any number greater than 0</h3>
   }

   else if(balls < 0){
      display = <h3>OOPS! balls cannot be negative!!</h3>
   }

   else if(balls === 1)
   {
     display = <h3>There is only 1 way to empty the bag.</h3>
   }

   else if (balls === 2) {
    display = <h3>There are 2 ways to empty the bag.</h3>
   }
   

   else{
     
     let displayFormula = (balls - 1) + (balls - 2) ;
    display = <h3> There are {displayFormula} ways to empty the bag.</h3>
   }

    return <div className = "App">
      <a href = "https://www.bayzat.com/">BAYZAT</a>
      <h2>EMPTY THE BAG</h2>
      
      
        <input placeholder = "enter number of balls in bag" onChange = {this.ballChangedhandler} 
        value={this.state.numberOfballs} type = "number" >
      
        </input>
        <div className = "Result">
         {display}
        </div>
        
      
    </div>
  }
}

export default App;
