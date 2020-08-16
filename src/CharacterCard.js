  
import React, { useState } from 'react';
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);

 const className = `card ${active ? 'activeCard': ''}`
 const activate = () => {
    if(!active){
    setActive(true)
    props.activationHandler(props.value)
    }
    }
   
 return (
 <div className={className} onClick={activate}>{props.value}</div>
 )

}