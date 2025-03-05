import Header from "./Header";
import Course from "./Course";
const Courses = () => {
    let course1 = { name: "Angular", fee: "20000", duration: "90 days", skills: "HTML, CSS" }
    let course2 = { name: "React", fee: "24000", duration: "60 days", skills: "HTML, CSS" }
    let course3 = { name: "Javascrpt", fee: "30000", duration: "120 days", skills: "HTML, CSS" }
    return (

        <div>
            <Header />
            <div className="container">
                <div className="row pt-5 cards-top">
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/html1.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">HTML DEVELOPER</h5>
                                <p className="card-text"><b>Skills :</b> In-depth knowledge of HTML </p>
                                <p className="card-text"><b>Duration :</b> 2 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 10,000/-</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/img1.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">PYTHON DEV</h5>
                                <p className="card-text"><b>Skills :</b> Python Language, Frameworks, Libraries.</p>
                                <p className="card-text"><b>Duration :</b> 5 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 15,000/-</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/img2.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">WEB DEVELOPER</h5>
                                <p className="card-text"><b>Skills :</b> Front-end coding, GIT, RWD, SEO, Unit Testing </p>
                                <p className="card-text"><b>Duration :</b> 3 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 20,000/-</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/img5.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">DATA SCIENTIST</h5>
                                <p className="card-text"><b>Skills :</b> ML, Deep Learning, Visualization, Large Datasets </p>
                                <p className="card-text"><b>Duration :</b> 8 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 60,000/-</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/img4.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">BUSINESS ANALYST</h5>
                                <p className="card-text"><b>Skills :</b> Critical thinking, Problem-solving, Decision-making</p>
                                <p className="card-text"><b>Duration :</b> 6 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 40,000/-</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-lg-4 col-md-4">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img className="card-img-top" src="/assets/images/img3.jpg" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">BACKEND DEVELOPER</h5>
                                <p className="card-text"><b>Skills :</b> DSA, JS, Knowledge of Servers, APIs, PHP </p>
                                <p className="card-text"><b>Duration :</b> 4 Months</p>
                                <a href="/" className="btn btn-danger">FEE : 30,000/-</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <h2 className="heading-text2 text-center">Implementing Props Concept</h2>
            <div className="row">
                <div className="col-sm col-lg-4 col-md-4">
                    <Course name={course1} />
                </div>
                <div className="col-sm col-lg-4 col-md-4">
                    <Course name={course2} />
                </div>
                <div className="col-sm col-lg-4 col-md-4">
                    <Course name={course3} />
                </div>
            </div>
        </div>

    );
}
export default Courses;