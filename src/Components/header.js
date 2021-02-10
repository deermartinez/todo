// import React from 'react'
// import "../Styles/styles.css";

// //when we pass js in reacg we write it ABOVE the return/render element//
// //.JS is return in {} passing some js
// //{{}} inline styling

// function header() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default header



import React from 'react'

function header(props) {
    //props brings live component
    return (
        <div className = "class-header">
            {/* //so we can call it later in css */}
            <h1 className = "class-header-title">Your {props.numToDo }Tasks to Complete</h1>

            
        </div>
    )
}

export default header
