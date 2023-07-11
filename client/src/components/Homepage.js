import React from 'react'
import './style.css'
import job from '../images/job.jpg'
import job2 from '../images/job2.jpg'
import job3 from '../images/job3.jpg'
import job4 from '../images/job4.jpg'
import job5 from '../images/job5.jpg'
import twitter from '../images/twitter.png'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'

export default function Homepage() {
  return (
    <>
      <section className='first-box my-5 '>
        <div className='container'>
          <div>
            <div className='row job shadow p-3 mb-5 bg-body rounded '>
              <div className='col-sm-12 col-lg-6 '>
                <h1 className='mt-5'>Find your dream job now</h1>
                <h4 className='mt-4'>5 lakh+ jobs for you to explore</h4>
              </div>
              <div className='col-sm-12 col-lg-6 m-auto text-end '>
                <img src={job} className='img-fluid  h-50 ' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='second-box '>
        <div className='container featured p-3 shadow-sm p-3 mb-5  rounded'>
          <h2 className='text-center  '>Sponsored companies</h2>
          <div>
            <div className='row '>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 col-sm-6 col-lg-4'>
                <div class="card">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='third-box my-5 mt-5'>
        <div className='container '>
          <div className='blue-box shadow p-3 mb-5 bg-body rounded'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-lg-6 ' >
                <img src={job3} className='img-fluid h-75  mt-5 ' />
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-6 ' >
                <h2 className='mt-5'>Discover jobs across popular roles</h2>
                <h4 className='mt-5'>Select a role and we'll show you relevant jobs for it!</h4>
                <button className='m-auto'>Discover</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='footer p-5 text-white'>
        <div className='container-fluid'>
          <div className='row'>
            <div className=' col-xs-6 col-sm-3 '>
              <h6>About us<br /><br />
                We're hiring<br /><br />
                Hire interns for your company</h6>
            </div>
            <div className=' col-xs-6 col-sm-3 '>
              <h6>Team Diary<br /><br />
                Help center<br /><br />
                Summons/Notices<br /><br />
                Grievances<br /><br />
                Report issue<br /><br />
              </h6>
            </div>
            <div className=' col-xs-6 col-sm-3 '>
              <h6>Privacy policy<br /><br />
                Terms & conditions<br /><br />
                Fraud alert<br /><br />
                Trust & safety<br /><br />
              </h6>
            </div>
            <div className=' col-xs-6 col-sm-3 '>
              <h5>Connect with us</h5>
              <div className='row'>
                <div className='col-3'>
                  <img src={twitter}></img>
                </div>
                <div className='col-3'>
                  <img src={insta}></img>
                </div>
                <div className='col-3'>
                  <img src={facebook}></img>
                </div>
                <div className='col-3'>
                  <img src={youtube}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
