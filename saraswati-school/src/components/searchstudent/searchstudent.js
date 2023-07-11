import React, { useEffect as UseEffect, useState as UseState } from "react";
import { useSelector as UseSelector } from "react-redux";
import { Link } from "react-router-dom";
const searchStudent = () => {
  const [student, setStudent] = UseState(["0", "2"]);
  const [type, settype] = UseState("showstudent");
  let checklogin = sessionStorage.getItem("lock");
  if (checklogin === null) {
    window.location.href = "/TeacherLogin";
  }
  const batch = sessionStorage.getItem("batch1");
  const id = UseSelector((id) => id.id);
  const details = async () => {
    var data = await fetch("http://localhost:4500/basic/Studentsdetails", {
      method: "POST",
      headers: { "Content-Type": "application/json", SVML: checklogin },
      body: JSON.stringify({ type, batch, id }),
    });
    let d = await data.json();
    setStudent(d);
    console.log(d);
  };

  UseEffect(() => {
    details();
  }, [type]);

  const display = (data) => {
    let count=0
    if (type === "attendace") {
      return (
        <center>
          <table className="table my-4" style={{ width: "40rem" }}>
            <thead></thead>
            <tbody>
              <tr>
                <th scope="row">{data.StudentId}</th>
                <td>{data.AttendanceDate}</td>
                <td>{data.present}</td>
              </tr>
            </tbody>
          </table>
        </center>
      );
    } else if (type === "showstudent") {
      return (
        <center>
          <div
            className="card card-body dark"
            style={{
              width: "20rem",
              margin: "1cm 12.5cm",
              backgroundColor: "skyblue",
              borderRadius: "1cm",
            }}
          >
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Student Id<h5 style={{ color: "black" }}>{data.Studentid}</h5>
              </label>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                value={data.FullName}
                required
                style={{ paddingLeft: "1.5cm" }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Passcode
              </label>
              <input
                type="text"
                className="form-control"
                value={data.password}
                style={{ paddingLeft: "2.6cm" }}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                value={data.Address}
                required
                style={{ paddingLeft: "center" }}
              />
            </div>
          </div>
        </center>
      );
    } else if (type === "fees") {
      return (
        <center>
          <div
            className="card card-body dark"
            style={{
              width: "25rem",
              margin: "1cm 12.5cm",
              backgroundColor: "lightgreen",
              borderRadius: "0cm",
            }}
          >
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Student Id<h5 style={{ color: "black" }}>{data.StudentId}</h5>
              </label>
            </div>
            <hr></hr>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
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
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
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
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Remaining
              </label>
              <input
                type="text"
                className="form-control"
                value={data.Remaining}
                required
                style={{ paddingLeft: "center" }}
              />
            </div>
          </div>
        </center>
      );
    } else if (type ==="marksheet") {
      return (
        <div>
          <center>
            <table className="table my-4" style={{ width: "40rem" }}>
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
                <tr>
                  <th scope="row">{data.StudentId}</th>
                  <td>{data.Dated}</td>
                  <td>{data.semester}</td>
                  <td>{data.SubjectName}</td>
                  <td>{data.Marks}</td>
                </tr>
              </tbody>{" "}
            </table>
          </center>
        </div>
      );
    }
    else if(type==='notice'){
      return(
        <div>
        <center>
        <table className="table my-4" style={{width:'40rem',}}>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
  <tr>
                <th scope="row">{count++}</th>
                <td>{data.Message}</td>
                </tr>
                </tbody></table></center></div>
      )
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "darkgoldenrod", width: "50cm" }}>
        <div style={{ display: "inline-flex", marginLeft: "11cm" }}>
        <Link to='/dashboard' className="item" style={{
              backgroundColor: "darkgoldenrod",
              width: "2cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}>Home</Link>
          <button
            style={{
              backgroundColor: "darkgoldenrod",
              width: "2cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}
            onClick={() => settype("showstudent")}
          >
            Profile
          </button>
          <button
            style={{
              backgroundColor: "darkgoldenrod",
              width: "2.5cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}
            onClick={() => settype("attendace")}
          >
            Attendance
          </button>
          <button
            style={{
              backgroundColor: "darkgoldenrod",
              width: "2cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}
            onClick={() => settype("marksheet")}
          >
            Marksheet
          </button>
          <button
            style={{
              backgroundColor: "darkgoldenrod",
              width: "2cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}
            onClick={() => settype("notice")}
          >
            Notice
          </button>
          <button
            style={{
              backgroundColor: "darkgoldenrod",
              width: "2cm",
              border: "0",
              color: "whitesmoke",
              padding: "10px",
            }}
            onClick={() => settype("fees")}
          >
            Fees
          </button>
        </div>
      </div>
      <div>
        {student.map((info) => {
          return display(info);
        })}
      </div>
    </>
  );
};

export default searchStudent;
