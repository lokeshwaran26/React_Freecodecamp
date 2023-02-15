import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) =>{
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people : newPeople,
      isModalOpen : true,
      modalContent : "Item Added"
    }
  }
  if(action.type ==='NO_ITEM'){
    
    return {
      ...state,
      isModalOpen : true,
      modalContent : "Please enter a value"
    }
  }
  if(action.type ==='CLOSE_MODAL'){
    
    return {
      ...state,
      isModalOpen : false,
      
    }
  }
};

const defaultState = {
  people : [],
  isModalOpen : false,
  modalContent : 'item Added'
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch]  = useReducer(reducer, defaultState)

  const closeModal = ()=>{
    dispatch({type : 'CLOSE_MODAL'})
  }

  const handelChange =(e)=>{
    e.preventDefault();
    if(name){
      const newItem = {id : new Date().getTime().toString(), name}
      dispatch({type : 'ADD_ITEM', payload : newItem});
      setName('')
    }else{
      dispatch({type : 'NO_ITEM'});
    }
  }


  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent= {state.modalContent}/>}
    <form className='form' onSubmit={handelChange}>
      <div>
        <input type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <button className='btn' type='submit'>Add Item</button>
    </form>
    {state.people.map((person)=>{
      const {id, name} = person;
      return (
        <div key={id}>
          <ul className='item'>
            <li>{name}</li>
          </ul>
        </div>
      )
    })}
    </>
  )
};

export default Index;
