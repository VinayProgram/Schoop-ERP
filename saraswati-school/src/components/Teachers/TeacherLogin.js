import { Link } from "react-router-dom";

const TeacherLogin = () => {
      const login=async()=>{
        let id=document.getElementById('id').value
        let password=document.getElementById('Password').value
        if(id===''&password===''){alert('Please enter correct details')}
        else{var data=await fetch('http://localhost:4500/register/login',{method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,password})})
            let d=await data.text()
            if(d==='Error'){alert('Please check login credentials')}
            else{
            sessionStorage.setItem("lock",d)
            window.location.href='/dashboard'
            }
        }}

    return (
      <div
        className="card card-body"
        style={{ width: "20rem", margin: "1cm 12.5cm"}}
      >        
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Teacher Id
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
          <Link type="submit" className="btn btn-success" onClick={login}>Login</Link>
      </div>
    );
  };
  
  export default TeacherLogin;
  