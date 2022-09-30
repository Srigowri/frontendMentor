import React from "react";

export default function Cards(props){ 
    let name = "card"       
    if (props.push === true){
         name += " push";
    }
    return (<div className={name}  style={props.style}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <img src={props.icon} alt={props.title}></img>
    </div>)
}