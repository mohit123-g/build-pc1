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
// const useStyles = makeStyles((theme) => ({
//     select: {
//       "&:before": {
//         borderBottom: "none",
//       },
//       "&:after": {
//         borderBottom: "none",
//       },
//       "& .MuiSelect-icon": {
//         color: "black",
//       },
//     },
//   }));

// import { useState } from 'react'
// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key')

// function EmailForm() {
  // const [email, setEmail] = useState('')
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setLoading(true)

  //   const { data, error } = await supabase
  //     .from('users')
  //     .select('email')
  //     .eq('id', 1)

  //   const recipientEmail = data[0].email

  //   const { data: emailData, error: emailError } = await supabase
  //     .from('email')
  //     .insert([
  //       {
  //         to: recipientEmail,
  //         subject: 'Hello from Supabase',
  //         body: email,
  //       },
  //     ])

  //   if (emailError) {
  //     console.error(emailError)
  //   } else {
  //     console.log('Email sent successfully')
  //   }

  //   setLoading(false)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Email:
  //       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
  //     </label>
  //     <button type="submit" disabled={loading}>
  //       {loading ? 'Sending...' : 'Send Email'}
  //     </button>
  //   </form>
  // )
// }
import { Resend } from 'resend';
const Account = (props) => {
  const [value, setValue] = useState(2);
  const [i, setI] = useState(useParams()["id"]);
  //     const classes = useStyles();
  //     const handleChange = (event, newValue) => {
  //         setValue(newValue);
  //       };

  //       const handleSelectChange = (event) => {
  //         // handle select menu change here
  //       };

  //     const Detail=(c)=>{
  //        if( props.selectdata && props.selectdata.length > i ){
  //          if(c==0){
  //             return(<div className="but1">
  //               <h3>Technology</h3>
  //                  <h4>{props.selectdata[i].features.Technology}</h4>
  //                  <h3>Display</h3>
  //                  <h4>{props.selectdata[i].features.Display}</h4>
  //                  <h3>Special</h3>
  //                  <h4>{props.selectdata[i].features.Special}</h4>
  //             </div>)
  //          }
  //          if(c==1){
  //             return(<div className="but1">
  //               <h3>Dimensions & Weight</h3>
  //                  <h4>{props.selectdata[i].size.Dimensions}</h4>

  //             </div>)
  //          }
  //          if(c==2){
  //             return(<div className="but1">
  //               <h3>Bays</h3>
  //                  <h4>{props.selectdata[i].ports.Bays}</h4>
  //                  <h3>USB</h3>
  //                  <h4>{props.selectdata[i].ports.USB}</h4>
  //                  <h3>Ports</h3>
  //                  <h4>{props.selectdata[i].ports.Port}</h4>
  //             </div>)
  //          }
  //          if(c==3){
  //             return(<div className="but1">
  //               <h3>Power & Battery</h3>
  //                  <h4>{props.selectdata[i].power}</h4>

  //             </div>)
  //          }
  //         }else{
  //            return( <div>No image available</div>);}

  //     }

  //     const ChoosPC=()=>{
  //        if(props.sel=="PC"){
  //         return(
  //             <div className="App1">
  //                 <div ><h2>Which Type of PC You Want:</h2></div>
  //              {/* <div className="App1"> */}
  //              <div  className="my-grid-container1">
  //             <div  className="my-grid-item1">
  //                 <h3>Custum PC</h3>
  //                 <img id="but3" src="https://themvp.in/catalog/view/assets/img/PC-Avinash-Singh.webp"/>
  //             </div>
  //             <div  className="my-grid-item1">
  //                 <h3>PreBuild PC</h3>
  //                 <img id="but3" src="https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672"/>
  //             </div>
  //             <div  className="my-grid-item1">
  //                 <h3>Laptop</h3>
  //                 <img id="but3" src="https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"/>
  //             </div>
  //             </div>
  //             {/* </div> */}
  //         </div>)
  //        }
  //         else
  //        {
  //         return (
  //             <div
  //                 style={{
  //                     backgroundColor:"purple"}}
  //                     >
  //                 <div>
  //   {props.selectdata && props.selectdata.length > i ? (
  //     <img
  //       id="but2"
  //       src={props.selectdata[i].img}

  //     />
  //   ) : (
  //     <div>No image available</div>
  //   )}
  // </div>
  //                 {console.log(i)}
  //                 <Paper >
  //                     <Tabs  style={{color:'white'}} className="App"
  //                         value={value}
  //                         textColor="red"
  //                         indicatorColor="primary"
  //                         onChange={(event, newValue) => {
  //                             setValue(newValue);
  //                         }}
  //                     >
  //                         <Tab label="Features" />
  //                         <Tab label="Size" />
  //                         <Tab label="Ports"  />
  //                         <Tab label="Power" />
  //                     </Tabs>
  //                     {Detail(value)}
  //                 </Paper>
  //             </div>
  //         );

  //        }
  //     }
  // const Detail=(c)=>{
  //     if( props.lapdata && props.lapdata.length > i ){
  //       if(c==0){
  //          return(<div style={{textAlign:'left'}}>
  //            <h3 >Technology</h3>
  //               <h5>{props.lapdata[0].spec.features.Technology}</h5>
  //               <h3>Display</h3>
  //               <h5>{props.lapdata[0].spec.features.Display}</h5>
  //               <h3>Special</h3>
  //               <h5>{props.lapdata[0].spec.features.Special}</h5>
  //          </div>)
  //       }
  //       if(c==1){
  //          return(<div style={{textAlign:'left'}} >
  //            <h3>Dimensions & Weight</h3>
  //               <h5>{props.lapdata[0].spec.size.Dimensions}</h5>

  //          </div>)
  //       }
  //       if(c==2){
  //          return(<div style={{textAlign:'left'}}>
  //            <h3>Bays</h3>
  //               <h5>{props.lapdata[0].spec.ports.Bays}</h5>
  //               <h3>USB</h3>
  //               <h5>{props.lapdata[0].spec.ports.USB}</h5>
  //               <h3>Ports</h3>
  //               <h5>{props.lapdata[0].spec.ports.Port}</h5>
  //          </div>)
  //       }
  //       if(c==3){
  //          return(<div style={{textAlign:'left'}}>
  //            <h3>Power & Battery</h3>
  //               <h4>{props.lapdata[0].spec.power}</h4>

  //          </div>)
  //       }
  //      }else{
  //         return( <div>No image available</div>);}

  //  }
  // re_78vtBqZg_BP8LabG8vywdksxXFPRnxM2F

  
  
  // re_78vtBqZg_BP8LabG8vywdksxXFPRnxM2F
  
  
  

const resend = new Resend('re_KVeTXjrr_Bi77AdzL5Z1h3nuYSuYwtKS4');
const  GET=async()=>{
await resend.emails.send({
  from: 'meenas.gupta@gmail.com',
  to: ['mg53689@gmail.com'],
  subject: 'hello world',
  html: '<h1>it works!</h1>',
  
});
}
  
  return (
    <div className="App">
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

          <button onClick={()=>GET()}>sent</button>
     
    </div>
  );
};

export default Account;
