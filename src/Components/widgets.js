import React from 'react'
import '../Styles/widgets.css'


function widgets() {
    const time = new Date();
    const hours= time.getHours();
    const minutes= time.getMinutes();

    return (

        // <div>
        //     {/* <iframe src = "http://localhost:3000"></iframe> */}
        //     <div className = "time">{hours} : {minutes} </div>
        //     <div className = "links">
        //         <a href = "/">Click Me</a>
        //         <a href = "/">Test me</a>
        //     </div>
        //     <input type="Login"></input>
            
        // </div>


         <div classname = "widgets">
            <iframe width="320" height="440" src="http://instagram.com/embed" ></iframe>
            <div className = "links">
                <a href = "https://www.instagram.com/">Login</a>
                <a href = "https://www.instagram.com/">Follow me</a>
            </div>
            
            
        </div>

        
    )
}

export default widgets
