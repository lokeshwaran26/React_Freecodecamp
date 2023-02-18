import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
import People from './People';
const Person = () => {
  const [name, setName] = useState("Default name")
  const { id } = useParams();

  useEffect(()=>{
    // const newPerson = data;
    const newPerson = data.find((person)=> person.id === parseInt(id));
      setName(newPerson.name);
    
  },[]);
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>Back to people</Link>
    </div>
  );
};

export default Person;
