import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [data, setData] = useState({
        email: '',
        pwd: ''
    })

    const history = useNavigate()
    let [msg, setMsg] = useState("")
    let [clr, setClr] = useState({})

    let changeEmail = (e) => {
        //console.log(e)
        setData({
            ...data,
            email: e.target.value
        })
    }

    let changePwd = (e) => {
        //console.log(e)
        setData({
            ...data,
            pwd: e.target.value
        })
    }

    // let login = (e) => {
    //     e.preventDefault()
    //     console.log(data)
    // }

    let login = async (e) => {
        e.preventDefault()
        console.log(data)
        const data1 = new FormData()
        data1.append("userEmail", data.email)
        data1.append("userPassword", data.pwd)
        try {
            const response = await fetch("http://ilandertech.com/api/index.php/Welcome/StuLogin", {
                method: 'POST',
                body: data1,
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            console.log(responseData);
            setMsg(responseData.message)
            if (responseData.status === 1) {
                setClr({ color: "green" })
                localStorage.setItem("email", data.email)
                setTimeout(() => {
                    history('/dashboard')
                }, 2000)

            } else {
                setClr({ color: "red" })

            }

        } catch (error) {
            console.error('Error during POST request:', error)
        }
    }
    return (
        <>
            <Header />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card login">
                            <div className="card-header">
                                <h1>Login Form</h1>
                            </div>
                            <div className="card-body">
                                <form>

                                    <div className="my-3">
                                        <label>Email:</label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" value={data.email} onChange={changeEmail} />
                                    </div>

                                    <div className="mb-3">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" name="password" placeholder="Enter password" value={data.pwd} onChange={changePwd} />
                                    </div>

                                    <button type="submit" className="btn btn-primary" id="btn" onClick={login}>Login</button>
                                    <p id="err" className="fw-bold" style={clr}>{msg}</p>
                                </form>
                                <p>If You Dont Have an account <Link to="/register">Register Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
