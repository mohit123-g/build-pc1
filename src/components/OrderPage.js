import { defer } from 'react-router-dom';
import '../App.css';
import './OrderPage.css';
import React, { Component, useState,useEffect } from "react";
import supabase from '../SupabaseClient';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const OrderPage = (props) => {
    const [showAlert, setShowAlert] = useState(false);

    const toggleAlert = () => {
        setShowAlert(!showAlert);
    }

    const [Order,setOrder]=useState({})
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        
          const orderDataResult= await supabase
          .from("Order")
          .select()
          .eq("uid", localStorage.getItem("userid"));
  
        
          if (
         orderDataResult.error
          ) {
            let errorMessage = "";
            if (orderDataResult.error) errorMessage += "Error in Order fatching\n";
           
  
            setOrder(null)
            console.error(
             orderDataResult.error
            );
          } else {
            setOrder(orderDataResult.data)
           
  
  
            // if (cartDataResult.data && cartDataResult.data.length > 0) {
            //   console.log(cartDataResult.data[0].uid);
            //   console.log(cartDataResult.data[0].citem);
            //   console.log(typeof Number(userId1));
            //   console.log(typeof localStorage.getItem("userid"));
             
            // }
            console.log(orderDataResult.data);
          }
        } catch (error) {
         setOrder(null)
          console.error(error);
        }
      };
  
      fetchData();
    }, [props.custumfinal,Order]);

    const CancleOrder = async (itemid) => {
      try {
        // Fetch the existing JSON data from Supabase
        const { data, error } = await supabase
          .from("Order")
          .delete()
          .eq("Oid", itemid) // Delete the row with the specified itemid
        if (error) {
          throw error;
        }
        
        // Assuming you have access to the table DOM element
        const tableRow = document.getElementById(`row-${itemid}`);
        if (tableRow) {
          tableRow.remove(); // Remove the row from the table
          window.location.reload();

        } else {
          console.error("Row not found");
          window.location.reload();

        }
      } catch (error) {
        console.error("Error deleting object:", error.message);
      }
    };
    
    return (
        <div className='AppIP'>
            {props.setcheck(1)}
            <br/><br/><br/>
      
            <h1 >OREDERS</h1>
            {Object.keys(Order).length === 0 ?(          <p className="empty-cart-message">Empty</p>
):(
            <table
        // style={{
        //   width: "1000px",
        //   marginLeft: "50px",
        //   backgroundColor: "white",
        //   textAlign: "center",
        //   borderCollapse: "collapse", 
        //   border: "2px solid white",          }}
        style={{
          fontSize:'0.9vmax',
          width: "1000px",
          height: "auto",
          textAlign: "center",
          backgroundColor: "white",
          overflowY: "auto",
          margin: "0 auto", // This will horizontally center-align the div
        }}
        
      >
        <thead>
          <tr>
            <th
              style={{
                color: "white",
                border: "1px solid black",
                // width: "200px",
              }}
            >
              Order ID
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Order Items
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Ordre Date
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Deliver Date
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Total Amount
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Status
              </th>
              <th style={{ color: "white", border: "1px solid black" }}>
                Delivery Address
                </th>


          </tr>
        </thead>
        <tbody>
        {Object.keys(Order).map((key, index) => (

        <tr style={{ height: "100px" }}>
        <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
             {Order[key].Oid}<br/><button 
             onClick={()=>{CancleOrder(Order[key].Oid)}}
             className='button-70'>Cancel</button>
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              
              <table>
              <thead>
          <tr>
            <th
              style={{
                color: "white",
                border: "1px solid black",
                width: "200px",
              }}
            >
              Product
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Title
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              price
            </th>
          

          </tr>
        </thead>
        <tbody>
        {Object.keys(Order[key].orderitems).map((key2, index) => (

        <tr style={{ height: "100px" }}>
        <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
             <img                     className="cart-item-image"
src={Order[key].orderitems[key2].image}/>
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
             {Order[key].orderitems[key2].name}
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
             {/* {Order[key].orderitems[key2].price} */}
             ₹{parseFloat(Order[key].orderitems[key2].price).toLocaleString("en-IN")}

            </td>
            
            </tr>))}
            </tbody>
              </table>
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
                whiteSpace: 'nowrap',
              }}
            >
             {Order[key].Odate}
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
                whiteSpace: 'nowrap',
              }}
            >
              {Order[key].Ddate}
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
                
              }}
            >
              {/* {Order[key].Tprice}  */}
              ₹{parseFloat(Order[key].Tprice).toLocaleString("en-IN")}

            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              {Order[key].status}
            </td>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
                textAlign:"left"
              }}
            >
              {Order[key].Saddress}
            </td>
            

</tr>))}
</tbody>
</table>)}
<div style={{          paddingBottom: "15rem", // Adjust the value to increase or decrease space at the bottom
}}>
      </div>        </div>
    );
}

const Ala = () => {
    return (
        <Alert
        status='success'
        variant='subtle'
        backgroundColor={"#3498db"}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for submitting your application. Our team will get back to you soon.
        </AlertDescription>
      </Alert>
    );
}

export default OrderPage;
