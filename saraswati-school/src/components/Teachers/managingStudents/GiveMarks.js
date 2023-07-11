import React, { useState  as UseState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const GiveMarks = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const [info,setinfo]=UseState([])
    const [date,setDate]=UseState("No date")
    const [TestName,setTest]=UseState("No date")
    const [SubjectName,setSubjectname]=UseState("No date")

    const shownotice=async()=>{
        let dateset=document.getElementById('datesetting').value
        let semester=document.getElementById('semester').value
        let SubjectName=document.getElementById('SubjectName').value
        setDate(dateset)
        setSubjectname(SubjectName)
        setTest(semester)
        console.log(dateset)
        let type='ShowNotice'
        var data=await fetch('http://localhost:4500/basic/AttendanceStudents',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch})})
        let d=await data.json()
        setinfo(d)
       console.log(d)
    }

    const submitmarks=async(id,semester,subjectname,type,givendate)=>{
     let marks=document.getElementById(id+'Marksshow').value
     console.log(id,semester,subjectname,type,givendate,marks)
        var data=await fetch('http://localhost:4500/admin/markesheet',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
       body:JSON.stringify({type,batch,id,semester,subjectname,marks,givendate})})
      let d=await data.text()
     alert(d)
  }



  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'5cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Personal Notice for Student of {batch} </h4>
            <input type='text' id='semester' placeholder='Test Name' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='text' id='SubjectName' placeholder='Subjectname' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
             <input type='datetime-local' id='datesetting' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input>    
            <input type='submit' onClick={shownotice} value="Get Students"className='btn btn-dark' style={{marginLeft:'70px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
        </div>
        <table className="table my-4" style={{width:'30rem',marginLeft:'0rem',marginTop:'1.5cm'}}>
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col">Name</th>
      <th scope="col">Examination Date</th>
      <th scope="col">Test Name</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
  {info.map((info)=>{
          return(
            <tr>
                <th scope="row">{info.Studentid}</th>
                <td id='message'>{info.FullName}</td>
                <td id='date'>{date}</td>
                <td id='TestName'>{TestName}</td>
                <td id='subjectname'>{SubjectName}</td>
                <td id='date'> <input type='text' id={info.Studentid+'Marksshow'} placeholder='marks' style={{width:'50px', border:'2px solid #ccc',borderRadius:'5px'}}></input> </td>
        
                <td><button className='btn btn-success' onClick={()=>{submitmarks(info.Studentid,TestName,SubjectName,"insert",date)}}>Submit</button></td> 
                <td><button className='btn btn-danger' onClick={()=>{submitmarks(info.Studentid,TestName,SubjectName,"delete",date)}}>Delete</button></td> 
                </tr>
          )
         })}
  </tbody>
  </table>
      </div>
        </div>
  )
}

export default GiveMarks
