import React, { useEffect, useState } from 'react'
import Jobscard from './Jobscard'
import './style.css'

export default function AllJobs() {

  let [apiData, setapiData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/All-Jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setapiData(data.jobs)

      })
  }, [])

  console.log(apiData)

  return (
    <>
      <h2>All Jobs</h2>
      {
        apiData.map((val) => {
          return (
            <>
            <div id='jobs'>
              <div className='d-flex flex-row mt-5 '>
                <Jobscard company={val.company}
                  position={val.position}
                  jobtype={val.jobType}
                  location={val.location}
                  worktype={val.workType}
                />
              </div>
              </div>
            </>
          )
        })
      }

    </>
  )
}
