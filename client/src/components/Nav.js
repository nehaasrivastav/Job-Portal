import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      {/* <h1>job Portal</h1> */}
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Job Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse text-center  justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink className="nav-link active mx-3" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link active mx-3" aria-current="page" to="Jobs">Jobs</NavLink>
        <NavLink className="nav-link active mx-5" aria-current="page" to="Login">Login</NavLink>
        <NavLink className="nav-link active mx-3" aria-current="page" to="register">Register</NavLink>
        <NavLink className="nav-link active mx-3" aria-current="page" to="new-job">Add Job</NavLink>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}
