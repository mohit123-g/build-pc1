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
  


const Account=(props)=>{
    const [value, setValue] = useState(2)
    const [i,setI]=useState(useParams()['id'])
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
 return (
    <div className="App">
      {/* <div className="hollow-tab"> */}
        {/* <img
          className="w-100"
          src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
          alt="Product"
        />
        <h2 style={{ color: "black" }}>Operating System</h2> */}

        {/* <Select
          className={classes.select}
          value={value}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ "aria-label": "Select" }}
        >
          <option value="" disabled>
            Choose an option
          </option>
          <option value={0}>Features</option>
          <option value={1}>Size</option>
          <option value={2}>Ports</option>
          <option value={3}>Power</option>
        </Select>
      </div>

      <Paper>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Features" />
          <Tab label="Size" />
          <Tab label="Ports" />
          <Tab label="Power" />
        </Tabs>
        {Detail(value)}
      </Paper> */}
    
           {/* {props.setcheck(true)} */}
            {/* {props.setselitem(i)} */}
            {props.setcheck(1)}
            {/* {ChoosPC()} */}
            <h1>Account</h1>
            
    </div>
  );
}

export default Account;