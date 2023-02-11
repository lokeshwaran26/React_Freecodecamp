import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () =>{
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    console.log('Called useEffect');
    window.addEventListener('resize', checkSize);

    return () =>{
      console.log("Cleanup");
      window.removeEventListener('resize', checkSize);
    }
  })
  console.log("render")
  return (
    <>
    <h2>Window width Size</h2>
    <h1>{size} px</h1>
    </>
  )
};

export default UseEffectCleanup;
