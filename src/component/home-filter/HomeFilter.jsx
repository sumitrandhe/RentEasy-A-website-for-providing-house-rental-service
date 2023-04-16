import "./homeFilter.css";
import { useState, useEffect } from "react";

const HomeFilter = ({
  categoryList,
  onCategoryChange,
  onTypeChange,
  onRentChange,
  category,
  type,
  rent,
}) => {
  console.log(categoryList);
  const [minRent, maxRent] = rent;
  /* here I am maintaining state of error only bcz it has nothing to do with homes */
  const [error, setError] = useState("");

  const validateRate = (value, maxMin) => {
    if (maxMin === "min") {
      if (maxRent <= value && value !== 0) return "error";
    }
    if (maxMin === "max") {
      if (minRent >= value && value !== 0) return "error";
    }
    return "";
  };
  const handleMinRent = (value) => {
    const errorMessage = validateRate(value, "min");

    if (errorMessage) setError(errorMessage);
    else setError("");

    onRentChange(value, maxRent);
  };
  const handleMaxRent = (value) => {
    console.log(value);

    const errorMessage = validateRate(value, "max");
    console.log(errorMessage);

    if (errorMessage) setError(errorMessage);
    else setError("");

    onRentChange(minRent, value);
  };

  return (
    <div className="card side-filter fs-4">
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">Category </h4>
        </header>
        <div className="filter-content ">
          <div className="card-body">
            {categoryList.map((ctgry, index) => {
              return (
                <label key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    value={ctgry}
                    defaultChecked={ctgry === category ? true : false}
                    onChange={() => {
                      onCategoryChange(ctgry);
                    }}
                  />
                  <span className="form-check-label">
                    {ctgry === "" ? "All" : ctgry}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">BHK Type</h4>
        </header>
        <div className="filter-content ">
          <div className="card-body">
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bhkType"
                value="1 BHK"
                checked={type === "1 BHK" ? true : false}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
              />
              <span className="form-check-label">1 BHK</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bhkType"
                value="2 BHK"
                checked={type === "2 BHK" ? true : false}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
              />
              <span className="form-check-label">2 BHK</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bhkType"
                value="3 BHK"
                checked={type === "3 BHK" ? true : false}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
              />
              <span className="form-check-label">3 BHK</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bhkType"
                value="4 BHK"
                checked={type === "4 BHK" ? true : false}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
              />
              <span className="form-check-label">4 BHK</span>
            </label>
            <label className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="bhkType"
                value="4+ BHK"
                checked={type === "4+ BHK" ? true : null}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
              />
              <span className="form-check-label">4+ BHK</span>
            </label>
          </div>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">Rent Range </h4>
        </header>
        <div className="filter-content">
          <div className="card-body">
            <div className="row">
              <div className="form-group col-md-6">
                <label>Min</label>
                <input
                  type="number"
                  className="form-control fs-5 "
                  placeholder="0"
                  value={minRent === 0 ? "" : minRent}
                  onChange={(e) => {
                    handleMinRent(
                      parseInt(e.target.value) ? parseInt(e.target.value) : 0
                    );
                  }}
                />
              </div>
              <div className="form-group col-md-6 text-right">
                <label>Max</label>
                <input
                  type="number"
                  className="form-control fs-5 "
                  value={maxRent === 0 ? "" : maxRent}
                  placeholder="1,000"
                  onChange={(e) => {
                    handleMaxRent(
                      parseInt(e.target.value) ? parseInt(e.target.value) : 0
                    );
                  }}
                />
              </div>
              {error ? <p className="text-danger">Improper input</p> : null}
              <p className="text-muted fs-5">Give both min and max value</p>
            </div>
          </div>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">Preferred Tenants </h4>
        </header>
        <div className="card-body row">
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="preferredTenant"
              value=""
            />
            <span className="form-check-label">Bachelor</span>
          </label>
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="preferredTenant"
              value=""
            />
            <span className="form-check-label">Family</span>
          </label>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">Furnishing </h4>
        </header>
        <div className="card-body row">
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="furnishing"
              value=""
            />
            <span className="form-check-label">Full</span>
          </label>
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="furnishing"
              value=""
            />
            <span className="form-check-label">Semi</span>
          </label>
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="furnishing"
              value=""
            />
            <span className="form-check-label">None</span>
          </label>
        </div>
      </article>
      <article className="card-group-item">
        <header className="card-header">
          <h4 className="title">Parking </h4>
        </header>
        <div className="card-body row">
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="parking"
              value=""
            />
            <span className="form-check-label">2 Wheeler</span>
          </label>
          <label className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="parking"
              value=""
            />
            <span className="form-check-label">4 Wheeler</span>
          </label>
        </div>
      </article>
    </div>
  );
};

export default HomeFilter;
