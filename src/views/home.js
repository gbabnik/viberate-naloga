import React from 'react';
import logo from '../assets/images/svg/logo-viberate.svg';

export default function Home () {

    return(
    <div  style = {{backgroundColor: 'rgb(255,31,67)', height: `calc(100vh - 65px)`}}>
        <div  style = {{position: 'relative', top: '30vh', margin: 'auto', display: 'block', width: '70vw'}}>   
            <img src= {logo} alt="Viberate" />
        </div>
    </div>
    )
};
    
