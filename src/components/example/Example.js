import React, { Component } from "react";
import "./Example.css";
import example from "../../Assessts/Photos/exampleimg.png";
const Example = () => {
  return (
    <>
      <section>
        <div className="example-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 ">
                <h2 className="example-head">Examples of Utility Tokens:</h2>
              </div>
            </div>
            <div className="row">
              <div className="main-wrapper ">
                <div className="col-lg-4 col-md-12 col-sm-12 circle-wid">
                  <div className="para-section ">
                    <p className="utility-upper-p">
                      Filecoins holders can exchange filecoins for access to
                      Filecoin's decentralized digital storage capabilities
                    </p>
                    <p className="utility-upper-p  pad">
                      Ether holders can exchange Ether for access to dapps or
                      execute smart contracts on the Ethereum blockchain
                    </p>
                  </div>
                </div>
                <div className="col text-center">
                    <div className="progres-bar">
                  <img src={example} />
                  </div>
                </div>
                <div className="col-lg-4  col-md-12 col-sm-12 circle-wid">
                  <p className="utility-upper-p-second">
                    Basic Attention Token (BATs) holders can earn BATs by
                    viewing targeted ads; they can then exchange BATs for
                    premium services on the Brave network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="example-lower">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  A token, in data science, is a value—like a randomly-generated
                  number—assigned to sensitive data to mask the original
                  information. So, in a blockchain, a token is a number assigned
                  to data stored within the Blockchain. 
                </p>
                <p>
                  Transforming an asset into a token is called "tokenization."
                  Silver (Ag) is tokenized by using a reference number against a
                  real-world holding of Silver in bond on our Vogon
                  Decentralized Cloud-Blockchain platform. It is then given a
                  second number that describes it as a fractionalized "child" to
                  the overall holding.
                </p>
                <p>
                  These commodity-backed bonds enable our mining partners and
                  CrowdPoint a connection to the current price of the underlying
                  commodity and are used to guarantee a gain in value.
                </p>
                <p>
                  Commodity-backed bonds have the added attraction of being a
                  speculative vehicle for investors who believe that the price
                  of the underlying commodity will rise. The use of this
                  instrument enables an Exchange with a steady source of income.
                  Additionally, commodity-backed bonds are frequently used to
                  hedge against inflation.
                </p>
                <p>
                  By representing Silver as a digital token, investors in our
                  Blockchain Ecosystem will always get accretive metal exposure
                  in their portfolios.
                </p>
                <p>
                  Silver is synonymous with money in many countries around the
                  world. It has many uses in electronics, industry, and
                  medicine, and it's a miracle metal for our Blockchain
                  Ecosystem. At CrowdPoint, we leverage Silver as a monetary
                  metal and have blended the benefits of cryptocurrencies with
                  Silver.
                </p>
                <p>
                  Silver's price is inelastic because production can't be ramped
                  up quickly when the price rises. It is inelastic because most
                  Silver is mined as a secondary metal (by-product) and usually
                  represents only a fraction of a mine's revenue.
                </p>
                <p>
                  The timing range for peak silver production is narrow, in
                  2027–2038, with the best estimate in 2034. By 2240, all silver
                  mines will be nearly empty and exhausted. Today, from the
                  current silver production alone, and this point forth, demand
                  will outstrip production without exception. Silver is now
                  rarer than gold and will be for all of eternity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Example;
