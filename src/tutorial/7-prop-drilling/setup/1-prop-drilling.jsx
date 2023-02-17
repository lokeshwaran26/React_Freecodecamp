import React, { useContext, useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const personContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) =>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id)
    })
  }
  return (
    <>
      <personContext.Provider value={{removeItem, people}}>
    <section>
      <h2>Context API / useContext</h2>
      <List  />
    </section>
    </personContext.Provider>
    </>
  )
};

const List = () =>{
  const { people} = useContext(personContext);
  return (
    <>{
      people.map((person)=>{
          return ( 
          <Singleperson key={person.id} {...person} />
          )
      })
    }
    </>
  )
}

const Singleperson = ({id, name}) =>{
  const { removeItem} = useContext(personContext);
   return (
    <>
    <div className='item' key={id}>
      <h4>{name}</h4>
      <button onClick={()=>removeItem(id)}>remove</button>
    </div>
    </>
   )
}

export default ContextAPI;
