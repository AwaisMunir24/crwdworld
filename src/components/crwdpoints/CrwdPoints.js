import React, { Component } from "react";
import "./CrwdPoints.css";
import crwpoint from "../../Assessts/Photos/img1.png";
import Heading from "../heading/Heading";
const CrwdPoints = () => {
  return (
    <>
      <section>
        <div className="top-crwdpoint">
          <div className="container">
            <div className="row  align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="first ">
                  <p>
                    CrowdPoint Bank engages Brokerages to sell Ag instruments
                    that provide capital in exchange for a set amount of future
                    Ag mine production.
                  </p>
                  <p>
                    Web traffic and outbound calling drive accredited and retail
                    to raise $$
                  </p>
                  <p>
                    Investors are guaranteed a defined “floor” on their
                    investment depending on what round they participate in
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="center">
                  <img src={crwpoint} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="end">
                  <p>A common bond instrument and a common product offering</p>
                  <p>
                    Acts as a deflationary asset and a hedge against public
                    markets and deposit accounts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="low-crwdpoint">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Heading heading="Introduction" subHeading="to crwdPoints" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Today's use of coupons is flawed. They cost businesses money
                  and may lead to lower profits for that sale. Another drawback
                  is when existing customers wait for coupons; it cannibalizes
                  existing revenue before the coupon program.{" "}
                </p>
                <p>
                  Then there is fraud is is difficult to determine if a customer
                  got a discount due to a non-qualifying reason or if consumers
                  use a duplicate copy of a coupon to obtain discounts multiple
                  times than they are entitled to under the current terms. These
                  challenges and discrepancies and loopholes lead to huge
                  losses. In fact, the coupon marketplace bleeds US$ 500,000,000
                  to fraud every year.
                </p>
                <p>
                  Our Vogon Blockchain and distributed cloud technology offer
                  decentralized, shared ledgers that are secured
                  cryptographically and help to enhance the security and
                  integrity of all transactions as well as the privacy of both
                  customers and businesses. Our Tokens enable customers to
                  purchase excess capacity from vendors at times the vendors
                  need it most and reduce cost and the need for intermediaries.
                  Smart Contracts produce unique usage coupon tokens that are
                  both non-repudiable and non-falsifiable, providing a a perfect
                  use case for the revolutionary shifts that smart contracts can
                  deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CrwdPoints;
