import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div class="collapse navbar-collapse">
                    <a class="navbar-brand mx-auto" href="#">Home</a>
                    <a class="navbar-brand mx-auto" href="#">About</a>
                    <a class="navbar-brand mx-auto" href="#">Services</a>
                    <a class="navbar-brand mx-auto" href="#">Contact</a>
                </div>
            </nav> */}
            <div>
                <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><h2>ILANDER</h2></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/courses">Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;