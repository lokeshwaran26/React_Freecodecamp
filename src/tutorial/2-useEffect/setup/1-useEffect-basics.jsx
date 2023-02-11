import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect( ()=>{
    console.log('Called useEffect'); 
    if(value > 0 ) document.title = `New Message(${value})`;
    
  },[value])
  console.log('Rendered');

  useEffect(() =>{
    console.log("new effect")
  },[])

  return (
    <>
    <section style={{ margin : '4rem 0'}}>
      <h2>UseEffect Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>{setValue(value + 1)}}>Increase</button>
    </section>
    </>
  )
};

export default UseEffectBasics;
