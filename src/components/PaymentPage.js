import "../App.css";
import "./PaymentPage.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { color } from "@mui/system";
const PaymentPage = (props) => {
  const form = useRef();
  const [cartItems, setCartItems] = useState([]);
  const [Orderid, setOrderid] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5j99gty",
        "template_6l2czfn",
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

  // const generateRandomHex = () => {
  //   const hexChars = '0123456789ABCDEF';
  //   let hex = '';
  //   for (let i = 0; i < 10; i++) {
  //     hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  //   }
  //   setOrderid(hex)
  //    return hex;
  // }
  useEffect(() => {
    // Generate ORDER ID once on component mount
    generateRandomHex();
  }, []);

  const generateRandomHex = () => {
    const hexChars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < 10; i++) {
      hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    setOrderid(hex);
  };
  return (
    <div className="AppIP">
      <br />
      <br />
      <br />
      <h1 style={{ color: "white" }}>Payment</h1>
      {props.setcheck(1)}

      <div
        style={{
          width: "1000px",
          height: "auto", // Set height to auto to allow it to expand dynamically
          textAlign: "center",
          backgroundColor: "white",
          overflowY: "auto",
        }}
      >
        <h1 style={{ textAlign: "left", marginLeft: "40px" }}>INVOICE</h1>
        <div style={{ display: "flex" }}>
          <div>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              ORDER ID:
              <strong style={{ fontFamily: "cursive" }}>{Orderid}</strong>
            </h3>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              Order Date:{" "}
              <strong style={{ fontFamily: "cursive" }}>
                {new Date().toDateString()}
              </strong>
            </h3>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              Invoice Date:{" "}
              <strong style={{ fontFamily: "cursive" }}>
                {new Date().toDateString()}
              </strong>
            </h3>
          </div>
          <div>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              Ship To Address:{" "}
              <strong style={{ fontFamily: "cursive" }}>
                {props.userprofile[0].address.split(",").map((part, index) => (
                  <div key={index} style={{ marginBottom: "6px" }}>
                    {part.trim()}
                  </div>
                ))}
              </strong>
            </h3>
          </div>
          <div>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              Bill To:
              <strong style={{ fontFamily: "cursive" }}>
                {props.userprofile[0].uname}
              </strong>{" "}
            </h3>
            <h3
              style={{
                textAlign: "left",
                marginLeft: "40px",
                fontFamily: "initial",
              }}
            >
              Phone No:
              <strong style={{ fontFamily: "cursive" }}>
                {props.userprofile[0].phone}
              </strong>{" "}
            </h3>
          </div>
        </div>
        <table
          style={{
            width: "800px",
            marginLeft: "100px",
            //   marginTop:'500px',
            backgroundColor: "transparent",
            textAlign: "center",
            borderCollapse: "collapse", // Ensure borders collapse properly
            border: "2px solid white", // Set border to white
          }}
        >
          <thead>
            <tr>
              <th style={{ color: "white", border: "1px solid black" }}>
                Name
              </th>
              <th style={{ color: "white", border: "1px solid black" }}>
                Quantity
              </th>
              <th style={{ color: "white", border: "1px solid black" }}>
                Price
              </th>
              <th style={{ color: "white", border: "1px solid black" }}>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  ₹{parseFloat(item.price).toLocaleString("en-IN")}
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  ₹
                  {parseFloat(
                    parseInt(item.price) * parseInt(item.quantity)
                  ).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 style={{ marginLeft: "600px" }}>
          Total: ₹{parseFloat(calculateTotal()).toLocaleString("en-IN")}
        </h2>
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
          <input type="hidden" name="OID" value={Orderid} />
          <input
            type="hidden"
            name="address"
            value={props.userprofile[0].address}
          />

          <input type="hidden" name="Odate" value={new Date().toDateString()} />
          <input
            type="hidden"
            name="uname"
            value={props.userprofile[0].uname}
          />
          <input type="hidden" name="Idate" value={new Date().toDateString()} />
          <input
            type="hidden"
            name="phone"
            value={props.userprofile[0].phone}
          />
        {/* <input type="hidden" name="row15" value="none" /> */}
        {/* <input type="hidden" name="row2" value="none" /> */}

 {/* <input
    type="hidden"
    name="obj1_1"
    value={JSON.stringify(cartItems[0].name)}
/>
<input
    type="hidden"
    name="obj1_2"
    value={JSON.stringify(cartItems[0].quantity)}
/>
<input
    type="hidden"
    name="obj1_3"
    value={parseFloat(cartItems[0].price).toLocaleString("en-IN")}
/>
<input
    type="hidden"
    name="obj1_4"
    value={parseFloat(
      parseInt(cartItems[0].price) * parseInt(cartItems[0].quantity)
    ).toLocaleString("en-IN")}
/>
<input
    type="hidden"
    name="obj2_1"
    value={JSON.stringify(cartItems[1].name)}
/>
<input
    type="hidden"
    name="obj2_2"
    value={JSON.stringify(cartItems[1].quantity)}
/>
<input
    type="hidden"
    name="obj2_3"
    value={parseFloat(cartItems[1].price).toLocaleString("en-IN")}
/>
<input
    type="hidden"
    name="obj2_4"
    value={parseFloat(
      parseInt(cartItems[1].price) * parseInt(cartItems[1].quantity)
    ).toLocaleString("en-IN")}
/> */}


{cartItems.map((item, index) => (
  <React.Fragment key={index}>
    <input
      type="hidden"
      name={`obj${index + 1}_1`}
      value={item.name}
    />
    <input
      type="hidden"
      name={`obj${index + 1}_2`}
      value={JSON.stringify(item.quantity)}
    />
    <input
      type="hidden"
      name={`obj${index + 1}_3`}
      value={parseFloat(item.price).toLocaleString("en-IN")}
    />
    <input
      type="hidden"
      name={`obj${index + 1}_4`}
      value={parseFloat(item.price * item.quantity).toLocaleString("en-IN")}
    />
       {/* <input type="hidden" name="row1" value="none" /> */}
  </React.Fragment>
))}
{
  (() => {
    const elements = [];
    for (let i = cartItems.length+1; i <=15; i++) {
      elements.push(
        <input key={i} type="hidden" name={`row${i}`} value="none" />
      );
    }
    return elements;
  })()
}

<input
      type="hidden"
      name="total"
      value={parseFloat(calculateTotal()).toLocaleString("en-IN")}
    />
          {/* <input type="hidden" name="message" value="helllo mohit here" /> */}
          <input
            type="submit"
            value="Pay"
            style={{
              backgroundColor: "black",
              color: "white",
              height: "50px",
              width: "100px",
              marginLeft: "700px",
              marginBottom: "10px",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
