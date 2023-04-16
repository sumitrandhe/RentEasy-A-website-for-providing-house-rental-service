import React, { Component } from "react";
import "./homes.css";
import HomeFilter from "./../home-filter/HomeFilter";
import HomeCard from "../home-card/HomeCard";
import sad from "../../images/sad.gif";
import { getHomes } from "../../service/homeService";
// import getHomes from "./../../service/getFakeHomes";

class Homes extends Component {
  state = {
    homes: [],
    category: "",
    type: "",
    rent: [0, 0],
    categoryList: ["", "Independent House", "Apartment"],
  };

  async componentDidMount() {
    const { data: homes } = await getHomes();
    console.log(homes);
    this.setState({ homes });
  }
  handleCategory(value) {
    const category = value.toLocaleLowerCase();
    this.setState({ category });
  }
  handleType(value) {
    const type = value;
    this.setState({ type });
  }
  handleRent(min, max) {
    const rent = [min, max];
    this.setState({ rent });
  }
  render() {
    const { homes, category, type, rent, categoryList } = this.state;
    let filteredHomes = homes;
    const [minRent, maxRent] = rent;

    //filtering homes on the basis of category
    if (category !== "")
      filteredHomes = homes.filter(
        (home) => home.category.toLocaleLowerCase() === category
      );

    //filtering homes on the basis of type
    if (type !== "")
      filteredHomes = filteredHomes.filter((home) => home.type === type);
    if (minRent !== 0 && maxRent !== 0)
      filteredHomes = filteredHomes.filter(
        (home) => home.rent >= minRent && home.rent <= maxRent
      );

    return (
      <section className="homes">
        <div className="container">
          <div className="home-filter">
            {filteredHomes.length !== 0 ? (
              <h4 className="mt-5 text-center ">{`Search Result : ${filteredHomes.length}`}</h4>
            ) : null}
            <HomeFilter
              onCategoryChange={(value) => this.handleCategory(value)}
              onTypeChange={(value) => this.handleType(value)}
              onRentChange={(min, max) => this.handleRent(min, max)}
              categoryList={categoryList}
              category={category}
              type={type}
              rent={rent}
            />
          </div>
          <div className="homes-block ">
            {filteredHomes.length === 0 ? (
              <div className="align-middle">
                <h3 className="mt-4">
                  Sorry, currently no homes are available
                </h3>
                <img className="w-50 " src={sad} alt="" />
              </div>
            ) : (
              filteredHomes.map((home, index) => (
                <HomeCard
                  key={index}
                  district={home.district}
                  city={home.city}
                  type={home.type}
                  address={home.fullAddress}
                  preferredTenant={home.preferredTenant}
                  buildup={home.builtup}
                  deposite={home.deposite}
                  rent={home.rent}
                  furnishing={home.furnishing}
                  category={home.category}
                  img={home.image1}
                  mobile={home.owner.mobile}
                />
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Homes;
