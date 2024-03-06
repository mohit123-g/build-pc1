import "../App.css";
import "./PaymentPage.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { color } from "@mui/system";
const PaymentPage = (props) => {
  const form = useRef();
  const [cartItems, setCartItems] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnfklwg",
        "template_wmxnlte",
        form.current,
        "XNroTxHzEKmtjHaVi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const calculateTotal = () => {
	return cartItems.reduce(
	  (total, item) => total + item.price * item.quantity,
	  0
	);
  };
  useEffect(() => {
    // for(let k=0;k<props.cartdata.length;k++){
    //   if(props.cartdata[k].uid===t){
    //     rowNo=k;
    //     // break;
    //   }
    //  }
    const updatedCartItems = [];

    for (let j = 0; j < props.cartdata[0].citem.length; j++) {
      // console.log(j);
      let cidtemp = Number(props.cartdata[0].citem[j].itemid);
      // console.log(cidtemp);
      for (let k = 0; k < props.pcdata.length; k++) {
        if (cidtemp === props.pcdata[k].id) {
          //   console.log(k);
          //   console.log("-------");
          updatedCartItems.push({
            id: props.pcdata[k].id,
            name: props.pcdata[k].name,
            price: props.pcdata[k].price,
            quantity: props.cartdata[0].citem[j].q,
            image: props.pcdata[k].img[0],
            details: props.pcdata[k].desc,
          });
        }
      }
      for (let k = 0; k < props.lapdata.length; k++) {
        if (cidtemp === props.lapdata[k].id) {
          //   console.log("lap"+k);
          //   console.log("-------");
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
    // console.log('Cart items updated for user with UID:', props.cartdata[0].uid);
    // console.log(props.cartdata[0].citem)
  }, [props.cartdata, props.pcdata, props.lapdata]);
  return (
    <div className="AppIP">
      <br />
      <br />
	  <br/>
      <h1 style={{ color: "white" }}>Payment</h1>
      {props.setcheck(1)}

      <div style={{
  width: '1000px',
  height: 'auto', // Set height to auto to allow it to expand dynamically
  textAlign: 'center',
  backgroundColor: 'white',
  overflowY: 'auto'
  }}>
	<h1 style={{textAlign:'left',marginLeft:'40px'}}>INVOICER</h1>
      <table style={{
  width: '800px',
  marginLeft: '100px',
//   marginTop:'500px',
  backgroundColor: 'transparent',
  textAlign:'center',
  borderCollapse: 'collapse', // Ensure borders collapse properly
  border: '2px solid white', // Set border to white
  
}}>
  <thead>
    <tr>
      <th style={{ color: 'white', border: '1px solid black' }}>Name</th>
      <th style={{ color: 'white', border: '1px solid black' }}>Quantity</th>
      <th style={{ color: 'white', border: '1px solid black' }}>Price</th>
      <th style={{ color: 'white', border: '1px solid black' }}>Amount</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item, index) => (
      <tr key={index}>
        <td style={{ color: 'black',fontWeight:'bold', border: '1px solid black' }}>{item.name}</td>
        <td style={{ color: 'black',fontWeight:'bold', border: '1px solid black' }}>{item.quantity}</td>
        <td style={{ color: 'black',fontWeight:'bold', border: '1px solid black' }}>₹{parseFloat(item.price).toLocaleString("en-IN")}</td>
        <td style={{ color: 'black',fontWeight:'bold', border: '1px solid black' }}>₹{parseFloat(parseInt(item.price) * parseInt(item.quantity)).toLocaleString("en-IN")}</td>
      </tr>
    ))}
  </tbody>
</table>
<h2 style={{marginLeft:'600px'}}>Total: ₹{parseFloat(calculateTotal()).toLocaleString('en-IN')}</h2>
        {console.log(cartItems)}
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input
            type="hidden"
            name="user_name"
            value={props.userprofile[0].uname}
          />
          {/* <label>Email</label> */}
          <input
            type="hidden"
            name="user_email"
            value={props.userprofile[0].email}
          />
          {/* <label>Message</label> */}
          <input type="hidden" name="message" value="helllo mohit here" />
          <input type="submit" value="Pay" style={{backgroundColor:'black',color:'white',
		height:'50px',width:'100px',marginLeft:'700px',marginBottom:'10px'
		}}/>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
