import { Link } from "react-router-dom";
import "./index.scss";
import people from "../../assets/icons/invite-people.svg";
import coupon from "../../assets/icons/refereal-coupon.svg";
import Ruppe from "../../assets/icons/Ruppe.svg";
import discound from "../../assets/icons/dicound.svg";
import wallet from "../../assets/icons/Account balance wallet.svg";


const ReferAndEarn = () => {
  return (
    <div className="RAE-container">
      <div className="RAE-top">
        <div className="RAE-card-grid">
          <div className="grid-item-1 grid-item">
            <div className="RE"> Referral Earning</div>
            <div className="amount">₹ 2,500</div>
          </div>
          <div className="grid-item-2 grid-item">
            <div className="RE">Total Referrals</div>
            <div className="amount">7</div>
          </div>
          <div className="grid-item-3 grid-item">
            <div className="RE">Wallet Balance</div>
            <div className="amount">₹ 500</div>
          </div>
          <div className="grid-item-4 grid-item">
            <div className="grid-Btn">
              <div className="grid-Btn-txt">Withdraw Balance</div>
            </div>
          </div>
        </div>
        <div className="RAE-ref-code">
          <div className="RAE-txt">Your Referral Code</div>
          <div className="RAE-code-container">
            <div>EDCH54</div>
          </div>
        </div>
      </div>

      <div className="RAE-middle">
        <div className="RAE-middle-head">How does it work ?</div>

        <div className="RAE-middle-item-container">
          <div className="RAE-middle-item">
            <div className="image-container">
              <img src={people} alt="" />
            </div>

            <div className="RAE-middle-text">
              <div className="RAE-middle-text-bold">Invite your Friends</div>
              <div className="RAE-middle-text-normal">
                Share the link tutedude.com with your friends
              </div>
            </div>
          </div>
          <div className="RAE-middle-item">
            <div className="image-container">
              <img src={coupon} alt="" />
            </div>

            <div className="RAE-middle-text">
              <div className="RAE-middle-text-bold">
                Friend purchases any course
              </div>
              <div className="RAE-middle-text-normal">
                Using your REFERRAL CODE in the payments page
              </div>
            </div>
          </div>
          <div className="RAE-middle-item">
            <div className="image-container">
              <img src={Ruppe} alt="" />
            </div>

            <div className="RAE-middle-text">
              <div className="RAE-middle-text-bold">
                You get ₹ 200 as referral money
              </div>
              <div className="RAE-middle-text-normal">
                On total purchase the friend makes, into your wallet
              </div>
            </div>
          </div>
          <div className="RAE-middle-item">
            <div className="image-container">
              <img src={discound} alt="" />
            </div>
            <div className="RAE-middle-text">
              <div className="RAE-middle-text-bold">
                Your Friend gets ₹ 200 Off{" "}
              </div>
              <div className="RAE-middle-text-normal">
                On his overall fee on successful purchase using your referral
                code{" "}
              </div>
            </div>
          </div>
          <div className="RAE-middle-item">
            <div className="image-container">
              <img src={wallet} alt="" />
            </div>
            <div className="RAE-middle-text">
              <div className="RAE-middle-text-bold">
                Transfer money from wallet
              </div>
              <div className="RAE-middle-text-normal">
                When the wallet balance reaches ₹200 or more, you can withdraw
                it
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="RAE-Link">
        <Link to={"/enrolled-friends"} className="link">
          Friends Who Enrolled
        </Link>
      </div>
      <div className="terms-container">
        <div className="terms">Terms & Conditions</div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
