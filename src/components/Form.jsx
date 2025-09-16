import React from 'react'
import { useState,useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import { setData } from '../Store/DataSlice'
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';


const Form = () => {
       const dispatch = useDispatch();
  const [emps,setEmps] = useState({})
  const see  = useSelector((state)=>state.Data.data)
  const id = uuidv4();
  useEffect(() => {
      console.log(see)

    
  }, [see])
  
  function save(e){
    setEmps(()=>({...emps,[e.target.name]:e.target.value}))
  }
  function submit(e){
          e.preventDefault();

    if (!emps.name || !emps.department || !emps.designation || !emps.phone || !emps.email){
      alert("Please fill all the details")
    }
    else if(emps.phone.length === 10 && emps.email.endsWith("@gmail.com")){
       
    const FinalEmps={...emps,id:id}
      dispatch(setData(FinalEmps))
      setEmps({})
      alert("Registered Successfully")

    }
    else{
      alert("Invalid phone number or email")
       

    }
  }
  function selectDepartment(dep){
    setEmps(prev=>({...prev,department:dep}))

  }
  
  return (
    <>
    <div className='d-flex justify-content-center '>
        <div className=' f-con w-50'>
                <h1 className='text-center mt-4 mb-3'>Add New Employee</h1>

            <form onSubmit={submit} className='form shadow pt-3   '>
              <div className='d-flex mt-3 align-items-center justify-content-center'>
                <label htmlFor="" className='lab form-label'>Name</label>
                <input type="text" required className='form-control border  w-50' value={emps.name || ""} name='name' onChange={save} />
                </div>
                <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab dep ' >Department</label>
<div className="dropdown">
  <button className="btn border dropdown-toggle d-btn" style={{width:"385px"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {emps.department || "Select Department "}
  </button>
  <ul className="dropdown-menu w-100 text-center form-ul" aria-labelledby="dropdownMenuButton">
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("Sales")} className="dropdown-item" href="#">Sales</button></li>
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("IT")} className="dropdown-item" href="#">IT</button></li>
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("Finance")} className="dropdown-item" href="#">Finance</button></li>
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("HR")} className="dropdown-item" href="#">HR</button></li>
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("Support")} className="dropdown-item" href="#">Support</button></li>
    <li className='form-li'><button type='button'  onClick={() => selectDepartment("Marketing")} className="dropdown-item" href="#">Marketing</button></li>
  </ul>
</div>                
 </div>
                  <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>Designation</label>
                <input type="text" required className='form-control border  w-50' value={emps.designation || ""} name='designation' onChange={save} />
                 </div>
                 <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>Phone</label>
                <input type="tel" required className='form-control border  w-50' maxLength={10} value={emps.phone || ""} name='phone' onChange={save} />
                 </div>
                  <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>E-mail</label>
                <input type="email" required className='form-control border  w-50' value={emps.email || ""} name='email'   onChange={save} />
                 </div>
                 <div className='d-flex justify-content-center my-3'>
                <button className='btn ms-4 my-3 sub' type='submit' >Submit</button>
                </div>
            </form>
            </div>
        
      
    </div>
    
    </>
  )
}

export default Form
