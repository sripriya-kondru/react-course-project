import React from 'react'

const Course = (props) => {
    console.log(props)

    //props={name"ANgular" , fee:"15000"}
    // props = { name: { name: "Angular" } }
    // let props = { name: { name: "Angular", fee: "20000", duration: "90 days", skills: "HTML, CSS" } }
    let { name } = props //destructuring
    return (
        <>
            <div className="container">
                <div className="card shadow text-white mt-4">
                    <div className="card-body bg-danger">
                        <p>Course Name: {name.name}</p>
                        <p>Course Fee: {name.fee}</p>
                        <p>Course Duration: {name.duration}</p>
                        <p>Course Skills: {name.skills}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course