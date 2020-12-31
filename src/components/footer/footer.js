import React from "react";
import footerLogo from "../../assets/img/footerLogo.png";
import socialMedium from "../../assets/img/icon-medium.svg";
import socialTwitter from "../../assets/img/icon-twitter.svg";
import socialDiscord from "../../assets/img/icon-discord.svg";
import socialTelegram from "../../assets/img/icon-telegram.svg";
import "./footer.css";

export default class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="f-logo">
                <img src={footerLogo} alt="footerLogo" className="img-fluid" />
                <p>Copyright &copy; 2020 Proswap</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footerDetail">
                <div className="footerLinks">
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Partnership Agreement</a>
                    </li>
                    <li>
                      <a href="#">Risk Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="socialLinks">
                  <h3>Social</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={socialMedium} alt="" /> Medium
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={socialTwitter} alt="" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={socialDiscord} alt="" /> Discord
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={socialTelegram} alt="" /> Telegram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
