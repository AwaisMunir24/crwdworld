import React, { Component } from "react";
import "./IndexToken.css";
import Abs_Number from "../../AbsComponent/abs_Number/Abs_Number";
const IndexToken = () => {
  return (
    <>
      <section>
        <div className="top-token">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 token-listss">
                <h4>
                  A Merchant Coin Index is a market capitalization-
                  <br />
                  weighted index based on five factors:
                </h4>
                <ul>
                  <li>
                    First, The floor value is determined by the number of
                    utility tokens held in the Merchant Coin reserve.
                  </li>
                  <li>
                    Second, it is based on the combined asset value in all the
                    purchased security tokens offered by Companies that have
                    participated in a Direct Public Offering. 
                  </li>
                  <li>
                    Third, it is based on the total authorized and currently
                    issued.
                  </li>
                  <li>
                    Fourth, it is based on the performance of the subindustry
                    measured by an enhanced Sharpe ratio that is the current
                    market activity transactions (corporate buying and selling)
                    on the Blockchain divided by the S&P sector equivalent.
                  </li>
                  <li>
                    Finally, the fifth factor is the number of consumers,
                    investors, and companies on our Blockchain that have
                    expressed or demonstrated interest in participating in the
                    sub-industry.
                  </li>
                </ul>
                <p>
                  Because our Merchant Coins are based on these five metrics, it
                  is widely accepted as a benchmark for the strength or weakness
                  of the broader blockchain ecosystem market. Because the
                  underlying security tokens tied to each sub-industry often
                  move up or down in tandem, it isn't unusual for this index to
                  make decisive moves in either direction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-token">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 token-left-side p-0">
                <Abs_Number title="04" />
                <div className="token-title">
                  <h4 className="text-center m-0">Token Index</h4>
                </div>
                <p>Index Tokens the Sub Industry Index and are measured by:</p>
                <ul>
                  <li>Silver in reserve</li>
                  <li>
                    The combined asset value of all equity tokens in
                    sub-industry
                  </li>
                  <li>
                    The transactional Revenue conducted in the Sub Industry
                  </li>
                  <li>The Enhanced Sharpe Ratio</li>
                  <li>
                    The Population of customers with an expressed interest in
                    the sub-industry.
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 token-right-side">
                <p>
                  .As an investment asset, a security token is a digital asset
                  that represents certain rights and transfers value from an
                  asset or bundle of assets to a token. In plain language,
                  security tokens are the digital form of traditional
                  investments like stocks, bonds, or other securitized assets. 
                </p>
                <p>
                    <span>
                  There are several advantages to the use of Index tokens as a
                  financial instrument for a sub-industry:</span>
                </p>
                <p>
                  The Index Token has many attributes of a traditional
                  exchange-traded note (ETN). It is essentially a loan
                  instrument issued by Ecosystem bank. It comes with a set
                  maturity period and can be traded based on demand and supply.
                </p>
                <p>
                  The gains or losses of the investor are derived from the
                  performance of this asset class that acts as a sub-industry
                  index.. They are a type of bond that pays the returns of the
                  index that it tracks at maturity. However, Index Tokens do not
                  pay interest as bonds do.
                </p>
                <p>
                  When the Index Tokens) mature, the financial institution
                  offers the investor cash in an amount that reflects the
                  underlying index’s performance.{" "}
                </p>
                <p>
                  As security tokens trade, the investors can sell and buy the
                  notes and make money from the gap between buying and selling
                  rates, deducting any fees.
                </p>
                <p>
                  Index Tokens do not give holders control of the assets but
                  merely pay the return that the index.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default IndexToken;
