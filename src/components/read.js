import axios from 'axios';
import React , {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

export default function Read() {

    const [apiData, setapiData] = useState([])

    useEffect(()=>{
      axios.get(`https://61d6f9e435f71e0017c2e97c.mockapi.io/crud`)
      .then((getData)=>{
           setapiData(getData.data);
       })
    },[])
    
    const setData=(id,name,age,salary)=>{ //storing the data in local storage for update operation
      localStorage.setItem('ID',id);
      localStorage.setItem('name',name);
      localStorage.setItem('age',age);
      localStorage.setItem('salary',salary);
    }

    const getData=()=>{// for getting update data
      axios.get(`https://61d6f9e435f71e0017c2e97c.mockapi.io/crud`)
      .then((getData)=>{
           setapiData(getData.data);
       })
    }

    const onDelete =(id)=>{//for delete operation
      axios.delete(`https://61d6f9e435f71e0017c2e97c.mockapi.io/crud/${id}`)
      .then(()=>{
        getData();
      })
    }

    return ( 
  <div className='table'>
    <h3>All users</h3>
  <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Salary</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
  {apiData.map((data)=> {
      return(
        <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.salary}</td>
        <td>
            <Link to ='/update'>
            <button onClick={()=> setData(data.id,data.name,data.age,data.salary)}> 
              Update</button>
            </Link>
        </td>
        <td>
            <Link to ='/'>
            <button onClick={()=> onDelete(data.id)}> 
              Delete</button>
            </Link>
        </td>
      </tr>
      )
  })}
 </table>

      </div>
     );
}
 

