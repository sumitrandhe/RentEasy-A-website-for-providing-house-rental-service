import React, { Component } from "react";
import { saveHome } from "../../service/homeService";
import jwtDecode from "jwt-decode";

import "./posthome.css";

class PostYourHome extends Component {
  state = {
    category: "",
    image1: "",
    image2: "",
    type: "",
    city: "",
    fullAddress: "",
    district: "",
    preferredTenant: "",
    deposite: "",
    rent: "",
    builtup: "",
    furnishing: "",
  };

  handleCategoryInput(category) {
    this.setState({ category });
  }
  handleTypeInput(type) {
    this.setState({ type });
  }

  handleCityInput(city) {
    this.setState({ city });
  }
  handleAddressInput(fullAddress) {
    this.setState({ fullAddress });
  }
  handleDistrictInput(district) {
    this.setState({ district });
  }
  handlePreferredTenantInput(preferredTenant) {
    this.setState({ preferredTenant });
  }
  handleDepositeInput(deposite) {
    this.setState({ deposite });
  }
  handleRentInput(rent) {
    this.setState({ rent });
  }
  handleBuiltupInput(builtup) {
    this.setState({ builtup });
  }
  handleFurnishingInput(furnishing) {
    this.setState({ furnishing });
  }

  async handleImage1(image) {
    const base64 = await this.converBase64(image);
    const image1 = base64;
    this.setState({ image1 });
  }
  async handleImage2(image) {
    const base64 = await this.converBase64(image);
    const image2 = base64;
    this.setState({ image2 });
  }

  converBase64(file) {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => res(fileReader.result);

      fileReader.onerror = (error) => rej(error);
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let token = localStorage.getItem("token");
    const user = jwtDecode(token);
    const home = await saveHome(user.id, this.state);
    console.log(home);
    window.location = "/";
  }

  render() {
    return (
      <div className="post-vehicle">
        <div className="container-fluid px-1 py-5 mx-auto">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="post-home-img">
                <h1>Post Your Home</h1>
              </div>

              <div className="card">
                <form
                  className="form-card"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        House Categoty<span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select mt-3 font-weight-light "
                        id="home-category"
                        onChange={(e) =>
                          this.handleCategoryInput(e.target.value)
                        }
                        required
                      >
                        <option selected disabled value="">
                          Select house category
                        </option>
                        <option value="Independent House">
                          Independent House
                        </option>
                        <option value="Apartment">Apartment</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        City<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        value={this.state.city}
                        placeholder="Enter your city"
                        onChange={(e) => this.handleCityInput(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        District<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        value={this.state.district}
                        placeholder="Enter your district"
                        onChange={(e) =>
                          this.handleDistrictInput(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Full Address<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        value={this.state.address}
                        placeholder="Enter your full address"
                        onChange={(e) =>
                          this.handleAddressInput(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Type(BHK)<span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select mt-3 font-weight-light "
                        id="home-category"
                        onChange={(e) => this.handleTypeInput(e.target.value)}
                        required
                      >
                        <option selected disabled value="">
                          Select house type
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>4+</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Preferred Tenant<span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select mt-3 font-weight-light "
                        id="home-category"
                        onChange={(e) =>
                          this.handlePreferredTenantInput(e.target.value)
                        }
                        required
                      >
                        <option selected disabled>
                          Select preferred tenant
                        </option>
                        <option value="All">All</option>
                        <option value="Family">Family</option>
                        <option value="Bachelors">Bachelors</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Furnishing<span className="text-danger"> *</span>
                      </label>
                      <select
                        className="form-select mt-3 font-weight-light "
                        id="home-category"
                        onChange={(e) =>
                          this.handleFurnishingInput(e.target.value)
                        }
                        required
                      >
                        <option selected disabled value="">
                          Select furnishing
                        </option>
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Semi Furnished">Semi Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Builtup Area(Sqft)
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        value={this.state.builtup}
                        placeholder="Enter builtup Area"
                        onChange={(e) =>
                          this.handleBuiltupInput(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Deposite<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        value={this.state.deposite}
                        placeholder="Enter deposite amount"
                        onChange={(e) =>
                          this.handleDepositeInput(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Rent<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        value={this.state.rent}
                        id="aadhar"
                        name="aadhar"
                        placeholder="Enter rent"
                        onChange={(e) => this.handleRentInput(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row justify-content-between text-left mt-4 mb-4">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <div className="d-flex justify-content-center">
                        <div className="btn btn-primary btn-rounded">
                          <label
                            className="form-label text-black fs-4 m-1"
                            htmlFor="customFile1"
                          >
                            Home Image 1
                          </label>
                          <input
                            type="file"
                            className="form-control "
                            id="customFile1"
                            onChange={(e) =>
                              this.handleImage1(e.target.files[0])
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <div className="d-flex justify-content-center">
                        <div className="btn btn-primary btn-rounded">
                          <label
                            className="form-label text-black fs-4 m-1"
                            htmlFor="customFile1"
                          >
                            Home Image 2
                          </label>
                          <input
                            type="file"
                            className="form-control "
                            id="customFile1"
                            onChange={(e) =>
                              this.handleImage2(e.target.files[0])
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
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

export default PostYourHome;
