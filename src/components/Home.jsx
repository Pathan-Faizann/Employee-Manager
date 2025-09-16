import React from 'react'
import { useState ,useEffect} from 'react';
import "./Home.css"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
 const [display,setDisplay] = useState([])
 const [SData,setSdata] = useState([])
 const [showForm,setShowForm] = useState(false)
 const [EditItem,setEdititem] = useState(null)
  
  useEffect(() => {
  let mydata = JSON.parse(localStorage.getItem("data")) || [];
  if (!Array.isArray(mydata)) mydata = []; 
  setDisplay(mydata);
  setSdata(mydata);
}, []);

 
   
  const [searchedData,setSearchedData] = useState("")
  useEffect(() => {
    let seData = display.filter((item)=>(
    item.department.toLowerCase().includes(searchedData.toLowerCase()) ||
    item.name.toLowerCase().includes(searchedData.toLowerCase()) ||
    item.designation.toLowerCase().includes(searchedData.toLowerCase())
  ))
  setSdata(seData)
    
  }, [searchedData,display])
  
  
 
  
  function remove(id){
    const removedData = display.filter((item)=> item.id !== id)
    setDisplay(removedData)
    setSdata(removedData)
    localStorage.setItem("data",JSON.stringify(removedData));
  }
  function update(e){
    setEdititem(()=>({...EditItem,[e.target.name]:e.target.value}))

  }
   function selectDepartment(dep){
    setEdititem(prev=>({...prev,department:dep}))

  }
  function submit1(){
    console.log(EditItem)
    const UpdatedData = display.map((item)=>item.id === EditItem.id?EditItem:item)
    localStorage.setItem("data",JSON.stringify(UpdatedData))
    setDisplay(UpdatedData)
    setSdata(UpdatedData)
    setShowForm(false)
    setEdititem(null)
    


  }
 
  
  
  
   
  return (
    <div className='d-flex flex-column justify-content-center pc align-items-center'>
      <div className=" w-75 ms-5 d-flex align-items-center s" ><button className='btn mt-3'><FaSearch size={25}/></button><input type="text" placeholder='search by name, department or designation' value={searchedData} onChange={(e)=>setSearchedData(e.target.value)} className='form-control w-50 mt-3 border border-dark rounded-pill' />
     
</div>
      <div className='table-responsive w-100 px-3'>
      <table className='table table-bordered mt-4 fs-5 tb'>
        <thead>
        <tr className='text-center'>
        <th scope='col'>Id</th>
        <th scope='col'>Name</th>
        <th scope='col'>Department</th>
        <th scope='col'>Designation</th>
        <th scope='col'>Phone</th>
        <th scope='col'>E-mail</th>
        <th scope='col'>Remove</th>
        <th scope='col'>Update</th>
        </tr>
        </thead>
      {searchedData.length===0? display.map((item)=>(
        <tr key={item.id} className='p-5 fs-5 text-center home-data'>
          <td>{item.id.slice(-4)}</td>
          <td>{item.name}</td>
          <td>{item.department}</td>
          <td>{item.designation}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={()=>remove(item.id)} className='btn '><TiUserDelete size={24} /></button></td>
          <td><button onClick={()=>{
             setShowForm(!showForm)
             setEdititem(item)
            }} className='btn '><GrDocumentUpdate size={24} /></button></td>
          

        </tr>
        
      )):SData.length>0? SData.map((item)=>(
        <tr key={item.id} className='p-5 fs-5 text-center home-data'>
          <td>{item.id.slice(-4)}</td>
          <td>{item.name}</td>
          <td>{item.department}</td>
          <td>{item.designation}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={()=>remove(item.id)} className='btn border'><TiUserDelete size={24} /></button></td>
           <td><button onClick={()=>{
             setShowForm(!showForm)
             setEdititem(item)
            }} className='btn border'>Up</button></td>

        </tr>

      )):<h2 className='no'>No Data Found</h2>}
     
      </table>
      </div>
      {showForm && EditItem &&(<form className='form-up shadow' onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <button className='btn btn-X' onClick={()=>setShowForm(!showForm)}><IoMdCloseCircle size={25}/></button>
         <div className='d-flex align-items-center justify-content-center mt-3'>
        <label htmlFor="" className='form-label lab'>Name</label>
        <input type="text" value={EditItem.name || ""} name='name' className='form-control border  w-50' onChange={update} />
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab dep ' >Department</label>
<div className="dropdown">
  <button className="btn border dropdown-toggle d-btn" style={{width:"385px"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {EditItem.department || "Select Department "}
  </button>
  <ul className="dropdown-menu w-100 text-center form-ul" aria-labelledby="dropdownMenuButton">
    <li className='form-li'><button  onClick={() => selectDepartment("Sales")} className="dropdown-item" href="#">Sales</button></li>
    <li className='form-li'><button  onClick={() => selectDepartment("IT")} className="dropdown-item" href="#">IT</button></li>
    <li className='form-li'><button  onClick={() => selectDepartment("Finance")} className="dropdown-item" href="#">Finance</button></li>
    <li className='form-li'><button  onClick={() => selectDepartment("HR")} className="dropdown-item" href="#">HR</button></li>
    <li className='form-li'><button  onClick={() => selectDepartment("Support")} className="dropdown-item" href="#">Support</button></li>
    <li className='form-li'><button  onClick={() => selectDepartment("Marketing")} className="dropdown-item" href="#">Marketing</button></li>
  </ul>
</div>                
 </div>
  <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>Designation</label>
                <input type="text" required className='form-control border  w-50' value={EditItem.designation || ""} name='designation' onChange={update} />
                 </div>
                 <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>Phone</label>
                <input type="tel" required className='form-control border  w-50' maxLength={10} value={EditItem.phone || ""} name='phone' onChange={update} />
                 </div>
                  <div className='d-flex align-items-center justify-content-center mt-3'>
                 <label htmlFor="" className='form-label lab '>E-mail</label>
                <input type="email" required className='form-control border  w-50' value={EditItem.email || ""} name='email'   onChange={update} />
                 </div>
                 <div className='d-flex justify-content-center my-3'>
                <button className='btn ms-4 my-3 sub' type='submit' onClick={submit1}>Submit</button>
                </div>



      </form>)}

      
    </div>
  )
}

export default Home
