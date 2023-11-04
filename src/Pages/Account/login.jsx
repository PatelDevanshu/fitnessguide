import { NavLink } from "react-router-dom";
import "../Account/account.css";

const Login = () => {
  return (
    <div className="loginall">
      <div className="form">
        <div className="lgpg">LOGIN FORM</div>
        <form className="login">
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
          <div className="linking">
            <label>Forgot Password?</label>
          </div>
          <div className="linking">
            <label>
              <NavLink to="/account/register" className="navlink">
                Register
              </NavLink>
            </label>
          </div>

          <div className="btn">
            <button type="submit" className="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
