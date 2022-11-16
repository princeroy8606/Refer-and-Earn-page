import logo from "../../assets/logo/logo.png";
import profile from "../../assets/icons/profile.svg";
import more from "../../assets/icons/arrow.svg";
import more_mb from "../../assets/icons/arrow-mob.svg";
import "./index.css";

const Header = () => {
  return (
    <div className="refPg-main">
      <div className="refPg-nav-container">
        <div className="refpg-nav">
          <div className="refPg-nav-logo">
            <img src={logo} alt="Company-logo" />
          </div>
          <div className="refPg-names">
            <div className="rfpg-name-fade">My Assignment</div>
            <div className="rfpg-name-fade">Chat With Mentor</div>
            <div className="refpg-name-profile">
              <img src={profile} alt="profile.svg" />
              <h3>ProfileName</h3>
              <img src={more} alt="" />
            </div>
            <div className="refpg-name-profile-button">
              <div>ProfileName</div>
              <img src={more_mb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
