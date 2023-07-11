
import React, { useEffect as UseEffect} from 'react'
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'

const Notice = () => {
    var count=0;
    const data=Usecontext(actions)
    const {Notices,information}=data
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null||checklogin==="Error"){
      window.location.href='/login'
    }

    const loaddata=async()=>{
        await Notices(a,checklogin)
        console.log(information)
      }
  
      UseEffect(()=>{
        loaddata()
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
                <td>{data.semester}</td>
                    <td>{data.SubjectName}</td>
                <td>{data.Marks}</td>
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
