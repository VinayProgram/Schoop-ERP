import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div>
      <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
        <div style={{ height: "15cm", width: "6cm" }}>
          <div
            style={{
              height: "15cm",
              width: "6cm",
              backgroundColor: "",
              marginTop: "0cm",
              marginBottom: "1cm",
            }}
          >
            <div
              className="ui vertical menu"
              style={{
                height: "5cm",
                backgroundColor: "yellowgreen",
                marginTop: "0.5cm",
                marginBottom: "0.5cm",
              }}
            >
              <div className="item">
                <div className="header">Students</div>
                <div className="menu">
                <Link to='/dashboard' className="item">Home</Link>
                  <Link to='/TotalStudents' className="item">Show Students</Link>
                  <Link to='/TotalAttendance' className="item">Attendace</Link>
                  <Link to='/TotalMarksheet' className="item">Marksheet</Link>
                  <Link to='/TotalNotices' className="item">Total Notices</Link>
                  <Link to='/TotalFees' className="item">Total Fees</Link>
                </div>
              </div>
              <div
                className="item"
                style={{
                  height: "6.5cm",
                  backgroundColor: "skyblue",
                  marginTop: "0.5cm",
                  marginBottom: "0.5cm",
                }}
              >
                <div className="header"></div>
                <div className="header">ManageStudent</div>
                <div className="menu">
                  <Link to='/CreateStudent' className="item">Create Student / Update </Link>
                  <Link to='/Deletestudent' className="item">Delete Student</Link>
                  <Link to='/PersonalNotice' className="item">Student Personal Notice</Link>
                  <Link to='/ManageFees' className="item">Fees update</Link>
                  <Link to='/CreateFees' className="item">Create Fees</Link>
                  <Link to='/CreateBatchNews' className="item">Create BatchNews</Link>
                  <Link to='/ManageAttendaceTeacher' className="item">Attendace</Link>
                  <Link to='/GiveMarks' className="item">Give Marks</Link>
                   </div>
              </div>
              <div
                className="item"
                style={{
                  height: "2.5cm",
                  backgroundColor: "deepskyblue",
                  marginTop: "0.5cm",
                }}
              >
                <div className="header">Support</div>
                <div className="menu">
                  <a href='/' className="item">E-mail Support</a>
                  <a href='/' className="item">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
