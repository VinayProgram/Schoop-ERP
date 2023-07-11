import React, { useState  as UseState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const deletestudent = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const [info,setinfo]=UseState([])

    const sendnotice=async()=>{
        let id=document.getElementById('studentID').value
        let message=document.getElementById('fullName').value
        let type='Notice'
        var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,id,message})})
        let d=await data.json()
       console.log(d)
    }

    const shownotice=async()=>{
        let id=document.getElementById('studentID').value
        let type='ShowNotice'
        var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,id})})
        let d=await data.json()
        setinfo(d)
       console.log(d)
    }

    const clearnotice=async(id,message)=>{
      console.log(id+message)
      if(!id&!message){alert('No Notice')}
      else{
     let type='deleteNotice'
      var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
       body:JSON.stringify({type,batch,id,message})})
      let d=await data.text()
      alert(d)
    }
  }



  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'5cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Personal Notice for Student of {batch} </h4>
            <input type='text' placeholder='Student id' id='studentID' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <textarea type='text' placeholder='Notice' id='fullName' style={{marginLeft:'70px', marginTop:'5px', border:'2px solid #ccc',borderRadius:'5px'}}></textarea>  
            <input type='submit' onClick={sendnotice} value="Send Notice" className='btn btn-success' style={{marginLeft:'70px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
            <input type='submit' onClick={shownotice} value="Show Notices"className='btn btn-dark' style={{marginLeft:'5px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
        </div>
        <table className="table my-4" style={{width:'30rem',marginLeft:'0rem'}}>
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col"> Message</th>
    </tr>
  </thead>
  <tbody>
  {info.map((info)=>{
          return(
            <tr>
                <th scope="row">{info.StudentId}</th>
                <td id='message'>{info.Message}</td>
                <td><button className='btn btn-danger' onClick={()=>{clearnotice(info.StudentId,info.Message)}}>delete</button></td> 
                </tr>
          )
         })}
  </tbody>
  </table>
      </div>
        </div>
  )
}

export default deletestudent
