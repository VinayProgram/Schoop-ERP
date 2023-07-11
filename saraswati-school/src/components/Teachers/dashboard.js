import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {savebatch,savebatch1,savestudentid} from '../../redux-manager/action/actions'
const Dashboard = () => {
  let checklogin =sessionStorage.getItem('lock');
  const dispatch=useDispatch()
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=(num)=>{
     if(num===1){
      let batch= document.getElementById('option').value
      dispatch(savebatch(batch)) 
    }
    else if(num===2){
      let batch1= document.getElementById('option2').value
      sessionStorage.setItem("batch1",batch1)
      dispatch(savebatch1(batch1))
    }
    else if(num===3)
    {
      let studentid= document.getElementById('studentid').value 
      dispatch(savestudentid(studentid))
    }
    }

    const createbatch=async()=>{
        let year=document.getElementById("batchcode").value
      var data=await fetch('http://localhost:4500/admin/createnewbatch',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
      body:JSON.stringify({year})})
      let d=await data.text()
      alert(d)
    }

    const details=async()=>{
      var data=await fetch('http://localhost:4500/basic/details',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
      body:JSON.stringify({})})
      let d=await data.json()
      let select=document.getElementById('option')
      let select1=document.getElementById('option2')
      
      d.forEach(element => {
        var optionElement = document.createElement("option");
        optionElement.value = element.Database;
        optionElement.text = element.Database;
        select.appendChild(optionElement)
      });

      d.forEach(element => {
        var optionElement = document.createElement("option");
        optionElement.value = element.Database;
        optionElement.text = element.Database;
        select1.appendChild(optionElement)
      });
    }

    useEffect(()=>{
      details()    
    })
  return (
    <div style={{display:'inline-flex',flexWrap:'wrap',marginLeft:'160px'}}>
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm',backgroundColor:'darkgrey' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://www.pngitem.com/pimgs/m/526-5266889_college-students-clipart-hd-png-download.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{marginLeft:'25px'}}>Create Batch</h3>
          <input type='text' id='batchcode' placeholder="batchcode" style={{border:'0', borderRadius:'1cm'}}></input>
          <button className="btn btn-success"  style={{margin:'30px',borderRadius:'1cm'}} onClick={createbatch}>
           Create Batch
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' ,backgroundColor:'cornflowerblue'}}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://www.voiits.com/wp-content/uploads/2020/10/school-management-software.jpg" className="card-img-top issize" alt="..." />
        <div className="card-body">
        <center>
          <h3 className="card-title">Manage Students</h3>
          <select id="option" onMouseEnter={()=>batch(1)} style={{borderRadius:'1cm'}}>
          </select>
          <Link to="/TotalStudents" className="btn btn-success" style={{borderRadius:'1cm' ,marginTop:'10px'}} onMouseEnter={()=>batch(1)}>
            Manage Students
          </Link>
          </center>
        </div>
      </div> 
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm',backgroundColor:'burlywood'}}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://evalground.com/blog/wp-content/uploads/2017/12/p1.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
        <center>
          <h3 className="card-title">Search Student</h3>
          <select id="option2" onMouseEnter={()=>batch(2)} style={{borderRadius:'1cm'}}>
          </select> 
          <input type="text"  id='studentid' placeholder="Enter Id" style={{borderRadius:'1cm' ,marginTop:'10px'}}  onInput={()=>batch(3)}  ></input>        
          <Link to="/searchstudent" className="btn btn-success" style={{borderRadius:'1cm' ,marginTop:'5px'}} onMouseEnter={()=>{batch(2);batch(3)}}>
            Search Student
          </Link>
          </center>
        </div>
      </div> 
    </div>
  );
};

export default Dashboard;
