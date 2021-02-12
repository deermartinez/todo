import React from 'react'


function widgets() {
    const time = new Date();
    const hours= time.getHours();
    const minutes= time.getMinutes();

    return (

        <div>
            <iframe src = "http://localhost:3000"></iframe>
            <div className = "time">{hours} : {minutes} </div>
            <div className = "links">
                <a href = "/">Click Me</a>
                <a href = "/">Test me</a>
            </div>
            <input type="search"></input>
            
        </div>
    )
}

export default widgets
