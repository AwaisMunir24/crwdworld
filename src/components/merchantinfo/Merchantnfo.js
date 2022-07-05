import React, { Component } from 'react';
import './MerchantInfo.css';
import Abs_Number from '../../AbsComponent/abs_Number/Abs_Number';
const MerchantInfo=()=>{

return(

<>
<section>
    <div className='top-merchant-info'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-5 col-sm-12 merchant-info-left-sec p-0'>
                    <Abs_Number
                    title="03"
                    />
                    <div className='merchant-info-title'>
                        <h4 className='text-center m-0'>Merchant Coin</h4>
                    </div>
                    <p>Merchant Coins are issued by one of 158 Sub Industry Companies and are stable instruments that are backed by vogonAg in reserve.</p>
                    <p>They act as the sub-industry stable coin</p>
                </div>
                <div className='col-lg-8 col-md-7 col-sm-12 right-merchant-info'>
                    <ul>
                        <li>Redeemable at any time for vogonAg OR the par value of Silver pegged to vogonAg </li>
                        <li>CrowdPoint will develop GICS sub-industry-specific indices to determine the exchange rate of vogonAg to Merchant Coins</li>
                        <li>Crwdcapital acts as the escrow / custodial agent to maintain a 1:1 ratio of Vogon Tokens to Merchant Coins – Note that vogonAg cannot be fractionalized, but Merchant Coins can, so if a user wants to purchase 3.2 Merchant Coins, the user would need to stake 4 vogonAg in crwdcapital</li>
                        <li>There will be a maximum of 158 Merchant Coins within CrowdPoint – each Merchant Coin corresponding to a particular sub-industry of GICS.</li>
                        <li>Merchant Coins will have a "stable" value corresponding to vogonAg Tokens and, therefore, silver-in-the-ground prices per gram; however, they will also have speculative value based on volume and demand</li>
                        <li>Each merchant coin is a fully registered SEC security. This regulated classification makes each digital security margin-able, allowing investors to buy more than they would be able to normally. To trade on margin, you need a margin account. Margin trading is different from a regular cash account, where you trade using the money in the account. Your broker must legally obtain your consent to open a margin account. And functionally usable like other securities or debt instruments.</li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
    <div className='bottom-merchant-info'>
       <div className='container'>
        <div className='row'>
            <div className='col-lg-12  information-top'>
                <h4>Index Fund Performance: </h4>
                <p>On our Blockchain Ecosystem, a Merchant Coin provides a way to track the performance of the markets by dedicating a single merchant coin to a sub-industry of the Global Industrial Categorization Standard (GICS). </p>
                <p>GICS is traditionally a system for categorizing every public company by economic sector and industry group. It is used by investors, analysts, and economists to compare competing companies.</p>
                <p>Everyone wants a decent return (usually without too much risk). In traditional non-digital markets, index funds have consistently beaten the average managed fund. They solve the challenge in investing, which is deciding where to invest money.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 information-bottom'>
                <h4>Protection, Ease & Simplicity: </h4>
                <p>While thousands of cryptocurrencies exist on other non-regulated blockchains, these markets expose investors to dangerous risks.</p>
            </div>
        </div>
        </div> 
    </div>
</section>

</>


)


}
export default MerchantInfo