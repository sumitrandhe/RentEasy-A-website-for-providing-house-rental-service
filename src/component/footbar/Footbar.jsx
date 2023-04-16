import { Link } from "react-router-dom";
import "./footbar.css";
import logo from "../../images/logo.jpg";

const Footer = (props) => {
  let a = 100;
  let b = 200;

  return (
    <section className="footbar">
      <div className="container">
        <div className="grid-footer">
          <div className="item">
            <ul>
              <li>
                <Link to="#" className="logo-name">
                  <h1>RentEasy</h1>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <Link to="#">(More items)</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <Link to="#">Services</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <Link to="#">Showcase</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Conatct us</Link>
              </li>
              <li>
                <Link to="#">Resourses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright to Group 10</div>
    </section>
  );
};

export default Footer;
