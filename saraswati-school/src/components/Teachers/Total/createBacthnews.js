import React, { useState  as UseState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const CreateBatchNews = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const [info,setinfo]=UseState([])

    const sendnotice=async()=>{
        let mess=document.getElementById('fullName').value
        let type='insert'
        var data=await fetch('http://localhost:4500/admin/Notice',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,mess})})
        let d=await data.json()
        alert(d)
        shownotice()
    }

    const shownotice=async()=>{
        let type='ShowNotice'
        var data=await fetch('http://localhost:4500/admin/Notice',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch})})
        let d=await data.json() 
        setinfo(d)
        console.log(d)
    }

    const clearnotice=async(message)=>{
     let type='DeleteNotice'
      var data=await fetch('http://localhost:4500/admin/Notice',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
       body:JSON.stringify({type,batch,message})})
      let d=await data.text()
      alert(d)
      shownotice()
  }



  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'5cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Personal Notice for Student of {batch} </h4>
            <textarea type='text' placeholder='Notice' id='fullName' style={{marginLeft:'70px', marginTop:'5px', border:'2px solid #ccc',borderRadius:'5px'}}></textarea>  
            <input type='submit' onClick={sendnotice} value="Send Notice" className='btn btn-success' style={{marginLeft:'70px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
            <input type='submit' onClick={shownotice} value="Show Notices"className='btn btn-dark' style={{marginLeft:'5px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
        </div>
        <table className="table my-5" style={{width:'30rem',marginLeft:'0rem'}}>
  <thead>
    <tr>
      <th scope="col"> Message</th>
    </tr>
  </thead>
  <tbody>
  {info.map((info)=>{
          return(
            <tr>
                <td id='message'>{info.Message}</td>
                <td><button className='btn btn-danger' onClick={()=>{clearnotice(info.Message)}}>delete</button></td> 
                </tr>
          )
         })}
  </tbody>
  </table>
      </div>
        </div>
  )
}

export default CreateBatchNews
