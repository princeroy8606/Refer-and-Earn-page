import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import "./index.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import backArrow from "../../../assets/icons/back.svg";

const EnrolledFriends = () => {
  const data = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
      amount: 185,
    },
    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
      ],
      amount: 255,
    },
    {
      name: "Prafull Kumar",
      date: "16 Sep, 2022",
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "physics",
        "chemistry",
      ],
      amount: 300,
    },

  ];

  return (
    <div className="FrindsRefered-container">
      <Link to={"/"} className="Back-To-page">
        <img src={backArrow} alt="" />
        <div className="backlink-txt">go back</div>
      </Link>
      <div className="FrindsReferd-top">
        <div className="Referalcode-container">
          <div className="Referalcode-txt">Your Referral Code </div>
          <div className="Referalcode-box">
            <div className="Referalcode">EDCH54</div>
          </div>
        </div>
        <div className="wallet-balance-container">
          <div className="wallet-balance-txt-container">
          <div className="wallet-balance-txt">Wallet Balance</div>
          <div className="wallet-balance">₹ 500</div>
          </div>
        </div>
      </div>
      <div className="card-box">
        <div className="card-head">
          Friends who enrolled <span>({data.length})</span>
        </div>
        <div className="card-wrap">
          {/* <div className="card-slider"> */}
            {data.map((cardData) => (
              <Card data={cardData} />
            ))}
          {/* </div> */}
        </div>
      </div>
      <div className="terms-container">
        <div className="terms">Terms & Conditions</div>
      </div>
    </div>
  );
};

export default EnrolledFriends;
