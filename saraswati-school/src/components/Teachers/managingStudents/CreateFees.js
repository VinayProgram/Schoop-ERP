import React, { useState  as UseState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const CreateFees = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const [info,setinfo]=UseState([])

    const addfees=async()=>{
        let id=document.getElementById('studentID').value
        let totalfees=document.getElementById('TotalFees').value
        let payment=document.getElementById('PaidtoDate').value
        let remaining=document.getElementById('Remaining').value
        let type='insert'
        var data=await fetch('http://localhost:4500/admin/managefees',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,id,totalfees,payment,remaining})})
        let d=await data.text()
        alert(d)
        Showfees(id)
    }  

    const Showfees=async(id)=>{
        if(!id){id=document.getElementById('studentID').value}
        let type='Showfees'
        var data=await fetch('http://localhost:4500/admin/managefees',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,id})})
        let d=await data.json()
        console.log(d)
        setinfo(d)
    }
    

  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'5cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Create Fees and Update fees of student {batch} </h4>
            <input type='text' placeholder='Student id' id='studentID' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='text' placeholder='TotalFees' id='TotalFees' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='text' placeholder='PaidtoDate' id='PaidtoDate' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='text' placeholder='Remaining' id='Remaining' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='submit' onClick={addfees} value="Set Fees" className='btn btn-success' style={{marginLeft:'70px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
            </div>
        <table className="table my-4" style={{width:'30rem',marginLeft:'0rem'}}>
  <thead>
    <tr>
    <th scope="col">StudentId</th>
      <th scope="col"> Totalfees</th>
      <th scope="col">PaidTodate</th>
      <th scope="col danger">Remaining</th>
    </tr>
  </thead>
  <tbody>
  {info.map((info)=>{
          return(
            <tr>
               <th scope="row">{info.StudentId}</th>
                            <td>{info.Totalfees}</td>
                <td>{info.PaidTodate}</td>
                <td style={{color:'Red',fontWeight:'bold'}}>{info.Remaining}</td> 
               </tr>
          )
         })}
  </tbody>
  </table>
      </div>
        </div>
  )
}

export default CreateFees
