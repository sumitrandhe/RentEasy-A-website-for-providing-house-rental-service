import React, { Component, createRef } from "react";

import "./postYourVehicle.css";
import postVehicle from "../../images/postVehicle.jpg";

class PostYourVehicle extends Component {
  state = {};
  render() {
    return (
      <div className="post-vehicle">
        <div className="container-fluid px-1 py-5 mx-auto">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="post-vehicle-img">
                <h1>Post Your Vehicle</h1>
              </div>

              <div className="card">
                <form className="form-card" onsubmit="event.preventDefault()">
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        First name<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter your first name"
                        onblur="validate(1)"
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Last name<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Enter your last name"
                        onblur="validate(2)"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Email<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onblur="validate(3)"
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Phone number<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="mob"
                        name="mob"
                        placeholder="Enter your phone number"
                        onblur="validate(4)"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Aadhaar Number<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        id="fname"
                        name="fname"
                        placeholder="Enter your aadhaar number"
                        onblur="validate(1)"
                      />
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Driving Licence<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="mob"
                        name="mob"
                        placeholder="Enter your phone number"
                        onblur="validate(4)"
                      />
                    </div>
                  </div>

                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Vehicle Categoty<span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select mt-3 font-weight-light "
                        id="vehicle"
                        required
                      >
                        <option selected disabled value="">
                          Select vehicle category
                        </option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                      </select>

                      <div className="valid-feedback">
                        You selected a position!
                      </div>
                      <div className="invalid-feedback">
                        Please select a position!
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="form-group col-sm-6">
                      <button type="submit" className="btn-block btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostYourVehicle;
