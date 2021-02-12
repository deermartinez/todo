import React, {Component} from 'react';
import "./Styles/style.css"
import Header from "../src/Components/header";
import Todo from "../src/Components/todos";
import Submit from "../src/Components/submit";
import Widgets from "../src/Components/widgets";

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

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  //this function copies contents of the old task array 
  //adds new tasks



//delete button, removing element from task array
handleDelete = (index) => {
  const newArr = [...this.state.tasks];
  newArr.splice(index, 1,);
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
<div className = 'wrapper'>
  <div className = 'card-frame'>

    <Widgets></Widgets>

    <Header numToDos = {this.state.tasks.length}/>
    {/* //goign to give us a list of our tasks */}
  {/* //"this" refers to numToDos, same line */} 


    <Todo tasks = {this.state.tasks} 
   //call the ondelete button
    onDelete = {this.handleDelete} />
  {/* //handleDelete is one of our functions
  //will remove a task -removes item from the state */}


    <Submit onFormSubmit = {this.handleSubmit} />
    {/* //submit box */}


  </div>
</div>
    )   
  };

}




//ctrl space
//press enter after typing





export default App;
