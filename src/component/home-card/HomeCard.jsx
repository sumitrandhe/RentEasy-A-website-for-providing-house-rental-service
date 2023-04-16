import "./homeCard.css";
import Media from "./../common/Media";

const HomeCard = ({
  address,
  district,
  city,
  type,
  preferredTenant,
  buildup,
  deposite,
  rent,
  furnishing,
  category,
  img,
  mobile,
}) => {
  return (
    <div className="home-card">
      <article className="card-body">
        <h4 className="text-dark">
          {` ${type} Flat in ${district} for Rent in ${city}`}
        </h4>
        <p className="text-muted fs-4 ">{address}</p>
        <div className="row mt-5 ">
          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
            <div className="bg-image hover-zoom ripple rounded ripple-surface">
              <img src={img} className="w-100" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="descriptions">
              <div className="description">
                <Media image="fa-house" text={type} />
                <Media image="fa-people-roof" text={preferredTenant} />
                <Media image="fa-couch" text={furnishing} />
              </div>
            </div>
            <div className="buildup">
              <h3 className="buildup-heading">Buildup : </h3>
              <Media image="fa-building" text={buildup} />
            </div>
            <div className="deposite">
              <h3 className="deposite-heading">Deposite : </h3>
              <Media image="fa-indian-rupee-sign" text={deposite} />
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
            <div className="rent">
              <h3 className="rent-heading">Rent : </h3>
              <Media image="fa-indian-rupee-sign" text={rent} />
            </div>
            <div className="d-flex flex-column mt-4">Mobile - {mobile}</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeCard;
