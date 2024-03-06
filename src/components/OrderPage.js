import { defer } from 'react-router-dom';
import '../App.css';
import React, { Component } from "react";
const OrderPage=(props)=>{


 return(
    <div className='AppIP'>
        {props.setcheck(1)}
        <br/><br/><br/>

        <h1 style={{color:'white'}}>OREDERS</h1>
    </div>
 )
}
export default OrderPage;