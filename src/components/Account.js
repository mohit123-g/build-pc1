import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";
import { red } from "@material-ui/core/colors";
import { border, color } from "@mui/system";
// import "./ItemPage.css";
import "./Account.css";
import { useParams } from "react-router-dom";
import { Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import supabase from "../SupabaseClient";
import { daDK } from "rsuite/esm/locales";

import { Resend } from "resend";
import { Add, Alarm } from "@mui/icons-material";
const Account = (props) => {
  const [value, setValue] = useState(2);
  const [i, setI] = useState(useParams()["id"]);
  const [PhoneNo, setPhoneNo] = useState(props.userprofile[0].phone);
  const [Address, setAddress] = useState(props.userprofile[0].address);

  const UpdateUserInfo = async (phon, address) => {
    let flag = 0;

    //  for(let k=0;k<props.cartdata.length;k++){
    //   if(props.cartdata[k].uid===t){
    // for (let i = 0; i < cartdataex[0].citem.length; i++) {
    //   var cidtemp = Number(cartdataex[0].citem[i].itemid);
    //   var idtemp = Number(newobjectex.itemid);
    //   console.log(cidtemp, "", idtemp, "  ");
    //   console.log(typeof cartdataex[0].uid);
    //   if (idtemp === cidtemp) {
    //     flag = 1;
    //   }
    // }
    // }}
    // if (flag === 0) {
    // Add the new object to the existing JSON data
    // const updatedData = [...existingdataex, newobjectex];
    try {
      // Update the Supabase table with the modified JSON data
      const { error } = await supabase
        .from("Users1") // Replace with your actual table name
        .update({ phone: phon, address: address })

        .eq("id", localStorage.getItem("userid")); // Replace 'id' with your unique identifier column and 'rowId' with the actual ID
      // .insert(
      //   {
      //     citem: updatedData,
      //     // ... other columns and their values
      //   },
      // );

      if (error) {
        throw error;
      }

      // console.log("New object added to JSON:", newobjectex);
      // window.location.reload();
      alert("User Information Update Successfully")
      // Perform any actions after successful insertion
    } catch (error) {
      console.error("Error inserting object:", error.message);
    }
    // }
  };

  return (
    <div className="AppIP">
      {/* {props.setcheck(true)} */}
      {/* {props.setselitem(i)} */}

      {props.setcheck(1)}
      {/* {ChoosPC()} */}
      <div>
        {" "}
        <br />
        <h1 style={{ color: "white" }}>Account</h1>
        <img
  src={props.userprofile[0].img}
  alt="Icon"
  style={{
    width: "300px",
    height: "300px",
    borderRadius: "50%", // Making it a circle
    marginLeft: "10px",
    padding: "3px", // Setting padding for all sides
    border: "10px solid black", // Border added separately
    backgroundColor: "white", // Adding a background color
  }}
/>

      <pre
  style={{
    color: "white",
    fontSize: 28,
    margin: "50px",
    fontWeight: "bold",
    fontFamily:"serif"
  }}
>
  <lable>User Name:</lable>{"     "}
  <input
    type="text"
    style={{
      fontSize: 24,
      marginTop: "20px",
      width: "500px",
      color: "black",
    }}
    value={props.userprofile[0].uname}
    readOnly  // Use readOnly instead of disabled to allow selection but not modification
  />
  <br />
  <lable>User Email:</lable>{"    "}
  <input
    type="text"
    style={{
      fontSize: 24,
      marginTop: "20px",
      width: "500px",
      color: "black",
    }}
    value={props.userprofile[0].email}
    readOnly  // Use readOnly instead of disabled to allow selection but not modification
  />
  <br />
  <lable>User Address:</lable>{"  "}
  <textarea
    type="text"
    onChange={(e) => {
      setAddress(e.target.value);
    }}
    style={{
      fontSize: 24,
      marginTop: "20px",
      width: "500px",
      color: "black",
      height: "100px",
    }}
    value={Address}
  />
  <br />
  <lable>User Phone No:</lable>{" "}
<input
  type="number"
  onChange={(e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      setPhoneNo(inputValue);
    }
  }}
  style={{
    fontSize: 24,
    marginTop: "20px",
    width: "500px",
    color: "black",
  }}
  value={PhoneNo}
/>


  <br />
  <br />
  <button
    style={{ height: "50px", width: "200px",fontSize:28 }}
    onClick={() => {
      if (PhoneNo === "" || Address === "") {
        alert("Address or Phone No can't be empty");
      } else {
        if (Address.length < 30 && Address !== "") {
          alert("Address can't be less than 30 characters");
        } else if (PhoneNo.length !== 10 && PhoneNo!=="" ) {
          alert("Phone No must be 10 digits");
        } 
        // else if(Address.length<30 && PhoneNo.length<10){
        //   alert("Address can't be less than 30 characters and Phone No must be 10 digits");
        // }
        else {
          UpdateUserInfo(PhoneNo, Address);
        }
      }}}
  >
    Save Changes
  </button>
</pre>

      </div>
      {/* re_g5ofAofJ_7Gj5FbqmEZqDtGBHMggzKm3B */}
      {/* <button onClick={()=>GET()}>sent</button> */}
    </div>
  );
};

export default Account;
