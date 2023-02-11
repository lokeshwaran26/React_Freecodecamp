import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
   const [users, setUsers] = useState([]);
   const getUserdata = async() =>{
    const responce = await fetch(url);
    const users = await responce.json();
    setUsers(users);
   }
   console.log(users);
   
   useEffect(()=>{
    getUserdata();
   },[])

   return (
    <>
    <h2>Github Users</h2>
    {
      users.map((user)=>{
      
        const { id, login, avatar_url, html_url} = user;
        return (
            <ul className='users' key={id}>
            <li >
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
              
            </li>
            </ul>
        )
      })
    }
    </>
  )
};

export default UseEffectFetchData;
