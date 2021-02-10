import logo from './logo.svg';
import './App.css';
import Sumbit from "Compo"

import React, {Component} from 'react';
import "./Styles/style.css/"
import Header from "../src/Components/header";
import Todos from "../src/Components/todos";


class App extends Component{
  //we are going to be passing states through app.js
//state is an object that holds info that will change  over time  
  //built into react
    //whenever the state component changes, the app will be rerendered to show changes
    //HAVE TO USE WITH CLASS EXTEND COMPONENT
  state = {
    tasks: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
    //will map through this array so it will display on out page
    //will change over time as we run through and add/take awy from it
  };
  render(){
    return(
      //class app components require a render and return
<div className = "wrapper">
  <div className = "card-frame">
    <Header numToDos = {this.state.tasks.length}/>
  {/* //"this" refers to numToDos, same line */}  




  </div>
</div>
    )   
  };

}




//ctrl space
//press enter after typing
<Header/>


function App() {
  return (
    <div className="">

    </div>
  );
}

export default App;
