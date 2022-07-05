import React, { Component } from "react";
import "./BlockChainEco.css";
import ecoLogo from "../../Assessts/Photos/eno-logo.png";
import amazon from "../../Assessts/Photos/amazon.png";
import google from "../../Assessts/Photos/google.png";
import apple from "../../Assessts/Photos/apple.png";
import meta from "../../Assessts/Photos/meta.png";
import netflix from "../../Assessts/Photos/netflix.png";
import airbub from "../../Assessts/Photos/airbub.png";
const BlockChainEco = () => {
  return (
    <>
      <section className="blockchaineco">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="left-side">
                <h4>In our Blockchain Ecosystem, everyone extracts value</h4>
                <p>
                  <span className="business"> BUSINESS ECOSYSTEM:</span> The
                  fusion of FinTech and emerging Blockchain technologies
                  changing the world.  So much so, that traditional banks like
                  JP Morgan Chase are beginning to think like the big tech
                  companies, such as Amazon, Google, and others. Unfortunately,
                  they are tied to a Business Ecosystem model that exploits the
                  same “winner takes all” principles that helped them dominate
                  in their fields.
                </p>
                <p>
                  <span className="business">BlockChain ECOSYSTEM:</span> At
                  CrowdPoint, we are a digital platform provider.  Our digital
                  platform is decentralized cloud technology powered by Vogon
                  Blockchain. This platform enabled us to build a Blockchain
                  Ecosystem, which we call crwdworld.  Unlike a Business
                  Ecosystem where the owners extract the most value, in
                  crwdworld, the value is shared with its participants.
                </p>
                <p>
                  Our FinTech ecosystem is powered by a Decentralized Cloud that
                  leverages its own layer 1 Blockchain protocol.
                </p>
                <p>
                  This enables crwdworld to create a circular business model
                  that manages large networks of consumers and merchants,
                  investors and corporations, and savers and fund managers.
                </p>
                <p>
                  crwd<span>world</span> wins new customers by allowing them to
                  claim their data, engage in decentralized advertising and
                  serve them across multiple businesses by delivering real-time
                  rebates. This decentralized commerce promotes cross-selling
                  new products or investments in companies using digital assets
                  on digital steroids.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 business-eco">
              <div className="right-side">
                <h2>Business Ecosystem</h2>
                <p>
                  The owners of a business ecosystem extract the most value for
                  themselves
                </p>
                <div className="Eco-Logos">
                  <div className="d-flex justify-content-between align-items-center logoss">
                    <img src={amazon} className="img-fluid"/>
                    <img src={google} className="img-fluid"/>
                  </div>
                  <div className="text-center">
                    <img src={apple} className="img-fluid" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center logoss">
                    <img src={meta} alt="meta-logo" className="img-fluid"/>
                    <img src={netflix} alt="netflix-logo" className="img-fluid"/>
                  </div>
                  <div className="text-center">
                    <img src={airbub} alt="airbub logo" className="img-fluid"/>
                  </div>
                </div>
                <h2>Blockchain Ecosystem</h2>
                <p>
                  In our crwdworld Blockchain Ecosystem, everyone extracts value
                </p>
                <div className="text-center blockchain">
                  <img src={ecoLogo} alt="Eco Logo"  className="img-fluid"/>
                </div>
                <ul>
                  <li>
                    Claim & update your identity on crwd<span>id</span>
                  </li>
                  <li>
                    Purchase Products crwd<span>market</span>  
                  </li>
                  <li>
                    Get rebates for your data as digital assets and tokens in
                    crwd<span>capital</span> 
                  </li>
                  <li>
                    Purchase new products or invest in companies using digital
                    assets on crwd<span>finance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlockChainEco;
