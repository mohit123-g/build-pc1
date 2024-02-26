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

import { Resend } from 'resend';
const Account = (props) => {
  const [value, setValue] = useState(2);
  const [i, setI] = useState(useParams()["id"]);
  
  
  return (
    <div className="AppIP">
      {/* {props.setcheck(true)} */}
      {/* {props.setselitem(i)} */}

      {props.setcheck(1)}
      {/* {ChoosPC()} */}
      <div>
        {" "}
        <h1 style={{ color: "white" }}>Contact Us</h1>
        <hr />
        <div className="gridc">
          <div className="gridi">
            {/* <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61QpAaHilBL._AC_UY218_.jpg"/> */}
            <WhatsAppIcon style={{ width: "80px", height: "80px" }} />
            <br />
            <h3>(+19)0000000000</h3>
          </div>
          <div className="gridi">
            <CallIcon style={{ width: "80px", height: "80px" }} />
            <br />
            <h3>orgpc@gmail.com</h3>
            {/* <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61QpAaHilBL._AC_UY218_.jpg"/> */}
          </div>
          <div className="gridi">
            <AccessAlarmsIcon style={{ width: "80px", height: "80px" }} />
            <br />
            <h5>Mon - Fri : 10.30am - 08.00pm</h5>
            <h5>Sat - Sun : 10.00am - 04.00pm</h5>
            {/* <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61QpAaHilBL._AC_UY218_.jpg"/> */}
          </div>
        </div>
      </div>
      {/* re_g5ofAofJ_7Gj5FbqmEZqDtGBHMggzKm3B */}
          {/* <button onClick={()=>GET()}>sent</button> */}
    </div>
  );
};

export default Account;
