import logo from './logo.svg';
import './App.css';


import React, {Component} from 'react';
// import "./Styles/style.css/"
import Header from "../src/Components/header";
import Todos from "../src/Components/todos";
import Sumbit from "../src/Components/submit";

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



//delete button, removing element from task array
handleDelete = (index) => {
  const newArr = [...this.state.tasks]
  newArr.splice(index, 1,)
   //as we delete it is going through the task array//
  //moving the next idem up by one when we delete
  this.setState({tasks: newArr});
  //everytime we delete, it splices the array, moves the next up,
  //state of our component every time we lose a number
}
//move up anything in tasks 


//functions must be above render
  render(){
    return(
      //class app components require a render and return
<div className = "wrapper">
  <div className = "card-frame">

    <Header numToDos = {this.state.tasks.length}/>
    {/* //goign to give us a list of our tasks */}
  {/* //"this" refers to numToDos, same line */} 


    <Todos tasks = {this.state.tasks} 
   //call the ondelete button
    onDelete = {this.handleDelete} />
  {/* //handleDelete is one of our functions
  //will remove a task -removes item from the state */}



  </div>
</div>
    )   
  };

}




//ctrl space
//press enter after typing
<Header/>




export default App;
