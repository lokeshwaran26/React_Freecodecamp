import React, { useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) =>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id)
    })
  }
  return (
    <>
    <section>
      <h2>prop drilling</h2>
      <List people={people} removeItem={removeItem}/>
    </section>
    </>
  )
};

const List = ({people,removeItem}) =>{
  return (
    <>{
      people.map((person)=>{
          return ( 
          <Singleperson key={person.id} {...person} removeItem={removeItem}/>
          )
      })
    }
    </>
  )
}

const Singleperson = ({id, name,removeItem}) =>{
  
   return (
    <>
    <div className='item' key={id}>
      <h4>{name}</h4>
      <button onClick={()=>removeItem(id)}>remove</button>
    </div>
    </>
   )
}

export default PropDrilling;
