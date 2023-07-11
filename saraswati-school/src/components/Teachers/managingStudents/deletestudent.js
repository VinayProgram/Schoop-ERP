import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const deletestudent = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const deletes=async()=>{
        let studentId=document.getElementById('studentID').value
        let type='delete'
        var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,studentId})})
        let d=await data.text()
        if(d==='done'){alert('Student deleted')}else{alert('Error')}
        console.log(d)
    }
  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'5cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Delete Student of {batch} </h4>
            <input type='text' placeholder='Student id' id='studentID' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='text' placeholder='Name' id='fullName' style={{marginLeft:'70px', marginTop:'5px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
            <input type='submit' onClick={deletes} className='btn btn-danger' style={{marginLeft:'70px', marginTop:'5px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
        </div>
      </div>
        
        
        </div>
  )
}

export default deletestudent
