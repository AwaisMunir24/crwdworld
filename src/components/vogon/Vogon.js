import React, { useState } from "react";
import "./Vogon.css";
import Abs_Number from "../../AbsComponent/abs_Number/Abs_Number";
import Heading from "../heading/Heading";
import bgtoken1 from '../../Assessts/Photos/bgtoken1.png';
import bgtoken3 from '../../Assessts/Photos/bgtoken3.png';
import bgtoken2 from '../../Assessts/Photos/bgtoekn2.png';
import BgContent from "../bgcontent/BgContent";
const Vogon = () => {
const [bgCont,setBgCont]=useState(
    [
        {
            icon:bgtoken1,
            bgpara:"A utility token is a digital asset cryptographically generated token that serves some use case within a specific ecosystem. These tokens allow users to perform some action on a particular network. Utility tokens are not mineable cryptocurrencies. They are usually pre-mined, being created all at once and distributed in a manner chosen by the team behind the project." 
        },
        {
            icon:bgtoken2,
            bgpara:"Utility tokens do not represent any ownership stake in the project being invested in. Instead, allow the holder to buy or sell the underlying tokens preferentially. The value of utility tokens usually fluctuates depending on the demand for the project. It may generate profits for the token acquirer if the project reaches its intended purpose with reasonable success."
        },
        {
            icon:bgtoken3,
            bgpara:"It is helpful to think of utility tokens as coupons or vouchers. The asset a utility token represents is a certain level of access to a product or service which the holder can gain by redeeming it."
        }
    ]
)
  return (
    <>
      <section>
        <div className="top-vogon">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 vogon-left-sec p-0 col-md-5 col-sm-12">
                <div className="">
                  <Abs_Number title="01" />
                  <div className="title-vogon">
                    <h4 className="text-center">Vogon</h4>
                  </div>
                  <p>
                    Streamer Agreements with Silver Mines are expressed as bonds
                    and then fractionalized into a 1-gram Token of Silver..
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-sm-12">
                <div className="vogon-right-sec">
                  <p>
                    Our approach to driving accretive value is deploying a
                    methodology that combines precision Tokenomics with
                    stochastic representations and AI to remove uncertainty.
                  </p>
                  <p>
                    We have employed a dynamical systems theory approach for
                    non-linear time series forecasting and investment strategy
                    development. Our use of secondary markets is a proprietary
                    mix of identity, market, wallet, and finance system
                    structures. We engage only in asset-backed commerce,
                    arbitrage, smart contracts, anonymity, and the combination
                    of precision Tokenomics and stochastic coin value. 
                  </p>
                  <p>
                    We use tokenized commodities, governance, utilities,
                    merchant coins, and AI to create a systems approach.
                    Together, this system will deliver an unbiased estimate of
                    the log ratio of the value of our Merchant Coin beyond the
                    initial Bullion price of the silver-backed tokens that
                    support it. 
                  </p>
                  <p>
                    In 1889, Friedrich von Wieser asserted in his book "The
                    Elementary Theory of Value" that the highest principle of
                    all economies is utility. The utility is imperfectly
                    contained in value. The amount of utility contained is
                    intimately associated with the idea of goods. Where value
                    and utility come into conflict, utility must conquer;
                    nothing in the nature of value could give it the
                    ascendency. 
                  </p>
                  <p>
                    Our approach to accretive value starts with an absolute
                    price in silver-backed utility tokens. 
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-vogon">
            <div className="container">
                <div className="row">
                     <div className="col-lg-12">
                        <Heading
                        heading="background"
                        subHeading="on Utility Tokens"
                        />
                        </div>       
                </div>
                <div className="row utilty-disp">
                       {
                        bgCont.map((e,idx)=>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                               <BgContent
                               icon={e.icon}
                               bgpara={e.bgpara}
                               />
                        </div>
                        
                        )
                       } 
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
export default Vogon;
