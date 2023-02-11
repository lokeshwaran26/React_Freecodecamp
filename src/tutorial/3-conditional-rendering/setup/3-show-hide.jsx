import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [ show, setShow] = useState(false);
  const [ size, setSize ] = useState(window.innerWidth);
   
  const checkSize = ()=>{
     setSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize);

    return ()=>{
      window.removeEventListener('resize', checkSize);
    }
  },[])
  return (
    <>
     <h2>show/hide</h2>
     <button className='btn' onClick={()=> setShow(!show)}>SHOW</button>
     {show && <Item size = {size}/> }
    </>
  )
};

const Item = ({size}) =>{
  return (
    <>
     <div style={{marginTop : '4rem'}}>
      <h2>Window Size : {size}</h2>
     </div>
    </>
  )
}

export default ShowHide;
