import React, { Component } from 'react';
import './Heading.css';
const Heading=(props)=>{
const {heading,subHeading}=props;

return(

<>

<div className='headings'>
    <h2>{heading}<br/>{subHeading}</h2>
</div>

</>

)


}
export default Heading