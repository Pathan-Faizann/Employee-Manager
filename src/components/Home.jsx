import React from 'react'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import "./Home.css"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { remove } from '../Store/DataSlice';
import { FaSearch } from "react-icons/fa";


const Home = () => {
  const dispatch = useDispatch()
  // const data = useSelector((state)=>state.Data.data)
  // console.log(data)
  
  const mydata = JSON.parse(localStorage.getItem("data"))|| []
  // console.log(mydata)
  const [searchedData,setSearchedData] = useState("")
  const SData = mydata.filter((item)=>(
    item.department.toLowerCase().includes(searchedData.toLowerCase()) ||
    item.name.toLowerCase().includes(searchedData.toLowerCase()) ||
    item.designation.toLowerCase().includes(searchedData.toLowerCase())
  ))
  // console.log(SData)
  
  
  
   
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className=" w-75 ms-5 d-flex align-items-center" ><button className='btn mt-3'><FaSearch size={25}/></button><input type="text" placeholder='search by name, department or designation' value={searchedData} onChange={(e)=>setSearchedData(e.target.value)} className='form-control w-50 mt-3 border border-dark rounded-pill' /></div>
      <table className='table table-bordered mt-4 fs-5'>
        <thead>
        <tr className='text-center'>
        <th scope='col'>Id</th>
        <th scope='col'>Name</th>
        <th scope='col'>Department</th>
        <th scope='col'>Designation</th>
        <th scope='col'>Phone</th>
        <th scope='col'>E-mail</th>
        <th scope='col'>Remove</th>
        </tr>
        </thead>
      {searchedData.length===0? mydata.map((item)=>(
        <tr key={item.id} className='p-5 fs-5 text-center home-data'>
          <td>{item.id.slice(-4)}</td>
          <td>{item.name}</td>
          <td>{item.department}</td>
          <td>{item.designation}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={()=>dispatch(remove(item.id))} className='btn border'><TiUserDelete size={24} /></button></td>
          

        </tr>
        
      )):SData.length>0? SData.map((item)=>(
        <tr key={item.id} className='p-5 fs-5 text-center home-data'>
          <td>{item.id.slice(-4)}</td>
          <td>{item.name}</td>
          <td>{item.department}</td>
          <td>{item.designation}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={()=>dispatch(remove(item.id))} className='btn border'><TiUserDelete size={24} /></button></td>
          

        </tr>

      )):<h2 className='no'>No Data Found</h2>}
     
      </table>

      
    </div>
  )
}

export default Home
