import Header from "./Header";
const Admin = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <form className="admin-form">
                    <div className="form-outline mb-4 mt-5">
                        <h2>Admin form</h2>
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mb-4 ms-auto">Sign in</button>
                    <div className="text-center">
                        <p>Not a member? <a href="/Register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;