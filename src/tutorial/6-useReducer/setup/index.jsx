import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer';
// reducer function

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
        <div key={id} className='item'>
          <ul >
            <li>{name}</li>
          </ul>
          <button onClick={()=>{ dispatch({type : 'REMOVE_ITEM',payload : id})}}>remove</button>
        </div>
      )
    })}
    </>
  )
};

export default Index;
