
import '../App.css';
import React, { Component } from "react";
const OrderHistory=(props)=>{

    return(
        <div className="AppIP">
            {props.setcheck(1)}
            <br/><br/><br/>

            <h2 style={{color:'white'}}>OrderHistory</h2>
        </div>
    )
}

export default OrderHistory;