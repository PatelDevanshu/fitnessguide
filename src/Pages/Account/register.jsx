import { NavLink } from "react-router-dom";
import "../Account/account.css";

const Register = () => {
  return (
    // <div name="register" id="regisdivation" action="hr.txt" method="post" onsubmit="validate()">
    <div className="registerall">
      <div className="form">
        <div className="rgpg">REGISTRATION FORM</div>
        <form className="register">
          <div className="items">
            <label>Full name :</label>
            <input type="text" className="entry" name="Name" placeholder="" />
          </div>
          <div className="items">
            <label>E-mail : </label>
            <input type="email" className="entry" name="Email" placeholder="" />
          </div>
          <div className="items">
            <label>Password : </label>
            <input
              type="password"
              className="entry"
              name="Password"
              placeholder=""
            />
          </div>
          <div className="items">
            <label>Confirm Password : </label>
            <input
              type="password"
              className="entry"
              name="Password"
              placeholder=""
            />
          </div>
          <div className="items">
            <label>Gender : </label>
            <select className="entry">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="rglink">
            <label>
              <NavLink to="/account/login" className="navlink">
                Already a user?Login
              </NavLink>
            </label>
          </div>

          <div className="btn">
            <button type="submit" className="clickbtn" name="submit">
              REGISTER
            </button>

            <button type="reset" className="clickbtn" name="reset">
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
