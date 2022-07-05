import React, { Component } from 'react';
import CrwdWorld from '../components/crwdWorld/CrwdWorld';
import BlockChainEco from '../components/blockchain&eco/BlockChainEco';
import Introduction from '../components/introduction/Introduction';
import Vogon from '../components/vogon/Vogon';
import Example from '../components/example/Example';
import Prospective from '../components/prospective/Prospestive';
import CrwdPoints from '../components/crwdpoints/CrwdPoints';
import CrwdNoTwo from '../components/crwdno2/CrwdNoTwo';
import MerchantCoins from '../components/merchantcoins/MerchantCoins';
import MerchantInfo from '../components/merchantinfo/Merchantnfo';
import IndexToken from '../components/indextoken/IndexToken';
import SecurityToken from '../components/securitytoken/SecurityToken';
import DiverSecur from '../components/DiverSecurt/DiverSecur';
const Mainlayout =()=>{

return(

<>
<main>
<CrwdWorld/>
<BlockChainEco/>
<Introduction/>
<Vogon/>
<Example/>
<Prospective/>
<CrwdPoints/>
<CrwdNoTwo/>
<MerchantCoins/>
<MerchantInfo/>
<IndexToken/>
<SecurityToken/>
<DiverSecur/>
</main>

</>


)


}
export default Mainlayout;
