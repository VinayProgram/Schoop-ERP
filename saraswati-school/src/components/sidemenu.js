import React from "react";
import { useContext as Usecontext } from "react";
import Application from "../Context/Application";
const sidemenu = () => {
  const app=Usecontext(Application)
  const {sales}=app
  let images = [
    "https://s3.envato.com/files/318310623/Preview%20Image%20Set/15.jpg",
    "https://s3.envato.com/files/318310623/Preview%20Image%20Set/15.jpg",
    "https://assets.visme.co/templates/banners/thumbnails/i_Kids-Back-to-School-Fun-Day-Facebook-Cover_full.jpg",
    "https://th.bing.com/th/id/R.2f2998be0adcc38ad741337e398bb149?rik=u9ibHyPu9kbkTQ&riu=http%3a%2f%2fgovcupmt.com%2fwp-content%2fuploads%2f2018%2f08%2fGovernors-Cup-Kids-Marathon-Photo.jpg&ehk=6mnaVHZAkI0S7mogynxhDXdXuYcZx8cUNnQ1Gybaj04%3d&risl=&pid=ImgRaw&r=0",
    "https://static.honeykidsasia.com/wp-content/uploads/2021/03/Stamford-American-School-Early-Learning-Center-900x643.jpg",
    "https://images.ctfassets.net/9l3tjzgyn9gr/2pevrh3C0IzEblBsDIBSuo/4ddb92692c9ac5f2f08530f25cd246f0/kids-science-project-featured.jpg?fm=jpg&fl=progressive&q=50&w=1200",
  ];
  let num = 1;
  const imageback = () => {
    let img = document.getElementById("imgagechange");
    if (num === 0) {
      num = 5;
    }
    num--;
    img.src = images[num];
  };
  const imagefor = () => {
    let img = document.getElementById("imgagechange");
    if (num === 5) {
      num = 0;
    }
    num++;
    img.src = images[num];
  };

  const submitform=()=>{
    let name=document.getElementById('name').value
    let contact=document.getElementById('contact').value
    let number=document.getElementById('email').value
    let reason=document.getElementById('reason').value
    sales(name,contact,number,reason)
    alert('Thankyou for reaching us '+name)
  }



  return (
    <>
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
                height: "3cm",
                backgroundColor: "orange",
                marginTop: "0.5cm",
                marginBottom: "0.5cm",
              }}
            >
              <div className="item">
                <div className="header">What we do</div>
                <div className="menu">
                  <a href='/' className="item">Education</a>
                  <a href='/' className="item">Sports</a>
                  <a href='/' className="item">science</a>
                </div>
              </div>
              <div
                className="item"
                style={{
                  height: "3cm",
                  backgroundColor: "orange",
                  marginTop: "0.5cm",
                  marginBottom: "0.5cm",
                }}
              >
                <div className="header">Our Enviroment</div>
                <div className="menu">
                  <a href='/' className="item">One Family</a>
                  <a href='/' className="item">Teachers as parents</a>
                  <a href='/' className="item">Students as future</a>
                </div>
              </div>
              <div
                className="item"
                style={{
                  height: "2.5cm",
                  backgroundColor: "orange",
                  marginTop: "0cm",
                }}
              >
                <div className="header">Awards</div>
                <div className="menu">
                  <a href='/' className="item">Global School</a>
                  <a href='/' className="item">Guru Mandir</a>
                </div>
              </div>
              <div
                className="item"
                style={{
                  height: "2.5cm",
                  backgroundColor: "orange",
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

        <div className="imageshow" style={{ marginLeft: "0.5cm" }}>
          <div
            style={{
              marginLeft: "0.5cm",
              display: "inline-flex",
              flexWrap: "wrap",
            }}
          >
            <i
              className="search link icon"
              style={{ marginLeft: "0cm", marginTop: "4cm" }}
              onClick={imageback}
            ></i>
            <div
              style={{ marginLeft: "0", marginTop: "0.5cm", marginRight: "0" }}
            >
              <img
                src="https://s3.envato.com/files/318310623/Preview%20Image%20Set/15.jpg"
                width="900"
                height="300"
                alt="Check internet"
                id="imgagechange"
              />
            </div>
            <i
              className="search link icon"
              style={{
                marginLeft: "0cm",
                marginTop: "4cm",
                marginRight: "0cm",
              }}
              onClick={imagefor}
            ></i>
          </div>
          <h1 style={{ paddingLeft: "10cm" }}>Contact Us</h1>
          <div>
            <form>
              <div className="ui form">
                <div className="two fields">
                  <div className="field">
                    <label>First Name</label>
                    <input placeholder="Enter name" type="text" id="name" />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input placeholder="Contact number" type="text"  id="contact" />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input placeholder="email" type="email" id="email" />
                  </div>
                  <div className="field">
                    <label>Reason</label>
                    <input placeholder="Reason" type="text" id="reason"/>
                  </div>
                </div>
                <input placeholder="Reason" type="submit" onClick={submitform} style={{borderRadius:'0.5cm',height:'1cm',width:'4cm',backgroundColor:'orange',marginLeft:'10cm'}} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidemenu;
