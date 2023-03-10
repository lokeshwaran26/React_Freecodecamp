import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setISLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUser, setIsUser] = useState("Default");

  useEffect(()=>{
    fetch(url)
    .then((resp)=> {
      if(resp.status >=200 && resp.status <= 299){
        return resp.json();
        
      }else{
        setISLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((user)=>{
      const { login } = user;
      setISLoading(false);
      setIsUser(login);
    })
    .catch((error)=> console.log(error));
  },[])

  if(isLoading) 
  {
    return <h1>Loading..</h1>
  }

  if(isError) 
  {
    return <h1>Error</h1>
  }

  if(isUser) 
  {
    return <h1>{isUser}</h1>
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
