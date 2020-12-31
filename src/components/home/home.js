import React from "react";
import laptop from "../../assets/img/laptop.png";
import whatIs from "../../assets/img/what-is.svg";
import howItWorks from "../../assets/img/howItWorks.svg";
import matched from "../../assets/img/matched.png";
import matchedSteps from "../../assets/img/step-2.svg";
import custodial from "../../assets/img/custodial-upd.svg";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="_hero-banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 animate__animated animate__fadeInLeft animate__slow">
                <h1>
                  Decentralised protection against market volatility has never
                  been easier
                </h1>
                <p>
                  ProSwap is the official{" "}
                  <a href="http://openhedge.com/" target="_blank">
                    openhedge.com
                  </a>{" "}
                  client for DeFi structured finance products
                </p>
              </div>
              <div className="col-md-7">
                <img
                  src={laptop}
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 991px) 100vw, 830px"
                  // srcset={'/src/assets/laptop.png'}
                  width="830"
                  // className="ml-3 laptop d-none d-md-block"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="_openhedge">
          <div className="container">
            <h1
              className="text-center heading wow animate__animated animate__fadeInUp animate__slow"
              data-wow-duration="1s"
            >
              What is the{" "}
              <a href="http://openhedge.com/" target="_blank">
                {" "}
                openhedge.com
              </a>{" "}
              standard?
            </h1>
            <p
              className="wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              The openhedge standard is a decentralised financial primitive that{" "}
              <br />
              enables replication of any financial derivative payoff structure.
            </p>
            <div
              className="text-center _wrapper wow animate__animated animate__fadeInUp"
              data-wow-duration="2s"
            >
              <img
                src={whatIs}
                alt="what-is"
                className="img-fluid d-md-block d-none m-auto "
              />

              <div className="d-flex justify-content-center mt-2">
                <div className="text-center">
                  <h1>Asset</h1>
                  <p>
                    At maturity, asset owner chooses between taking back their
                    asset or the hedge asset.
                  </p>
                </div>
                <div className="smart_svg">
                  <h1>Smart contract</h1>
                  <p></p>
                </div>
                <div>
                  <h1>Hedge asset</h1>
                  <p>
                    Hedge seller earns an upfront fee. At time of maturity, they
                    receive back either the asset or hedge asset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="_how-it-works">
          <div className="container">
            <h1
              className="heading wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
            >
              How it works
            </h1>
            <p
              className="wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
            >
              ProSwap makes risk management easy!
            </p>
            <div className="text-center _wrapper">
              <img src={howItWorks} alt="How it Works" />
              <div className="d-flex align-items-center justify-content-between text-left">
                <div>
                  <div
                    className="_box wow animate__animated animate__fadeInLeft"
                    data-wow-duration="1s"
                  >
                    <p className="_title">1</p>
                    <p className="_desc">
                      <span className="_a">A</span> wants to protect the price
                      of his ETH position for the next 7 days.
                    </p>
                  </div>
                  <div
                    className="_box wow animate__animated animate__fadeInLeft"
                    data-wow-duration="1.5s"
                  >
                    <p className="_title">2</p>
                    <p className="_desc">
                      <span className="_a">A</span> locks in ETH in the smart
                      contract + a fee that will be sent to{" "}
                      <span className="_b">B</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="_box wow animate__animated animate__fadeInRight"
                    data-wow-duration="1s"
                  >
                    <p className="_title">3</p>
                    <p className="_desc">
                      <span className="_b">B</span> feels confident ETH price
                      won't decline and would like to make a return on his USDT
                    </p>
                  </div>
                  <div
                    className="_box wow animate__animated animate__fadeInRight"
                    data-wow-duration="1s"
                  >
                    <p className="_title">4</p>
                    <p className="_desc">
                      <span className="_b">B</span> locks in USDT in the same
                      smart contract and receives immediately the fee paid by
                      <span className="_a">A</span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={matched}
                alt="matched"
                className="img-fluid wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
              />
              <div
                className="_box m-auto wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
              >
                <p className="_title">5</p>
                <p className="_desc">
                  At time of contract maturity (this can be selected when
                  contract is generated), <span className="_a">A</span> gets to
                  choose which asset they want to take - either their ETH, or
                  the USDT
                </p>
              </div>
              <img src={matchedSteps} alt="step-2" className="img-fluid my-5" />
              <p className="_desc text-center">
                Once <span className="_a">A</span> chooses,
                <span className="_b">B</span> gets the asset that is left over
              </p>
            </div>
          </div>
        </section>
        <section className="_secure">
          <div className="container">                 
            <div className="row align-items-center">
              <div
                className="col-md-6  wow animate__animated animate__fadeInLeft animate__slow"
                data-wow-duration="1s"
              >
                <h1>Is ProSwap custodial?</h1>
                <p>
                  No! ProSwap lets you interact with the decentralised <br />
                  openhedge.com standard in a non custodial way. <br />
                  <br />
                  In the future, we will also be offering optional custodial{" "}
                  <br />
                  services to simplify the user experience
                </p>
              </div>
              <div
                className="col-md-6 p-0 d-none d-md-block wow animate__animated animate__fadeInRight animate__slow"
                data-wow-duration="1s"
              >
                <img src={custodial} alt="custodial-upd" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
