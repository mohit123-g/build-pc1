import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";
import { red } from "@material-ui/core/colors";
import { border, color } from "@mui/system";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import supabase from "../SupabaseClient";
// const Cart=(props)=>{
    // const [value, setValue] = useState(2)
    // const [i,setI]=useState(useParams()['id'])

import "./CartPage.css"; // Import your CSS file


const CartPage = (props) => {
  const [value, setValue] = useState(2);
  const [i, setI] = useState(useParams()["id"]);

  const [cartItems, setCartItems] = useState([ ]);
 let t=Number(props.userid1);
  // const [rowNo,setRowNo]=useState(-1);
  
// useEffect(()=>{
//   localStorage.setItem('cartItems',JSON.stringify(cartItems));
// },[cartItems]);
  
//   const cartitems1=()=>{
//     const item = []; //array of buttons
//     // for (let i =0; i < props.cart1.length; i++) {
      
//     //     for(let j =0; j < props.cart1.citem.ca    rtid.length; j++){
//     //         const cid=props.cart1.citem.id[i][j]; 
//     //          const quant=props.cart1.citem.cartid[i][j].q; 
//     //          if(cid===props.pcdata[j].id) {
//              setCartItems({ 
//                 id: props1.pcdata[0].id,
//                   name:props1.pcdata[0].name ,
//                   price: props1.pcdata[0].price,
//                   quantity: "1",
//                   image:props1.pcdata[0].img,
//                   details: "img 1"},);
//         // }}
//         // setCartItems({ uid: props.cart.userid },{citem:props.cart.item});
//         // console.log('Cart items updated for user with UID:', props1.cartdata[0].id);
    
    
//  }



useEffect(() => {
  // for(let k=0;k<props.cartdata.length;k++){
  //   if(props.cartdata[k].uid===t){
  //     rowNo=k;
  //     // break;
  //   }
  //  }
  const updatedCartItems = [];
 
          for (let j = 0; j < props.cartdata[0].citem.length; j++) {
      console.log(j);
      var cidtemp = Number(props.cartdata[0].citem[j].itemid);
      
      for(let k=0;k<props.pcdata.length;k++){
      if (cidtemp === props.pcdata[k].id) {
        console.log(k);
        console.log("-------");
        updatedCartItems.push({ 
          id: props.pcdata[k].id,
          name: props.pcdata[k].name,
          price: props.pcdata[k].price,
          quantity: props.cartdata[0].citem[j].q,
          image: props.pcdata[k].img[0],
          details: props.pcdata[k].desc,
        });
      }
      if (cidtemp === props.lapdata[k].id) {
        console.log(k);
        console.log("-------");
        updatedCartItems.push({ 
          id: props.lapdata[k].id,
          name: props.lapdata[k].name,
          price: props.lapdata[k].price,
          quantity: props.cartdata[0].citem[j].q,
          image: props.lapdata[k].img[0],
          details: props.lapdata[k].desc,
        });
      }
    }
    }
 
  setCartItems(updatedCartItems);
  console.log('Cart items updated for user with UID:', props.cartdata[0].uid);
}, [props.cartdata, props.pcdata]);
  
  
const deleteJsonObject = async (itemIdToDelete) => {
  try {
    // Fetch the existing JSON data from Supabase
    const { data, error } = await supabase
      .from('Cart') // Replace with your actual table name
      .select('citem') // Replace with the actual column name
       .eq('uid',localStorage.getItem('userid'));
    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      // Get the existing JSON data array
      const existingData = data[0].citem;

      // Find the index of the object to delete based on itemIdToDelete
      const deleteIndex = existingData.findIndex(
        (item) => item.itemid === itemIdToDelete
      );

      if (deleteIndex !== -1) {
        // Remove the object from the JSON data array
        existingData.splice(deleteIndex, 1);

        // Update the Supabase table with the modified JSON data (without the deleted object)
        const { error } = await supabase
          .from('Cart') // Replace with your actual table name
          .update({ citem: existingData })
          .eq('uid', localStorage.getItem('userid')); // Replace 'uid' with your unique identifier column and '11' with the actual UID

        if (error) {
          throw error;
        }

        console.log('Object deleted successfully');
        // Perform any actions after successful deletion
      } else {
        console.log('Object not found');
      }
    }
  } catch (error) {
    console.error('Error deleting object:', error.message);
  }
};

// Usage: Call deleteJsonObject with the item ID you want to delete


const updateJsonColumn = async (itemId, newQuantity) => {
  try {
    // Fetch the 'citem' column from Supabase
    const { data: cartData, error: cartError } = await supabase
      .from('Cart')
      .select('citem')
      .eq('uid', localStorage.getItem('userid')); // Replace 'cid' and '11' with your actual identifier

    if (cartError) {
      throw cartError;
    }

    if (cartData && cartData.length > 0) {
      // Get the existing 'citem' data
      const existingCitem = cartData[0].citem;

      // Find the index of the item to update based on itemId
      const itemIndex = existingCitem.findIndex(item => item.itemid === itemId);

      if (itemIndex !== -1) {
        // Update the quantity of the item
        existingCitem[itemIndex].q = newQuantity;

        // Perform the update by sending the modified 'citem' data
        const { error: updateError } = await supabase
          .from('Cart')
          .update({ citem: existingCitem })
          .eq('uid', localStorage.getItem('userid')); // Replace 'cid' and '11' with your actual identifier

        if (updateError) {
          throw updateError;
        }
       if(newQuantity===0){deleteJsonObject(itemId);
        removeItem(itemId);
      }

        console.log('JSON column updated successfully');
        // Perform any actions after successful update
      } else {
        console.log('Item not found in citem array');
      }
    }
  } catch (error) {
    console.error('Error updating JSON column:', error.message);
  }
};
//update "q"^

  const [selectedProductId, setSelectedProductId] = useState(null);

  const removeItem = (itemId) => {
  
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity =(itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);

  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const showDetails = (itemId) => {
    setSelectedProductId(itemId === selectedProductId ? null : itemId);
  };

  return (
    <div className="App">
          
           {/* {cartitems1()} */}
           {/* {props.setcheck(true)} */}
      {/* {props.setselitem(i)} */}
      {props.setcheck(1)}
  
      {/* {ChoosPC()} */}
      {/* {console.log(props.cartdata[0].citem[0].q)} */}
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">Price: ₹{item.price}</p>
                    <div className="quantity-control">
                      <button
                        onClick={() =>{ 
                        
                        decreaseQuantity(item.id);
                        
                        updateJsonColumn(item.id, (Number(item.quantity)-1));
                      }}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        onClick={() =>{ 
                      
                          increaseQuantity(item.id);
                          // console.log(item.id, (Number(item.quantity)+1));

                          updateJsonColumn(item.id, (Number(item.quantity)+1));
                        }}
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => showDetails(item.id)}
                      className="cart-item-details-button"
                    >
                      {selectedProductId === item.id
                        ? "Hide Details"
                        : "Show Details"}
                    </button>
                    {selectedProductId === item.id && (
                      <div className="cart-item-more-details">
                        <p>{item.details}</p>
                      </div>
                    )}
                    <button
                      onClick={() =>{ 
                        deleteJsonObject(Number(item.id));
                        removeItem(item.id);}}
                      className="cart-item-remove"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total-container">
              <h3 className="cart-total">Total: ₹{calculateTotal()}</h3>
              <button className="cart-checkout">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
