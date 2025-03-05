import Header from "./Header";

const About = () => {
    let name = "Declaring Variables, Arrays, Objects" //declaring let 
    let courses = ["React", "Angular", "javascript", "node"] //using array
    let course1 = { name: "React", duration: "90 days", fee: "20,000" } //objects

    return (

        <div>
            <Header />

            <div className="container">
                <div className="row about-us">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="content-box">
                            <p>iLander training and consultancy services is trusted and a Leading Training and consultancy Company in Andhra Pradesh, India. Specializing in empowering individuals and organizations to reach their maximum potential. With a team of high skilled professionals, we offer comprehensive training programs and expert consultancy services to help our clients thrive in today’s dynamic and competitive business and technological landscape.</p>
                            <p>For the skilled manpower in high-end technology courses like UI Design and Development, PHP, Angular, React JS, JAVA, SQL, Photoshop, web designing and digital marketing courses that are ideal for both learners and professionals in the workforce. iLander mainly focuses on imparting quality training in marketing. Our goal is to provide high-quality, practical oriented education with on-the-job training. With our industry focused training programs , we empower individual and organizations to develop their technical skills in the rapidly evolving world of software engineering.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="img-box">
                            <img src="assets/images/about.jpg" alt="" className="img-fluid" style={{ height: "400px;" }}></img>
                        </div>
                    </div>
                </div>
                <h4 className="heading mt-3">WHY FOUNDED</h4>
                <h3 className="sub-heading text-primary">Mission and Vision</h3>
                <p>Our mission is to empower and inspire students, professionals, and organizations to reach their full potential through comprehensive training and consultancy services. We are committed to equipping individuals and entities with the necessary skills, knowledge, and resources to excel in their respective fields. By fostering a culture of continuous learning and innovation, we aim to create a positive impact on the academic and professional development of our clients.</p>
                <p>Our vision is to be the leading training and consultancy company nationally and globally, renowned for our transformative impact on individuals and organizations. We envision a future where our expertise and insights empower professionals to surpass their limitations, enhance their capabilities, and become industry leaders. we aim to shape the future of training and consultancy, making a lasting and positive contribution to the success and growth of our clients worldwide.</p>
                <div className="row bg-primary mb-3">
                    <div className="col-lg-7 col-sm-12 col-12">
                        <h2 className="heading mt-3 text-white">What are you waiting for?</h2>
                        <h4 className="sub-heading text-white">ILANDER TRAINING AND CONSULTENCY SERVICES.</h4>
                    </div>
                    <div className="col-lg-5 text-md-right col-sm-12 col-12 text-center mt-4">
                        <a href="#" className="about-btn btn btn-primary btn-white">
                            Enroll Now
                        </a>
                    </div>
                </div>
                <hr />
                <h2>{name}</h2>
                <p>In this class, we will talk about {courses[0]} and {courses[3]}</p>
                <h4>Our Course details are as follows: </h4>
                <p>Name: {course1.name} </p>
                <p>Duration: {course1.duration} </p>
                <p>Fee: {course1.fee} </p>

            </div>
        </div>
    );
}
export default About;