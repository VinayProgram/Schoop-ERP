import React from "react";
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'
import { Link } from "react-router-dom";
const login = () => {
  const data=Usecontext(actions)
  const {loginfeed}=data
  const logincheck=async()=>{
    let a=document.getElementById('Batch').value
    let b=document.getElementById('id').value
    let c=document.getElementById('Password').value
    let final=await loginfeed(a,b,c)
    if(final==='Error'){alert('please enter correct details')}
    else{
      sessionStorage.setItem('batch',a)
      localStorage.setItem('damlasadsakmsoa',final)
      window.location.href='/profile'
    }
  }

  return (
    <div
      className="card card-body"
      style={{ width: "20rem", margin: "1cm 12.5cm"}}
    >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
        Batch Code
          </label>
          <input
            type="text"
            className="form-control"
            id="Batch"
            aria-describedby="emailHelp"
            required
          />
           </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Student id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Id with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <Link type="submit" className="btn btn-success" onClick={logincheck}>Login</Link>
    </div>
  );
};

export default login;
