
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux';
const CreateStudent = () => {
  
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=useSelector((data)=>data.data)
    
    const details=async()=>{
        console.log(batch)
        let id=document.getElementById('studentID').value
        let name=document.getElementById('fullName').value
        let add=document.getElementById('address').value
        let pass=document.getElementById('password').value
        let join=document.getElementById('joiningDate').value
        let type='insert'
        var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,id,name,add,pass,join})})
        let d=await data.text()
        if(d==='done'){alert('Student Created')}else{alert('student Not created')}
        console.log(d)
        }

        const update=async()=>{
          let Studentid=document.getElementById('studentID').value
        let FullName=document.getElementById('fullName').value
        let  Address=document.getElementById('address').value
        let password=document.getElementById('password').value
        let joining_date=document.getElementById('joiningDate').value
        let type='update'
        var data=await fetch('http://localhost:4500/admin/managestudent',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch,Studentid,FullName,Address,password,joining_date})
      })
        let d=await data.text()
        if(d==='done'){alert('Student updated')}else{alert('error')}
        console.log(d)
        }

   


    return (
    <div style={{display:'inline-flex',flexWrap:'wrap'}}>
        <Sidebar/>
        <center>
        <div style={{ width: '400px', margin: '50px auto',marginLeft:'6cm', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center' }}>Student Registration Form {batch}</h2>
        <label htmlFor="studentID" style={{ display: 'block', marginBottom: '10px' }}>Student ID:</label>
        <input
          type="text"
          id="studentID"
          name="studentID"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          placeholder='if update use same id / Create new id for new entry'
          required
        />

        <label htmlFor="fullName" style={{ display: 'block', marginBottom: '10px' }}>Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />

        <label htmlFor="address" style={{ display: 'block', marginBottom: '10px' }}>Address:</label>
        <textarea
          id="address"
          name="address"
          rows="4"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        ></textarea>

        <label htmlFor="password" style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />

        <label htmlFor="joiningDate" style={{ display: 'block', marginBottom: '10px' }}>Joining Date:</label>
        <input
          type="date"
          id="joiningDate"
          name="joiningDate"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />
        <button onClick={details} className='btn btn-success'>Submit</button>
        <button onClick={update} style={{margin:'10px'}} className='btn btn-danger'>update</button>
        
        </div>
        </center>
        </div>


  )
}

export default CreateStudent
