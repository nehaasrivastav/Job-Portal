import React, { useEffect, useState } from 'react'
import addjob from '..//images/addjob.jpg'

export default function AddJob() {
  const [company, setcompany] = useState("")
  const [position, setposition] = useState("")
  const [jobType, setjobType] = useState("")

  useEffect(() => {
    addJob()
  }, [])

  const addJob = () => {
    console.log(company, position, jobType)
    fetch("http://localhost:5000/new-Job", {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          company, position, jobType
        }
      )
    }
    ).then(res => res.json)
      .then(res => {
        console.log(res)
      })
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <img src={addjob} className='img-fluid'></img>
          </div>
          <div className='col-xs-12 col-sm-6'>
            <h2>Hire interns & freshers faster
              Post jobs for free now</h2>
            {/* </div>
        </div> */}
            <form method='POST'>
              <label>Company:
                <input type='text' value={company} onChange={(e) => { setcompany(e.target.value) }} placeholder='Enter company name'></input>
              </label><br />
              <label>Position:
                <input type='text' value={position} onChange={(e) => { setposition(e.target.value) }} placeholder='Enter position'></input>
              </label><br />
              <label>Job Type:
                <input type='text' value={jobType} onChange={(e) => { setjobType(e.target.value) }} placeholder='Enter job type'></input>
              </label><br />
              <button onClick={addJob}>Add Job</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
