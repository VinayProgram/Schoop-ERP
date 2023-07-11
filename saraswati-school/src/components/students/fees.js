import React, { useEffect as UseEffect} from 'react'
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'

const fees = () => {
  const data=Usecontext(actions)
    const {Feesstructure,Feesinf}=data
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null||checklogin==="Error"){
      window.location.href='/login'
    }

    const loaddata=async()=>{
        await Feesstructure(a,checklogin)
        console.log(Feesinf)
      }
  
      UseEffect(()=>{
        loaddata()
      },[])

    return (
    <div>
        {Feesinf.map((data)=>{
            return (<center>
                <div
              className="card card-body dark"
              style={{ width: "25rem", margin: "1cm 12.5cm" , backgroundColor:'lightgreen',borderRadius:'0cm'}}
             >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
                  Student Id<h5 style={{color:'black'}}>{data.StudentId}</h5>
                  </label>
                   </div>
                   <hr></hr>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
                  Total-Fees
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.Totalfees}
                    required
                     />
                   </div>
                  <hr></hr>
                   <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
                  Paid To Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.PaidTodate}
                    required
                  />
                  <hr></hr>
                   </div>
                   <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
                  Remaining
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.Remaining}
                    required
                    style={{paddingLeft:'center'}}
                  />
                   </div>
                
            </div>
        
                </center>)

        })}
    </div>
  )
}

export default fees
