import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../service/authService";
import "./login.css";
import { toast } from "react-toastify";

class Login extends Component {
  state = { email: "", password: "" };

  handleEmailInput = (email) => {
    this.setState({ email });
  };
  handlePasswordInput = (password) => {
    this.setState({ password });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const { data: jwt } = await login(email, password);
      localStorage.setItem("token", jwt.token);
      this.props.history.push("/");
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        toast.error("Wrong Credentials");
    }
  };

  render() {
    return (
      <section className="login-form">
        <div className="container">
          <div className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Phone image"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form onSubmit={this.handleSubmit}>
                    {/* <!-- Email input --> */}
                    <h2 className="heading text-secondary text-center mb-4 ">
                      Login Form
                    </h2>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={(e) => this.handleEmailInput(e.target.value)}
                      />
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          this.handlePasswordInput(e.target.value)
                        }
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    {/* <div className="d-flex justify-content-around align-items-center mb-4">
                      <!-- Checkbox -->
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <Link href="#!">Forgot password?</Link>
                    </div> */}
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block fs-2 "
                    >
                      Log in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        OR
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-cente gap-4 ">
                      <Link
                        className="btn btn-primary btn-lg btn-block"
                        style={{ backgroundColor: "#FF033E" }}
                        to="/signup"
                      >
                        Create NEW ACCOUNT
                      </Link>
                      <Link
                        className="btn btn-primary btn-lg btn-block"
                        style={{ backgroundColor: "#3b5998" }}
                        to="#"
                      >
                        <i className="fab fa-facebook-f me-2"></i>Continue with
                        Facebook
                      </Link>
                      <Link
                        className="btn btn-primary btn-lg btn-block"
                        style={{ backgroundColor: "#55acee" }}
                        to="#"
                      >
                        <i className="fab fa-twitter me-2"></i>Continue with
                        Twitter
                      </Link>
                      <Link
                        className="btn btn-primary btn-lg btn-block"
                        style={{ backgroundColor: "#55acee" }}
                        to="#"
                      >
                        <i className="fab fa-google me-2"></i>Continue with
                        Gmail
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
