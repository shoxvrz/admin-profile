import React, { useState  } from "react";
import "./Landing.scss";
import { Link, Outlet } from "react-router-dom";


function Landing() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  const outHandler = () => {
   localStorage.removeItem("user");
   alert('success logout');
   window.location.reload()
  }

  const  token = JSON.parse(localStorage.getItem('user')) 

  return (
    <div className="landing">
      <div className="landing__navbar">
        {modal && (
          <div className="landing__navbar-profModal">
            <Link to={"/admin"}>Admin Page</Link>
            <Link to={"/profile"}>Profile Page</Link>
          </div>
        )}
        <h3 className="landing__navbar-logo">Logo</h3>
        <div className="landing__navbar-features">
          <Link to={"/home"}>
            Home
          </Link>
          <Link to={"/about"}>
            About
          </Link>
          <Link to={"/contact"}>
            Contact
          </Link>
        </div>
        <div className="landing__navbar-login">
         {token ? <Link onClick={outHandler}> Log Out</Link> : <Link to={"/login"}>
            Login
          </Link>} 
          
          <Link to={"/register"}>
            Register
          </Link>
        </div>
        <div className="landing__navbar-profile">
          <button onClick={modalHandler} className="profile">
            Pro
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Landing;
