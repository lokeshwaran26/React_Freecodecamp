import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson ] = useState({
    name : 'lokesh k',
    age  : '18',
    message : 'Hi React'
  })

  const changeMessage = () =>{
    person.message === "Hi React"? setPerson({...person, message : "Succesfully Changed"}) : setPerson({...person, message : "Hi React"});
    
  }
  return (
    <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button className='btn' onClick={()=>changeMessage()}>Change</button>
    </>
  )
};

export default UseStateObject;
