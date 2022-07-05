import React, { Component } from "react";
import "./MerchantCoins.css";
import Heading from "../heading/Heading";
import jobact from "../../Assessts/Photos/jobact.png";
import equity from "../../Assessts/Photos/equity.png";
import marcoin from "../../Assessts/Photos/merchantoin.png";
const MerchantCoins = () => {
  return (
    <>
      <section>
        <div className="top-merchant">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Heading
                  heading="Introduction"
                  subHeading="to Merchant Coins"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 merchant-pars">
                <p>
                  Our strategy is a financial component of our Blockchain
                  Ecosystem designed to give investors access to a diversified
                  basket of new kinds of digital asset classes.
                </p>
                <p>
                  We felt that because a proper crypto index fund currently does
                  not yet exist in the United States, we believed we should
                  create one. Our next generation of cryptographic currency,
                  described as digital assets, comprises registered and legal
                  merchant coins.
                </p>
                <p>
                  In 2022, our team is s pioneering the first merchant coin
                  backed by Silver as an S&P index that operates within an
                  Industry Sector, Exchanged Trading Fund (ETF), at the Industry
                  Group level, essentially becoming an autonomous 'merchant
                  coin-as-an-index.’
                </p>
                <p>
                  A merchant coin is a more cost-effective way of buying and
                  selling security tokens offered by Companies that participate
                  in a Direct Public Offering.
                </p>
                <p>
                  It allows you to view the Sub Industry within each of the 11
                  Industry Sectors without having to open a position on each
                  security token. Trading on a merchant coin index can also help
                  spread some risks, as you aren't exposed to a single company's
                  security tokens.
                </p>
                <p>
                  We buy the underlying silver-backed assets to establish the
                  merchant coin. There are no broker fees, no exit fees, no
                  minimum investment, and complete control over your assets.
                  Full blockchain transparency.
                </p>
                <p>
                  By moving between merchant coins with the best value ratio,
                  participants will maximize the relationship between a "value
                  floor" determined by the Silver combined with speculative
                  value and assets under management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-merchant">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="d-flex justify-content-center align-items-start main-section-mer">
                  <img src={jobact} />
                  <div className="inner-section ">
                    <h4>JOBS Act</h4>
                    <p>
                      CrowdPoint aids companies in utilizing Regulation A+
                      offerings to realize their capitalization goals, as well
                      as to create "Merchant Coins," which are registered
                      securities/warrants (more detail below)
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-start main-section-mer equity">
                  <img src={equity} />
                  <div className="inner-section ">
                    <h4>Equity Tokens </h4>
                    <p>
                      Each equity token relates to the issuing entity's shares,
                      bonds, or other equity or debt instruments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="d-flex justify-content-center align-items-start main-section-mer">
                  <img src={marcoin} />
                  <div className="inner-section ">
                    <h4>Merchant Coins</h4>
                    <p>
                      These are digital securities associated with a special
                      class of shares for the issuing entity. These securities
                      behave as transaction processors exclusive to the issuing
                      entity (i.e., the merchant coins are a proprietary payment
                      rail for a company). Merchant coins are essentially
                      "stablecoins" that are pegged to vogonAg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MerchantCoins;
