import Header from "./Header";
const Contact = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <section className="contact mb-4">

                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" placeholder="Name" name="name" className="form-control mb-4" />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" placeholder="Email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control mb-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" placeholder="Your Message" className="form-control md-textarea mb-4"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fa fa-map-marker fa-2x"></i>
                                    <p>51/42, Kothapeta, Jagadamba Center, Near Ramayalam, Rayachoti,Annamayya District, Andhra Pradesh-515269</p>
                                </li>

                                <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                    <p>+91-9000299706</p>
                                </li>

                                <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                    <p>info@ilandertech.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
export default Contact;
