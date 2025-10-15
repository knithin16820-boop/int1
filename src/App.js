import React from "react";

function App(props){
    return(
        <div>
            <h1>Functional Component</h1>
            <h3>Name :{props.name}</h3>
            <h3>Age :{props.age}</h3>
            <h3>Branch : {props.branch}</h3>
            <h3>Roll No : {props.rollno}</h3>
        </div>
    )
}

export default App;
