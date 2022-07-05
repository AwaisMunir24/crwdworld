import React, { Component } from 'react';
const BgContent=(props)=>{
const{icon,bgpara}=props;
return(

    <>
    <div>
        <img src={icon} className="bg-icon"/>
        <p className='bg-para'>{bgpara}</p>
    </div>
    
    </>

)

}
export default BgContent;