import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const  handelSubmit = (e)=>{
    e.preventDefault();
    console.log(refContainer.current.value);
  }

useEffect (()=>{
  console.log(divContainer.current);
  refContainer.current.focus();
})  
  return (
    <>
    <form className='form' onSubmit={handelSubmit}>
      <input type="text" ref={refContainer}/>
      <button type='submit'>Submit</button>
    </form>
    <div ref={divContainer}>
      Hello Lokesh
    </div>
    </>
  )
};

export default UseRefBasics;
