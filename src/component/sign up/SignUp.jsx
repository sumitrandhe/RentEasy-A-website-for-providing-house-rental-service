import React, { Component } from "react";
import { register } from "../../service/agentServices";
import { toast } from "react-toastify";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    aadhar: "",
    checkbox: false,
  };

  handleFirstName = (firstName) => {
    this.setState({ firstName });
  };

  handleLasttName = (lastName) => {
    this.setState({ lastName });
  };

  handleEmail = (email) => {
    this.setState({ email });
  };
  handleAadhar = (aadhar) => {
    this.setState({ aadhar });
  };
  handleNumber = (number) => {
    this.setState({ number });
  };

  handlePassword = (password) => {
    this.setState({ password });
  };

  handleCheckbox = (checkbox) => {
    this.setState({ checkbox });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password, number, aadhar } = this.state;
    const agent = {
      firstName,
      lastName,
      email,
      password,
      number,
      aadhar,
    };

    console.log(agent);

    try {
      let response = await register(agent);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      this.props.history.push("/");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data);
    }
  };

  render() {
    const { firstName, lastName, email, password, checkbox, number, aadhar } =
      this.state;
    return (
      <section className="vh-90 fs-3" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={this.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="form-control"
                              value={firstName}
                              onChange={(e) =>
                                this.handleFirstName(e.target.value)
                              }
                              required
                            />
                            <label className="form-label" htmlFor="firstName">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="form-control"
                              value={lastName}
                              onChange={(e) =>
                                this.handleLasttName(e.target.value)
                              }
                              required
                            />
                            <label className="form-label" htmlFor="lastName">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              required
                              value={email}
                              onChange={(e) => this.handleEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="number"
                              name="number"
                              className="form-control"
                              required
                              value={number}
                              onChange={(e) =>
                                this.handleNumber(e.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="number">
                              Your Number
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-id-badge fa-lg me-3 fa-fw"></i>{" "}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              className="form-control"
                              required
                              value={aadhar}
                              onChange={(e) =>
                                this.handleAadhar(e.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="number">
                              Your Aadhar
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              required
                              value={password}
                              onChange={(e) =>
                                this.handlePassword(e.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            checked={checkbox}
                            id="checkbox"
                            required
                            onChange={() => this.handleCheckbox(!checkbox)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg fs-3"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
