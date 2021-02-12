import React from 'react'

const ToDoList = (props) => {
    //props is getting info from other pages
    const todos = props.tasks.map((todo, index)=> {
    //have acces to all the todos we will pass
    //we will pass tasks as a prop= const todo

    //where does tasks come from?
    //from te app.js tasks

    //what does .map do?
    //maps through each task 
    //because tasks is an array, it is going to map through everything in array
        //whenever we use ,.map we need a unique key to pass index
        //index as a parameter to catch those keys
        //.map withouth key will warn us in react app as an "unkept content"

    return <todo content = {todo} key = {index} id = {index} onDelete={props.onDeete}/>
    //access to all todos to take tasks as prop
})
    return (
        <div className = 'list-wrapper'>
            {todos}
            {/* //map function needs to include a unique key to use as a parameter
            //include id and key */}
        </div>
    )
}

const todo = (props) => {
    //displays content of the task string
    //fat arrow, don't have to do return immediately after
    return(
        <div className = 'list-item'>
            {props.content}
        {/* //content is list above tha  */}
        {/* //When you press enter, this will dispaly */}
        <button class="delete" onClick={()=> {props.onDelete(props.id)}}> X </button>
        {/* //targeting the button by its props id, delete when clicked
        //anything from the array-from that .map
        //fat arror => because it is a function */}
        </div>
    )
}

export default ToDoList;
