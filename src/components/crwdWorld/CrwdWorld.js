import React, { Component } from 'react';
import './CrwdWorld.css';
import mainLogo from '../../Assessts/Photos/mainlogo.png';
import earth from '../../Assessts/Photos/earth.png';
const CrwdWorld =()=>{
    return(

        <>
        <section className='crwdworld-section'>
            <div className='container-fluid m-0 p-0 crwd-wall-se'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='logo'>
                        <img src={mainLogo} alt="CRWD LOGO" className='main-logo img-fluid'/> </div>
                        </div>
                    <div className='col-12 earth'></div>
                </div>
            </div>
           
        </section>
        
        </>

    )
}
export default CrwdWorld;