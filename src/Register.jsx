import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Register = () => {
    let [data, setData] = useState({
        email: "",
        password: "",
        fname: "",
        lname: "",
        phone: ""
    })

    let [msg, setMsg] = useState("")
    let [clr, setClr] = useState({})


    let input1 = (e) => {
        console.log(e)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let register = async (e) => {
        e.preventDefault()
        console.log(data)
        const data1 = new FormData()
        data1.append("email", data.email)
        data1.append("pwd", data.password)
        data1.append("fname", data.fname)
        data1.append("lname", data.lname)
        data1.append("ph", data.phone)
        try {
            const response = await fetch("http://ilandertech.com/api/index.php/Welcome/AddStuRegister", {
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
            } else {
                setClr({ color: "red" })

            }

        } catch (error) {
            console.error('Error during POST request:', error)
        }
    }
    return (
        <div>
            <Header />
            <div className="container h-100">
                <div className="row justify-content-center align-items-center h-100">

                    <div className="register-card shadow-2-strong card-registration" >
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                            <form>

                                <div className="row">
                                    <div className="col-md-6 mb-4">

                                        <div className="form-outline">
                                            <input type="text" name="fname" id="firstName" placeholder="First Name" className="form-control" value={data.fname} onChange={input1} />

                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4">

                                        <div className="form-outline">
                                            <input type="text" name="lname" id="lastName" placeholder="Last Name" className="form-control" value={data.lname} onChange={input1} />

                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    {/* <div className="col-md-6 mb-4">

                                        <h6 className="mb-2 pb-1">Gender: </h6>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                value="option1" checked />
                                            <label className="form-check-label" for="femaleGender">Female</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                value="option2" />
                                            <label className="form-check-label" for="maleGender">Male</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                value="option3" />
                                            <label className="form-check-label" for="otherGender">Other</label>
                                        </div>

                                    </div> */}
                                    <div className="col-md-6 mb-4">

                                        <div className="form-outline">
                                            <input type="Password" name="password" id="pwd" placeholder="Password" className="form-control" value={data.password} onChange={input1} />

                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <input type="Email" name="email" placeholder="Email" id="emailAddress" className="form-control" value={data.email} onChange={input1} />

                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <input type="tel" name="phone" id="phoneNumber" placeholder="Phone Number" className="form-control" value={data.phone} onChange={input1} />

                                        </div>

                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="col-12">
                                        <label className="form-label select-label">Choose option</label> <br></br>
                                        <select className="select">
                                            <option value="1" disabled>Choose option</option>
                                            <option value="2">Subject 1</option>
                                            <option value="3">Subject 2</option>
                                            <option value="4">Subject 3</option>
                                        </select>


                                    </div>
                                </div> */}

                                <div className="mt-4 pt-2">
                                    <input className="btn btn-primary btn-lg" type="register" value="Register" onClick={register} />
                                </div>
                                <p id="err" className="fw-bold" style={clr}>{msg}</p>
                            </form>
                        </div>
                    </div>

                </div>
                <p>Already have an account? <Link to="/login">Login Here</Link></p>
            </div>
        </div >
    );
}
export default Register;