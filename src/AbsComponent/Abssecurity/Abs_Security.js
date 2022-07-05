import React, { Component } from 'react';
import './Abs_Security.css';

const Abs_Security=(props)=>{
const{number,bgbox,title,titlebg,disp}=props;
return(

<>
<div className='number-main-box' style={{background:`${bgbox}`}}>
    <div className='number'>
        <h2>{number}</h2>
    </div>
    <div className='numbers-title' style={{background:`${titlebg}`}}>
        {title}
    </div>
    <div className='num-disp'>
        <p>{disp}</p>
    </div>
</div>
</>


)



}
export default Abs_Security