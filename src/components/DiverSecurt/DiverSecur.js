import React, { Component } from "react";
import "./DiverSecur.css";
import Abs_Security from "../../AbsComponent/Abssecurity/Abs_Security";
const DiverSecur = () => {
  return (
    <>
      <section>
        <div className="diversecur-upper-sec">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="numb-pages-wrapper">
                  <div className="number-pages">
                    <Abs_Security
                      number="01"
                      title="vogonAg"
                      disp="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                      bgbox="#6816CD"
                      titlebg="#002060"
                    />
                  </div>
                  <div className="number-pages">
                    <Abs_Security
                      number="02"
                      title="crwdpoints"
                      disp="Merchants and Companies are able to sell excess capacity using a more efficient coupon model"
                      bgbox="#FF209A"
                      titlebg="#C11976"
                    />
                  </div>
                  <div className="number-pages">
                    <Abs_Security
                      number="03"
                      title="Merchant Coin"
                      disp="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                      bgbox="#C200DB"
                      titlebg="#9703AD"
                    />
                  </div>
                  <div className="number-pages">
                    <Abs_Security
                      number="04"
                      title="Index Token"
                      disp="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                      bgbox="#00B0F0"
                      titlebg="#0678A6"
                    />
                  </div>
                  <div className="number-pages">
                    <Abs_Security
                      number="05"
                      title="Security Token"
                      disp="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver..    "
                      bgbox="#1D1856"
                      titlebg="#14113E"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="diversecur-bottom-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Diversification & Securitization:</h2>
                <p>
                  The strategy introduced in the document helps consumers,
                  investors, and members of companies benefit from how we reduce
                  the impact of market volatility. Additionally, given the
                  potential size of our markets, it also helps participants
                  reduce the time spent monitoring a portfolio. Our strategy
                  further helps members of crwdworld seek a unique advantage of
                  how our different investment instruments work for them. We
                  believe our solution will all participants define their
                  long-term investment plans and enjoy the benefits of safe
                  capital with the ability to seamlessly shuffle amongst
                  investments and gain peace of mind
                </p>
                <p>
                  One of the significant advantages presented by the use of
                  merchant coins at the sub-industry level is the ability to
                  maximize flexibility to create a type of asset-backed security
                  that is secured by a collection of sub-industries within an
                  industry, industry group, or industry sector.
                </p>
                <p>
                  This is uniquely feasible in the CrowdPoint model because all
                  transactions of goods and services record the primary
                  secondary sub-industries involved in the purchase of products
                  and services in our crwdmarket.
                </p>
                <p>
                  This parametric and interconnect model promotes innovative
                  ways of securitizing the market like collateralized
                  non-related assets. Our GICS implementation with the fidelity
                  of tracking provides investors with the maximum flexibility to
                  invest in asset classes that demonstrate little or no
                  correlation to one another.
                </p>
                <p>
                  This use of a collection of non-correlative asset classes into
                  a new kind of merchant coin that may act as an index of the
                  top 10 performing subindustries will help the investor to
                  enhance diversification and reduce portfolio volatility.
                  Creating a merchant coin that consists of sub-industry asset
                  classes that are not correlated and generally do not move in
                  tandem with each other will mitigate risk in the portfolio. In
                  cases when the market moves down, these additional merchant
                  coin asset classes may not fall as much as the market in
                  general, which could mitigate risk in an investor's portfolio.
                </p>
                <p>
                  This diversification and mixture of non-correlated asset
                  classes will reduce overall portfolio volatility and generate
                  more consistent returns over the long term.
                </p>
                <p>
                  This table illustrates how various asset classes historically
                  correlate to one another. A correlation of 1.00 indicates
                  perfect correlation, while lower numbers indicate that the
                  asset classes are not correlated and generally do not move in
                  tandem with each other—or, when the market moves down, these
                  asset classes may not fall as much as the market in general,
                  which could mitigate risk in your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DiverSecur;
