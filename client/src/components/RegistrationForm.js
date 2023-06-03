import React, { useEffect, useState } from 'react'
import register from '..//images/register.jpg'
import './style.css'

export default function RegistrationForm() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        handleSubmit()
    }, [])

    const handleSubmit = () => {
        // e.preventDefault();
        console.log(name, email, password)
        // let data = { name, email, password } 
        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })

        }).then(res => res.json())
            .then(res => {
                console.log(res)
            }
            )
        // event.preventDefault();
    }

    return (
        <>
            <section className='register'>
                <div className='container'>
                    {/* <h1 className='text-center'>register</h1> */}
                    <div className='row'>
                        <div className='col-xs-12  col-sm-6'>
                            <img src={register} className='img-fluid' />
                        </div >
                       
                        <div className='col-xs-12  col-sm-6 mt-5 text-center'>
                        <h1 className='text-center'>register</h1>
                        <div className='form h-75'>
                            <form onSubmit={handleSubmit()}>
                                <label >Name: 
                                    <input type='text' value={name} onChange={(e) => { setname(e.target.value) }} placeholder='enter your name' className='input text-white'></input>
                                </label>
                                <br />
                                <label>Email:
                                    <input type='email' value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='enter your email 'className='input'></input>
                                </label>
                                <br />
                                <label>Password:
                                    <input type='text' value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='enter your password' className='input' ></input>
                                </label>
                                <br />
                                <input type='submit'></input>
                            </form >
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

