import React, { useState } from 'react';

const UseStateCounter = () => {
  const [values, setValues] = useState(0);

  const reset = () =>{
    setValues(0);
  }

  const increase = () =>{
    setTimeout( () =>{
        // setValues(values + 1);
        setValues( (prevstate )=>{
          return prevstate + 1
        })
    },2000)
  }

  return (
    <> 
    <section style={{margin : '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{values}</h1>
        <button className='btn' onClick={()=>{ setValues(values + 1)}}>increase</button>
        <button className='btn' onClick={()=>{reset()}}>reset</button>
        <button className='btn' onClick={()=>{ setValues(values - 1)}}>decrease</button>
    </section>
    <section style={{margin : '4rem 0'}}>
      <h2>Complex Counter</h2>
      <h1>{values}</h1>
      <button className='btn' onClick={()=>{increase()}}>increase later</button>
    </section>
    </>
  )
};

export default UseStateCounter;
