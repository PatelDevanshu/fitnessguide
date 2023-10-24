import "./footer.css";
import { NavLink } from "react-router-dom";
import Instagram from "../../Images/instagram.png";
import Facebook from "../../Images/facebook.png";
import Whatsapp from "../../Images/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <NavLink to="/" className="footer-brand">
          <span>Fitness</span> Guide
        </NavLink>
        <div className="footcontainer">
          <div className="foot1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/workout" className="nav-link">
                  Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/account" className="nav-link">
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div className="con con-textual">Contact : </div>
            <div className="con insta">
              <img src={Instagram} alt="Insta" srcset="" />
            </div>
            <div className="con facebook">
              <img src={Facebook} alt="FB" srcset="" />
            </div>
            <div className="con whatsapp">
              <img src={Whatsapp} alt="WA" srcset="" />
            </div>
          </div>
        </div>
        <div className="footing">
          <div className="cr-text">&copy; Fitness Guide 2023</div>
          <div>
            Email id :{" "}
            <NavLink to="#" className="emailid">
              fitnessguide@gmail.com
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
