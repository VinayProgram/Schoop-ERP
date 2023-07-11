
import React, { useEffect as UseEffect, useState} from 'react'

const Notice = () => {
    var count=0;
    const [information,Setinformation]=useState([])
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null||checklogin==="Error"){
      window.location.href='/login'
    }
    
    const shownotice=async()=>{
        let batch=a
        var data=await fetch('http://localhost:4500/basic/PersonalNotices',{method:'POST',
        headers:{'Content-Type':'application/json','STML':checklogin},
        body:JSON.stringify({batch,checklogin})})
        let d=await data.json()
        console.log(d)
        Setinformation(d)
    }
  
      UseEffect(()=>{
        shownotice()
      },[])

    return (
    <div>
        <center>
        <table className="table my-4" style={{width:'40rem',}}>
  <thead>
    <tr>
      <th scope="col">Nos</th>
      <th scope="col">Notice</th>
    </tr>
  </thead>
  <tbody>
        {information.map((data)=>{
            return(
                <>
                <tr>
                <th scope="row">{count++}</th>
                <td>{data.Message}</td>
                </tr>
                </>
            )
        })}
        </tbody>
        </table>
        </center>
    </div>
  )
}

export default Notice
