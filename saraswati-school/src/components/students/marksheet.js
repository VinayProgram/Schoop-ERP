import React, { useEffect as UseEffect} from 'react'
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'

const marksheet = () => {
    const data=Usecontext(actions)
    const {Marksheetdata,information}=data
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null||checklogin==="Error"){
      window.location.href='/login'
    }

    const loaddata=async()=>{
        await Marksheetdata(a,checklogin)
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
      <th scope="col">StudentId</th>
      <th scope="col">Dated</th>
      <th scope="col">semester</th>
      <th scope="col">SubjectName</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
        {information.map((data)=>{
            return(
                <>
                <tr>
                <th scope="row">{data.StudentId}</th>
                <td>{data.Dated}</td>
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

export default marksheet
