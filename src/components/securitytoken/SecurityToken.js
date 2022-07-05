import React, { useState } from "react";
import './SecurityToken.css';
import Abs_Number from "../../AbsComponent/abs_Number/Abs_Number";
import Abs_secutityList from "../../AbsComponent/securitytoken/Abs_secutityList";
const SecurityToken = () => {
    const[list,setList]=useState([
        {
            para:"The corporation does not give up ownership of the firm."
        },
        {
            para:"It increases its flexibility."
        },
        {
            para:"It attracts more investors."
        },
        {
            para:"It can deduct the interest payments from corporate taxes."
        }
    ])
  return (
    <>
      <section>
        <div className="security-token-upper-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-12 security-token-left-side p-0">
                    <Abs_Number
                    title="05"
                    />
                <div className="security-token-title">
                    <h4 className="text-center m-0">Security Token</h4>
                
                </div>  
                <p>An Equity Token is issued by a company conducting a DPO.  These are digital assets that act like a special class of stock that acts like a negotiable bond. They are tradeable on secondary markets</p>  
              </div> 
              <div className="col-lg-8 col-md-7 col-sm-12">
                <div className="security-token-right">
                    {
                        list.map((e,idx)=>
                       
                           <div className="right-listss" key={idx}>
                            <Abs_secutityList
                            para={e.para}
                            />
                           </div> 
                        )
                    }
                    <p>.As an investment asset, an equity token is a digital asset that represents certain rights and transfers value from an asset or bundle of assets to a token. In plain language, security tokens are the digital form of traditional investments like stocks, bonds, or other securitized assets.</p>
                    <p>For investors, security tokens provide a predictable income stream. These security tokens not only pay interest. When held to maturity, investors get back the entire principal, so security tokens are a way to preserve capital while investing. Investors must purchase security tokens with Silver utility-backed merchant coins to buy them..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="security-token-lower">
            <div className="container">
                <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                        <p>Equity Tokens operate like bonds that are issued by private corporations during the direct public offering which are payable to order or bearer. Equity Tokens are payable to order or bearer, whether the interest coupons are attached or detached. </p>
                        <p>Investors prefer equity tokens as given that they behave like bonds they provide a predictable income stream. Typically, equity tokens pay interest twice a year. If the equity tokens are held to maturity, holders get back the entire principal, so bonds are a way to preserve capital while investing.</p>
                        <p>Equity tokens behave like a bond, debt security, or in other words fixed-income security issued by the company. The equity token is owned by the holder or bearer.  Holders of the equity token receives a fixed interest payment that is paid to the holders. </p>
                        <p>The coupon for interest payment is physically attached to the equity token filing, which the bearer will have to present digitally to the exchange for payment purposes. Also, the bearer will have to present the digital certificate as well to recover the maturity value at the time of maturity date.</p>
                        </div> 
                </div>
                </div>            
        </div>
      </section>
    </>
  );
};
export default SecurityToken;
