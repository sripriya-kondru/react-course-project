import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    // let number = 0;

    // let [state, setState] = useState()
    let [number, setNumber] = useState(5)
    let increment = () => {
        number++
        // console.log(number)
        setNumber(number)
    }
    let decrement = () => {
        number--
        // console.log(number)
        setNumber(number)
    }
    return (

        <div>
            <Header />
            <div id="demo" class="carousel slide home-slide" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/images/slider1.jpg" alt="scenary" style={{ width: "100%", height: "400px" }} />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/slider2.jpeg" alt="tree" style={{ width: "100%", height: "400px" }} />
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/slider3.jpg" alt="peacock" style={{ width: "100%", height: "400px" }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <h2 className="h2 accordion mt-3 text-center"> Frequently Asked Questions</h2>
            <div class="accordion mt-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button text-danger fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Html and CSS?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            HTML is the standard markup language for creating web pages and web applications. It is used to structure content on the web, defining elements such as headings, paragraphs, lists, links, images, forms, and more.
                            CSS is a style sheet language used for describing the presentation of a document written in HTML. It separates the structure and content of a web page from its presentation and style.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed text-danger fw-bold .bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How to learn Javascript and jQuery?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            HTML is the standard markup language for creating web pages and web applications. It is used to structure content on the web, defining elements such as headings, paragraphs, lists, links, images, forms, and more.
                            CSS is a style sheet language used for describing the presentation of a document written in HTML. It separates the structure and content of a web page from its presentation and style.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed text-danger fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How many days required to become a full stack developer?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            HTML is the standard markup language for creating web pages and web applications. It is used to structure content on the web, defining elements such as headings, paragraphs, lists, links, images, forms, and more.
                            CSS is a style sheet language used for describing the presentation of a document written in HTML. It separates the structure and content of a web page from its presentation and style.
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="heading mt-3 text-center">Services</h4>
            <h3 className="sub-heading text-primary text-center">What we Offer?</h3>
            <img src="assets/images/icon2.png" alt="icon1" className=" services mx-auto d-block" style={{ width: "50%" }} />
            <div className="container mt-4">
                <div className="card text-center">
                    <div className="card-header">
                        NUMBER COUNTER
                    </div>
                    <div className="card-body">
                        <h2>{number}</h2>
                        <button className="btn btn-danger me-3" onClick={increment}>
                            Increment
                        </button>
                        <button className="btn btn-primary" onClick={decrement}>
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Home;
