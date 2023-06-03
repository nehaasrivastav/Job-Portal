import React from 'react'
import './style.css'

export default function Jobscard(props) {
  return (
    <>

      <div class="card mb-4 " id='cards'>
        <div class="card-header bg-success">
          {props.company}
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.jobtype}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     
    </>
  )
}
