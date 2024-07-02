import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Login = ({setIsAuthenticated}) => {
    const adminEmail = "admin@example.com";
    const adminPassword = "123456"

    const [email, setEmail] = useState("admin@example.com")
    const [password, setPassword] = useState("123456")
    const handleLogin = e => {
        e.preventDefault();
        if (email === adminEmail && password === adminPassword) {
            Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                willOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    localStorage.setItem('is_Authenticated', true)
                    setIsAuthenticated(true);
                Swal.fire({
                    icon:"success",
                    title:"Succesful Logged In",
                    timer:1500,
                    showConfirmButton:false
                })
                },
            })
        }
        else{
            Swal.fire({
                showConfirmButton:false,
                timer:1500,
            willOpen:()=>{
                Swal.showLoading()
            },
            willClose:()=>{
                Swal.fire({
                    icon:"error",
                    title:"error",
                    text:"Incorrect email or password",
                    timer:1500,
                })
            }
            })
        }
    }

    return (
        <div className='main'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-9 formbgs mx-auto'>
                        <form onSubmit={handleLogin}>
                            <h3 className='text-center'>Admin Login</h3>
                            <div className='d-flex justify-content-center  align-items-center '>
                                <label htmlFor='email'>Email:</label>
                                <input
                                    id='email'
                                    type='email'
                                    value={email}
                                    placeholder='admin@example.com'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='d-flex justify-content-center  align-items-center '>
                                <label htmlFor='password'>Paasword:
                                </label>
                                <input
                                    id='password'
                                    type='password'
                                    placeholder='qwerty'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='but text-center'>
                                <button type='submit' className='px-4 py-2'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
