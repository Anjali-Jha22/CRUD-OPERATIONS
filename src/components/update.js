import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Update() {
    let history=useHistory();

    const [name,setname]= useState('');
    const [age,setage]= useState('');
    const [salary,setsalary]= useState('');
    const [ID,setID]= useState(null);

    console.log(name);
    console.log(age);
    console.log(salary);
    
    function sendDataToApi(e){
        console.log('hello')
        e.preventDefault();
        axios.put(`https://61d6f9e435f71e0017c2e97c.mockapi.io/crud/${ID}`,
        {
           name,
           age,
           salary 
        })
       .then(() =>{history.push('/');
    })

    }
    
    useEffect(() =>{
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('age'));
        setsalary(localStorage.getItem('salary'));
        setID(localStorage.getItem('ID'))
    },[])

  return(
      <div className='create'>
          <h2>Update details</h2>
          <form>
              <label> Name:</label>
              <input 
               name='names'
               value={name}
               onChange={(e) => setname(e.target.value)}
               placeholder='name' 
               type='text' required
               
               />
              
              <label> Age:</label>
              <input name='ages'
              value={age} 
              onChange={(e) => setage(e.target.value)}
              placeholder='age'
               type='number' required
               />

              <label> Salary:</label>
              <input name='salaries'
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
              placeholder='salary' 
              type='number' required
              />

              <button type='submit' onClick={sendDataToApi}> Update</button>
          </form>
      </div> 
);
}

