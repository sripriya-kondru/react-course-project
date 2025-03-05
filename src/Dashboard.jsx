import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    let history = useNavigate()
    let email = localStorage.getItem('email')
    const [data, setData] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('email')) {
            history('/login')
        }
        const fetchData = async () => {
            try {
                const response = await axios.get('http://ilandertech.com/api/index.php/Welcome/getStuUsers');
                console.log(response.data.data)

                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [history])

    const logout = () => {
        history('/login')
        localStorage.clear()
    }
    return (
        <div className='container table-responsive'>
            <h1>Hi, {email}</h1>
            <button class="btn btn-danger" onClick={logout} >Logout</button>
            <h1>User Data</h1>
            <table className='table table-bordered table-hover table-dark'>
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>FNAME</th>
                        <th>LNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>

                {data ? (
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.user_id}>
                                <td>{index + 1}</td>
                                <td>{item.user_fname}</td>
                                <td>{item.user_lname}</td>
                                <td>{item.user_email}</td>
                                <td>{item.user_phone}</td>
                                <td>{item.user_password}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <p>Loading...</p>
                )}
            </table>
        </div>
    )
}

export default Dashboard