import React, { useState } from 'react';
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);

 const attemptRef = useRef(props.attempt);
 useEffect(() => {
    if(attemptRef.current != props.attempt){
    setActive(false)
    attemptRef.current = props.attempt
    }
    })
   
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