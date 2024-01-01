import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";
import { red } from "@material-ui/core/colors";
import { border, color } from "@mui/system";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
const Account=(props)=>{
    const [value, setValue] = useState(2)
    const [i,setI]=useState(useParams()['id'])

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
    return(
        <div className="App" >
           {/* {props.setcheck(true)} */}
            {/* {props.setselitem(i)} */}
            {props.setcheck(1)}
            {/* {ChoosPC()} */}
            <h1>Account</h1>
            </div>

            

    )
}

export default Account;