import React, { Component, useState } from "react";
import "./Prospective.css";
import Abs_Prospective from "../../AbsComponent/prospective/Abs_Prospective";
const Prospective = () => {
  const [prosPara, SetProsPara] = useState([
    {
      Prospara: "Vogon is a decentralized cloud and blockchain platform",
    },
    {
      Prospara:
        "The vogonAg Token will be a hybrid utility token and a foundation for Vogon utility transactions and for equity tokens and merchant coins designed to function as a transaction processor for both API calls and financial settlements within the CrowdPoint ecosystem",
    },
    {
      Prospara:
        "vogonAg Tokens will be commodity-backed (i.e., silver) tokens that have instant settlement time, custodianship in a U.S. chartered bank, and circulation via a CFTC-registered Central Counterparty Clearinghouse",
    },
    {
      Prospara:
        "vogonAg Tokens will be fully collateralized by silver streamer agreements purchased from reputable silver mines ",
    },
    {
      Prospara:
        "vogonAg Tokens will be modeled as Forward Claims or Swap Contracts – and therefore subject to CFTC regulation as a Utility Token.",
    },
  ]);
  return (
    <>
      <section>
        <div className="sec-one-pros">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="main-pros-head">
                 <span> Our prospective utility token <br/>is called the</span> vogonAg <span>Token for
                  Vogon Utility
                  </span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {prosPara.map((e, idx) => (
                  <div key={idx}>
                    <Abs_Prospective Prospara={e.Prospara} />
                  </div>
                ))}
                <p className="dispp-first">
                  vogonAg
                    
                    <span> tokens serving as the Vogon utility are only purchasable as
                    non-fractionalized grams through precision pricing.</span>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-two-pros">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 left-list-side">
                <div className="d-flex list-pros">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p>
                    Investors will purchase vogonAg (i.e., Swap Contract) pegged
                    to a specific price of Silver per gram
                  </p>
                </div>
                <div className="d-flex list-pros">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p>
                    Such investors will be entitled to coupons, future services,
                    or cash flows{" "}
                  </p>
                </div>
                <div className="d-flex list-pros">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p>
                    Investors will experience accretive benefits as more users
                    adopt Vogon / CrowdPoint; this will be due to speculation of
                    the growth potential of vogonAg{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 right-side-list">
                <p>
                  <span>Is</span> vogonAg{" "}
                  <span> a security per the Howey Test?</span>
                </p>
                <p>No – vogonAg will have consumptive use qualities </p>
                <p>
                  <span>Can you mine </span> vogonAg?
                </p>
                <p>
                  No – Since vogonAg uses a proof-of-stake consensus mechanism,
                  it uses validators vs. miners to operate the Blockchain 
                </p>
                <ul>
                  <li>
                    vogonAg will be used to purchase Merchant Coins within the
                    CrowdPoint Ecosystem. Merchant Coins will be used to
                    purchase security tokens
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-third-pros">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  We then leverage AI to optimize the mean ratio of the signal
                  output of a Merchant Coin as both a forecast and a
                  sub-industry index. This approach will correctly make
                  predictions for any near or long-term horizons: The gain value
                  based on a new Alpha, the utility of worth, speculation, and
                  scarcity. 
                </p>
                <p>
                  Unlike the vogonAg tokens, Merchant coins are expressed as
                  fractionalized grams of Silver. The signal input of the Coin's
                  stochastic value expressed as Silver is described as
                  fractionalized 0.999 grams of Silver. 
                </p>
                <p>
                  This approach is repeated at a logarithmic scale across
                  Exchanges in terms of the decimal algorithm of the same ratio
                  expressed between Merchant Coins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Prospective;
