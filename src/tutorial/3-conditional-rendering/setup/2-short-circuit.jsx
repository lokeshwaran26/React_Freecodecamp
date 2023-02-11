import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [ isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
    <h2>Lokesh</h2>
    <button className='btn' onClick={()=> setIsError(!isError)} >Toggle Button</button>
    <h1>{isError && 'Error'}</h1>
    </>
  )
};

export default ShortCircuit;
