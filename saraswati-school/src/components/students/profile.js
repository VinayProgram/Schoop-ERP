import { Link } from "react-router-dom";

const profile = () => {
  let checklogin =localStorage.getItem("damlasadsakmsoa");
    if(checklogin===null){
      window.location.href='/login'
    }
    
  return (
    <div style={{display:'inline-flex',flexWrap:'wrap',marginLeft:'2cm'}}>
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{marginLeft:'25px'}}>Student details</h3>
          <Link to="/student-details" className="btn btn-success" style={{marginLeft:'25px',borderRadius:'1cm'}} >
            Student Details
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/fees-paid-icon.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
        <center>
          <h3 className="card-title">Fees details</h3>
          <Link to="/Fees" className="btn btn-success" style={{borderRadius:'1cm'}} >
            Fees Details
          </Link>
          </center>
        </div>
      </div> 
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'4cm',width:'4cm',margin:"0cm 0cm 0cm 0.7cm"}} src="https://t4.ftcdn.net/jpg/05/03/24/53/360_F_503245337_SOBZipgPlrvEsxTZ1Fgpp6dyoBlTDlTF.jpg" className="card-img-top issize" alt="..." />
        <div className="card-body">
        <center>
          <h3 className="card-title">Marks Sheet</h3>
          <Link to="/marksheet" className="btn btn-danger" style={{borderRadius:'1cm'}} >
            Marks Sheet
          </Link>
          </center>
        </div>
      </div> 
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://cdn.onlinewebfonts.com/svg/img_301815.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{marginLeft:'25px'}}>Attendance</h3>
          <center>
          <Link to="/Attendance" className="btn btn-success" style={{borderRadius:'1cm'}} >
            Attendance
          </Link>
          </center>
        </div>
      </div> 
      
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://cdn.onlinewebfonts.com/svg/img_489720.png" className="card-img-top issize" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{marginLeft:'25px'}}>Notice</h3>
          <center>
          <Link to="/Notice" className="btn btn-success" style={{borderRadius:'1cm'}} >
            Notice
          </Link>
          </center>
        </div>
      </div> 
    
      <div className="card" style={{ width: "15rem",borderRadius:'1cm',margin:'1cm' }}>
        <img style={{height:'3cm',width:'3cm',margin:"1cm 0cm 0cm 1.2cm"}} src="https://th.bing.com/th/id/OIP.ViccGOJ5Niijfzr_9n73MgHaFO?pid=ImgDet&rs=1" className="card-img-top issize" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{marginLeft:'25px'}}>Student details</h3>
          <center>
          <Link to="/StudentPersonalNotice" className="btn btn-success" style={{borderRadius:'1cm'}} >
            Student Personal Notice
          </Link>
          </center>
        </div>
      </div> 
    
    </div>

    
  );
};

export default profile;
