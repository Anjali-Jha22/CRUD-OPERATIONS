import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Create() {
let history = useHistory();

    const [name,setname]= useState('');
    const [age,setage]= useState('');
    const [salary,setsalary]= useState('');

    console.log(name);
    console.log(age);
    console.log(salary);
    
    function sendDataToApi(e){
        console.log('hello')
        e.preventDefault();
        axios.post(`https://61d6f9e435f71e0017c2e97c.mockapi.io/crud`,
        {
           name,
           age,
           salary 
        })
       .then(() =>{history.push('/')
    })

    }
    
    

  return(
      <div className='create'>
          <h2>Add a new user</h2>
          <form>
              <label> Name:</label>
              <input 
               name='names'
               onChange={(e) => setname(e.target.value)}
               placeholder='name' 
               type='text' required
               
               />
              
              <label> Age:</label>
              <input name='ages' 
              onChange={(e) => setage(e.target.value)}
              placeholder='age'
               type='number' required
               />

              <label> Salary:</label>
              <input name='salaries'
              onChange={(e) => setsalary(e.target.value)}
              placeholder='salary' 
              type='number' required
              />

              <button type='submit' onClick={sendDataToApi}> Add user</button>
          </form>
      </div> 
);
}

