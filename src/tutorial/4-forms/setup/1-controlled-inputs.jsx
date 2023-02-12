import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [ people, setPeople] = useState([]);

  const handelSubmit = (e)=>{
    e.preventDefault();
    if(firstName && email){
      const person = { id : new Date().getTime().toString(), firstName, email};
    
      setPeople((people)=>{
        return [...people,person]
      })
    }else{
      console.log("Input is empty!")
    }
    setFirstName('');
    setEmail('');
  }
  return (
    <>
    <article>
      <form  className='form' onSubmit={handelSubmit}>
        <div className='form-control'>
          <label htmlFor="firstName">Name :</label>
          <input 
          type="text"
          name='firstName'
          value={firstName}
          onChange={(e)=>{setFirstName(e.target.value)}} />
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email :</label>
          <input 
          type="text"
          name='email'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      
      {
        people.map((person)=>{
          const { id ,firstName, email } = person;
          return (
          <div className='item' key={id}>         
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
          )
        })
      }
      
    </article>
    </>
  )
};

export default ControlledInputs;
