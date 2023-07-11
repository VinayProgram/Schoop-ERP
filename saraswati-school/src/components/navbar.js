import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{backgroundColor:"orange"}}>
      <div style={{backgroundColor:"orange"}}>
      <div className="ui secondary  menu" >
  <a href='/' className="active item" >
    Home
  </a>
  <a href='/' className="item">
    Call us-7666949043
  </a>
  <Link to='login' className="item">
    Login
  </Link>
  <a href='/' className="item">
  </a>
  <a href='/' className="item" style={{marginLeft:"3cm"}}>
  <h1 style={{backgroundColor:"orange"}}>Saraswati Vidya Mandir</h1>
  </a>
  <div className="right menu">
    <div className="item">
      <div className="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search link icon"></i>
      </div>
    </div>
    <a href='/' className="ui item" onClick={()=>{localStorage.clear();sessionStorage.clear()}}>
      Logout
    </a>
  </div>
</div>
</div>

    </div>
  )
}

export default Navbar
