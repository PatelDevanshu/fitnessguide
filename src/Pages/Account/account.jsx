import "../Account/account.css";
import AccountBG from "../../Images/account_bg.jpg";
import Login from "./login";
import { useEffect } from "react";
import Register from "./register";

const Account = ({ comp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("comp :", comp);

  return (
    // <div name="register" id="regisdivation" action="hr.txt" method="post" onsubmit="validate()">
    <div className="accountall">
      <div className="bgimg">
        <img src={AccountBG} className="accountbg" alt="accountbg" />
      </div>
      <div className="Overlay"></div>
      {comp === "login" ? <Login /> : <Register />}
    </div>
  );
};
export default Account;
