import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";
import { red } from "@material-ui/core/colors";
import { border, color, display, fontSize, width } from "@mui/system";
import Dropdown from "rsuite/Dropdown";
import App from "../App";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { insertJsonObject } from "./Ecom";

// import { Select } from "@mui/material";
const LapPage = (props) => {
  const [value, setValue] = useState(0);
  const [i, setI] = useState(useParams()["id"]);
  // const [build, setBuild] = useState([
  //   [false, false],
  //   [false, false],
  //   [false, false],
  //   [false, false]
  // ]);
  // const [selectedTab, setSelectedTab] = useState('');
  const [optionsVisible, setOptionsVisible] = useState(false);

  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const [dropdowns, setDropdowns] = useState([
    {
      isOpen: false,
      imgSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-93d8ad27-33b9-4043-9777-893415f0a64e.png",
      contentSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-93d8ad27-33b9-4043-9777-893415f0a64e.png",
      title: "DISPLAY TYPE",
    },
    {
      isOpen: false,
      imgSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-21ee87e0-5de2-4731-ba3d-462b14377019.png",
      contentSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-21ee87e0-5de2-4731-ba3d-462b14377019.png",
      title: "MEMORY",
    },
    {
      isOpen: false,
      imgSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png",
      contentSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png",
      title: "OPERATING SYSTEM",
    },
    {
      isOpen: false,
      imgSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-a2ccd717-ba43-4114-a424-f10ee4dababb.png",
      contentSrc:
        "https://cdn.originpc.com/opc/product/opc-blob-a2ccd717-ba43-4114-a424-f10ee4dababb.png",
      title: "OPERATING SYSTEM DRIVER",
    },
    // Add more dropdowns here in the same format
    // { isOpen: false, imgSrc: '...', contentSrc: '...', title: 'Dropdown Title' },
  ]);

  const toggleDropdown = (index) => {
    const updatedDropdowns = dropdowns.map((dropdown, i) => {
      if (i === index) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      } else {
        return { ...dropdown, isOpen: false };
      }
    });
    setDropdowns(updatedDropdowns);
  };

  const toggleDropdownspec = () => {
    setFirstDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  // const updateBooleanValue = (rowIndex, columnIndex, newValue) => {
  //   setBuild(prevBuild => {
  //     // Create a new array to ensure immutability
  //     const newBuild = [...prevBuild];
  //     // Update the specified boolean value
  //     newBuild[rowIndex][columnIndex] = newValue;
  //     // Return the updated array
  //     return newBuild;
  //   });
  // };

  const [selectedImageL, setSelectedImageL] = useState(
    // 'https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71NkSeJt6zL._SL1500_.jpg'
        props.lapdata[i].img[0]
    );
  const handleImageClickL = (image) => {
    setSelectedImageL(image);
  };


  // const [selectedImagePC, setSelectedImagePC] = useState(
  //   // 'https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71NkSeJt6zL._SL1500_.jpg'
  //       props.pcdata[i].img[0]
  //   );
  // const handleImageClickPC = (image) => {
  //   setSelectedImagePC(image);
  // };
  // const images = [
  //   "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61mqsMjGJlL._SL1500_.jpg",
  //   "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51PiiqxZ7NL._SL1500_.jpg",
  //   "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61NgS936-eL._SL1500_.jpg",
  //   "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61qkmgJBLaL._SL1500_.jpg",
  //   "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81VImoKsWAL._SL1500_.jpg"
  // ];



  // const toggleOptions = () => {
  //   setOptionsVisible(!optionsVisible);
  // };

  // const toggleFirstDropdown = () => {
  //   setFirstDropdownOpen(!firstDropdownOpen);
  //   setSecondDropdownOpen(false);
  // };

  // const toggleSecondDropdown = () => {
  //   setSecondDropdownOpen(!secondDropdownOpen);
  //   setFirstDropdownOpen(false); // Optional: If you want to close the first dropdown when the second one is opened
  // };

  const Detail = (c) => {
    if (props.lapdata && props.lapdata.length > i) {
      if (c == 0) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", fontSize:25,marginTop:"10px" }}>
          
           <h5 >
  {props.lapdata[i].spec.General.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5></div>
        );
      }
      if (c == 1) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px", fontSize:25 }}>
            <h5 >
  {props.lapdata[i].spec.Processor_Memeory.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5></div>
        );
      }
      if (c == 2) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px" , fontSize:25}}>
         <h5 >
  {props.lapdata[i].spec.OS.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5></div>
        );
      }
      if (c == 3) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px" , fontSize:25}}>
            <h5>
  {props.lapdata[i].spec.Port_Slot.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5> </div>
        );
      }
      if (c == 4) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px", fontSize:25 }}>
            <h5>
  {props.lapdata[i].spec.Display_Audio.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5></div>
        );
      }
      if (c == 5) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px", fontSize:25}}>
            <h5 >
  {props.lapdata[i].spec.Connectivity.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5>
<h5 >
  {props.lapdata[i].spec.Warranty.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5>
</div>
        );
      }
      if (c == 6) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px", fontSize:25}}>
          <h5 >
  {props.lapdata[i].spec.Dimensions.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5></div>
        );
      }
      if (c == 7) {
        return (
          <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px" , fontSize:25}}>
          <h5 >
  {props.lapdata[i].spec.AdditionalFeatures.split('`').map((part, index) => (
    <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
  ))}
</h5>  </div>
        );
      }
    } else {
      return <div>No image available</div>;
    }
  };
//   const Detailpc = (c) => {
//     if (props.pcdata && props.pcdata.length > i) {
//       if (c == 0) {
//         return (
//           <div style={{ textAlign: "left", fontWeight: "bold", fontSize:25,marginTop:"10px" }}>
          
//            <h5 >
//   {props.pcdata[i].spec.ProcessorMemory.split('`').map((part, index) => (
//     <div key={index} style={{marginBottom:'6px',}}>{part.trim()}</div>
//   ))}
// </h5></div>
//         );
//       }
     
//       if (c == 1) {
//         return (
//           <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px" , fontSize:25}}>
//          <h5 >
//   {props.pcdata[i].spec.Storage.split('`').map((part, index) => (
//     <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
//   ))}
// </h5></div>
//         );
//       }
//       if (c == 2) {
//         return (
//           <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px" , fontSize:25}}>
//             <h5>
//   {props.pcdata[i].spec.GraphicsConnectivity.split('`').map((part, index) => (
//     <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
//   ))}
// </h5> </div>
//         );
//       }
//       if (c == 3) {
//         return (
//           <div style={{ textAlign: "left", fontWeight: "bold", marginTop:"10px", fontSize:25 }}>
//             <h5>
//   {props.pcdata[i].spec.DimensionsMiscellaneous.split('`').map((part, index) => (
//     <div key={index} style={{marginBottom:'6px'}}>{part.trim()}</div>
//   ))}
// </h5></div>
//         );
//       }
    
//     } else {
//       return <div>No image available</div>;
//     }
//   };
  const ChoosPC = () => {
//     if (props.sel == "PC") {
//       return (
//         <div>
//          <pre style={{ color: "white" ,fontFamily:'serif'}}>
//             {" "}
//             <h1>
//               {props.pcdata[i].name}

              
//             </h1>
//             <h2>₹{" "}{parseFloat(props.pcdata[i].price).toLocaleString('en-IN')}</h2>
//           </pre>
//           <h2 style={{ color: "black" }}>
//          <pre>
//           {/* <button className="buy">Buy Now</button>{" "} */}
//             <button className="buy"
//               onClick={() => {
//                 props.setnewobject({
//                   ...props.newobject,
//                   itemid: Number(props.pcdata[i].id), // Assuming you want to update the 'itemid' in newObject
//                 });
//                 console.log(props.newobject);
//                 insertJsonObject(
//                   props.cartdata,
//                   props.newobject,
//                   props.existingdata
//                 );
//               }}
//             >
//               Add to Cart
//             </button></pre>
//           </h2>
//           {/* <div className="centered-container"> */}
//           <div className="centered-contentpc">
//             {/* {props.pcdata && props.pcdata.length > i ? (
//               <img
//                 className="top-image" // Add a class for styling the image
//                 src={props.pcdata[i].img}
//               />
//             ) : (
//               <div>No image available</div>
//             )} */}

// <div className="app-container">
//       <div className="thumbnail-container">
//         {props.pcdata[i].img.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index + 1}`}
//             className="thumbnail-image"
//             onClick={() => handleImageClickPC(image)}
//           />
//         ))}
//       </div>
//       <div>
//         {selectedImagePC && (
//           <img
//             src={selectedImagePC}
//             alt="Selected Image"
//             className="selected-image"
//             // style={{width:'700px'}}
//           />
//         )}
//       </div>
//     </div>
//           </div>
//           {/* </div> */}
//           <br />
//           {/* <div>   */}
//           {/* <div >
//               <Select style={{color:'black' ,backgroundColor:'white', fontSize:'2'}} 
//               name="OPERATING SYSTEM">
         
                                       
//                 {console.log(i)}
//                 <Paper className="page-container1">
//                   <Tabs style={{color:'white', backgroundColor:'black'}}
//                     className="centered-tabs" 
//                     value={value}
//                     textColor="red"
//                     indicatorColor="primary"
//                     onChange={(event, newValue) => {
//                       setValue(newValue);
//                     }}
//                   >
//                    <Tab label="Features" />
//                     <Tab label="Size" />
//                     <Tab label="Ports" />
//                     <Tab label="Power" /> 
//                   </Tabs>
//                   {Detail(value)}
//                 </Paper>
              
//                 </Select>
//                 </div> */}
//           {/* </div> */}

//           {/* 
//           <div className="hollow-tab" style={{ marginBottom: firstDropdownOpen ? '50px' : '0' }}>
//       <button
//         style={{ width: '99%', display: 'flex' }}
//         onClick={toggleDropdownspec}
//         // className="dropbtn"
//       >
//         <img
//            className="w-100"
//            src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
//            onClick={() => {
//              setFirstDropdownOpen(!firstDropdownOpen);
//            }}
//         />
//       </button>
//       <h2
//               style={{ color: "white" }}
//               onClick={() => {
//                 setFirstDropdownOpen(!firstDropdownOpen);
//               }}
//             >
//                SPECIFICATIONS
//             </h2>
//       <br />
//       <br />
//       {firstDropdownOpen && (
//               <div className="options" id="options">
//                 <Paper className="page-container1">
//                   <Tabs
//                     style={{ color: "white", backgroundColor: "black" }}
//                     value={value}
                  
//                     indicatorColor="primary"
//                     onChange={(event, newValue) => {
//                       setValue(newValue);
//                     }}
//                   >
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Features"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Size"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Ports"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Power"
//                     />
//                   </Tabs>
//                   {Detail(value)}
//                 </Paper>
            
//               </div>
//             )}
//     </div> */}

//           <div className="hollow-tabpc">
//                {/* <img
//               className="w-100"
//               src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
//               onClick={() => {
//                 setOptionsVisible(!optionsVisible);
//               }}
//             /> */}
//             <h2
//               style={{ color: "white" ,marginTop:'-410px'}}
//               onClick={() => {
//                 setOptionsVisible(!optionsVisible);
//               }}
//             >
//               SPECIFICATIONS ▼
//             </h2>
//             {/* <div
//               onClick={() => {
//                 setOptionsVisible(!optionsVisible);
//               }}
//               className="arrow-down"
//             >
//               ▼
//             </div> */}
//             {optionsVisible && (
//               <div className="optionspc" >
//                 {/* <Paper className="page-container1"> */}
//                 {/* <Tabs 
//                     style={{ color: "white", backgroundColor: "black"  }}
//                     value={value}
                  
//                     indicatorColor="primary"
//                     onChange={(event, newValue) => {
//                       setValue(newValue);
//                     }}
//                   >
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Features"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Size"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Ports"
//                     />
//                     <Tab
//                       className="centered-tabs"
//                       style={{ fontSize: 12 }}
//                       label="Power"
//                       />
//                   </Tabs> */}

//                 <div
//                   style={{
//                     color: "white",
//                     backgroundColor: "black",
//                     height: "50px",
//                   }}
//                   value={value}
//                   indicatorColor="primary"
//                   onChange={(event, newValue) => {
//                     setValue(newValue);
//                   }}
//                 >
//                   {/* Your custom styling */}

//                   <div
//                     // className="centered-tabs"
//                     style={{
//                       alignitems: "center",
//                       display: "flex",
//                       justifycontent: "center",
//                       fontSize: 30,
//                     }}
//                   >
//                     <div className="centered-tabs" onClick={() => setValue(0)}>
//                     Processor&Memory
//                     </div>
//                     <div className="centered-tabs" onClick={() => setValue(1)}>
//                     Storage
//                     </div>
//                     <div className="centered-tabs" onClick={() => setValue(2)}>
//                     Graphics&Connectivity
//                     </div>
//                     <div className="centered-tabs" onClick={() => setValue(3)}>
//                     Dimensions&Miscellaneous
//                     </div>
//                   </div>
//                 </div>
//                 {Detailpc(value)}
//                 {/* </Paper> */}
//               </div>
//             )}
//           </div>

//           {/* <div className="dropdown" style={{ marginBottom: secondDropdownOpen ? '10px' : '0' }}>
//         <button    style={{width:'99%',display:'flex'}}
//         onClick={() => {
//           setFirstDropdownOpen(!firstDropdownOpen);
//           setSecondDropdownOpen(false);
//         }} className="dropbtn">
//           <img  style={{height:'50px'}}  src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
//          /> <h2>CORE CONFIG</h2>
//         </button>
//         {firstDropdownOpen && (
//           <div className="dropdown-content">
//            <img src={"https://cdn.originpc.com/opc/product/opc-blob-3b1a63f7-10b4-44ac-abe7-9ea964d335a9.png"}    />
//           </div>
//         )}
//       </div>

//       <div className="dropdown" 
//       style={{ marginBottom:firstDropdownOpen ? '50px' : '0' }}>
//         <button  style={{width:'99%',display:'flex'}}
//         onClick={() => {
//           setSecondDropdownOpen(!secondDropdownOpen);
//           setFirstDropdownOpen(false);
//         }} 
//         className="dropbtn">
//              <img  style={{height:'50px'}} src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png" />
//              <h2>MEMORY</h2>


//         </button>
//         {secondDropdownOpen && (
//           <div className="dropdown-content">
//           <img src={"https://cdn.originpc.com/opc/product/opc-blob-21ee87e0-5de2-4731-ba3d-462b14377019.png"}    />
//           </div>
//         )}
//       </div> */}
//           {/* <div >
//             <h2 style={{ color: "white" }}>Build</h2>
//             {dropdowns.map((dropdown, index) => (
//               <div
//                 key={index}
//                 className="dropdown"
//                 style={{
//                   marginBottom: dropdown.isOpen && index !== 0 ? "50px" : "0",
//                 }}
//               >
//                 <button
//                   style={{ width: "800px", display: "flex" }}
//                   onClick={() => toggleDropdown(index)}
//                   className="dropbtn"
//                 >
//                   <img
//                     style={{ height: "50px" }}
//                     src={dropdown.imgSrc}
//                     alt={dropdown.title}
//                   />
//                   <h2>{dropdown.title}</h2>
//                 </button>{" "}
//                 <br />
//                 <br />
//                 {dropdown.isOpen && (
//                   <div
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns: "1fr 1fr",
//                       gap: "10px",
//                     }}
//                   >{console.log(build[0][1])}
//                     <div > 
//                       <img 
//                         // style={{ width: '300px', border:'5px solid white' }}
//                         className="dropdown-content"
//                         src={dropdown.contentSrc}
//                         alt={`Content for ${dropdown.title}`}
//                         onClick={() => {
//                          if(build[index][1]===false) {
//                           if(build[index][0]===false){
//                             updateBooleanValue(index, 0, true);
//                          }else
//                           {
//                             updateBooleanValue(index, 0, false);
//                           }
//                         }else{
//                           updateBooleanValue(index, 1, false);


//                           updateBooleanValue(index, 0, true);
//                         }
                        
//                         }}                      />

//                      {build[index][0]? 
//                     ( <AddCircleIcon
//                      style={{
//                        color: "green",
//                        fontSize: 30,
//                        marginLeft: "-45px",
//                        marginBottom: "160px",
//                      }}
//                    />):(
//                      <AddCircleOutlineIcon
//                      style={{
//                       color: "white",
//                       fontSize: 30,
//                       marginLeft: "-45px",
//                       marginBottom: "160px",
//                     }}
//                      />)
//                      }
//                     </div>
//                     <div>
//                       <img
//                         // style={{ width: '300px', backgroundColor: 'white' }}
//                         className="dropdown-content"
//                         src={dropdown.contentSrc}
//                         alt={`Content for ${dropdown.title}`}
//                         onClick={() => {
//                           if(build[index][0]===false) {

//                           if(build[index][1]===false){
//                             updateBooleanValue(index, 1, true);
//                          }else
//                           {
//                             updateBooleanValue(index, 1, false);
//                           }
//                         }else{
//                           updateBooleanValue(index, 0, false);
//                           updateBooleanValue(index, 1, true);
//                         }}}                      />

//                      {build[index][1]? 
//                     ( <AddCircleIcon
                    
//                      style={{
//                        color: "green",
//                        fontSize: 30,
//                        marginLeft: "-45px",
//                        marginBottom: "160px",
//                      }}
//                    />):(
//                      <AddCircleOutlineIcon
//                      style={{
//                       color: "white",
//                       fontSize: 30,
//                       marginLeft: "-45px",
//                       marginBottom: "160px",
//                     }}
//                      />)
//                      }
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div> */}
//           <br />
//           <br />
//           <br />
//           <div></div>
//         </div>
//       );
//     } else {
      return (
        <div>
          <pre style={{ color: "white" ,fontFamily:'serif'}}>
            {" "}
            <h1>
              {props.lapdata[i].name}

              
            </h1>
            <h2>₹{" "}{parseFloat(props.lapdata[i].price).toLocaleString('en-IN')}</h2>
          </pre>
          <h2 style={{ color: "black" }}>
         <pre>
            <button className="buy"
              onClick={() => {
                props.setnewobject({
                  ...props.newobject,
                  itemid: Number(props.lapdata[i].id), // Assuming you want to update the 'itemid' in newObject
                });
                console.log(props.newobject);
                insertJsonObject(
                  props.cartdata,
                  props.newobject,
                  props.existingdata
                );
              }}
            >
              Add to Cart
            </button></pre>
          </h2>
          {/* <div className="centered-container"> */}
          <div className="centered-content">
            {/* {props.lapdata && props.lapdata.length > i ? (
              <img
                className="top-image" // Add a class for styling the image
                src={props.lapdata[i].img}
              />
            ) : (
              <div>No image available</div>
            )} */}
            {/* <div className="top-image"> */}
            <div className="app-container">
      <div className="thumbnail-container">
        {props.lapdata[i].img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail-image"
            onClick={() => handleImageClickL(image)}
          />
        ))}
      </div>
      <div>
        {selectedImageL && (
          <img
            src={selectedImageL}
            alt="Selected-Image"
            className="selected-image"
            // style={{width:'700px'}}
          />
        )}
      </div>
    </div>
            {/* </div> */}

          </div>
          {/* </div> */}
          <br />
          {/* <div>   */}
          {/* <div >
              <Select style={{color:'black' ,backgroundColor:'white', fontSize:'2'}} 
              name="OPERATING SYSTEM">
         
                                       
                {console.log(i)}
                <Paper className="page-container1">
                  <Tabs style={{color:'white', backgroundColor:'black'}}
                    className="centered-tabs" 
                    value={value}
                    textColor="red"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                   <Tab label="Features" />
                    <Tab label="Size" />
                    <Tab label="Ports" />
                    <Tab label="Power" /> 
                  </Tabs>
                  {Detail(value)}
                </Paper>
              
                </Select>
                </div> */}
          {/* </div> */}

          {/* 
          <div className="hollow-tab" style={{ marginBottom: firstDropdownOpen ? '50px' : '0' }}>
      <button
        style={{ width: '99%', display: 'flex' }}
        onClick={toggleDropdownspec}
        // className="dropbtn"
      >
        <img
           className="w-100"
           src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
           onClick={() => {
             setFirstDropdownOpen(!firstDropdownOpen);
           }}
        />
      </button>
      <h2
              style={{ color: "white" }}
              onClick={() => {
                setFirstDropdownOpen(!firstDropdownOpen);
              }}
            >
               SPECIFICATIONS
            </h2>
      <br />
      <br />
      {firstDropdownOpen && (
              <div className="options" id="options">
                <Paper className="page-container1">
                  <Tabs
                    style={{ color: "white", backgroundColor: "black" }}
                    value={value}
                  
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Features"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Size"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Ports"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Power"
                    />
                  </Tabs>
                  {Detail(value)}
                </Paper>
            
              </div>
            )}
    </div> */}

          <div className="hollow-tab">
            {/* <img
              className="w-100"
              src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
            /> */}
            <h2
              style={{ color: "white" ,marginTop:'-520px'}}
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
            >
              SPECIFICATIONS ▼
            </h2>
            {/* <div
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
              className="arrow-down"
            >
              ▼
            </div> */}
            {!optionsVisible && (
              <div className="options" id="options">
                {/* <Paper className="page-container1"> */}
                {/* <Tabs 
                    style={{ color: "white", backgroundColor: "black"  }}
                    value={value}
                  
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Features"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Size"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Ports"
                    />
                    <Tab
                      className="centered-tabs"
                      style={{ fontSize: 12 }}
                      label="Power"
                      />
                  </Tabs> */}

                <div
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    height: "50px",
                  }}
                  value={value}
                  indicatorColor="primary"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  {/* Your custom styling */}

                  <div
                    // className="centered-tabs"
                    style={{
                      alignitems: "center",
                      display: "flex",
                      justifycontent: "center",
                      fontSize: 30,
                    }}
                  >
                    <div className="centered-tabs" onClick={() => setValue(0)}>
                      General
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(1)}>
                    Processor & Memeory
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(2)}>
                    Operating System
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(3)}>
                    Port & Slot
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(4)}>
                    Display & Audio 
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(5)}>
                    Connectivity & Warranty 
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(6)}>
                    Dimensions 
                    </div>
                    <div className="centered-tabs" onClick={() => setValue(7)}>
                    Additional Features 
                    </div>
                    
                  </div>
                </div>
                {Detail(value)}
                {/* </Paper> */}
              </div>
            )}
          </div>

          {/* <div className="dropdown" style={{ marginBottom: secondDropdownOpen ? '10px' : '0' }}>
        <button    style={{width:'99%',display:'flex'}}
        onClick={() => {
          setFirstDropdownOpen(!firstDropdownOpen);
          setSecondDropdownOpen(false);
        }} className="dropbtn">
          <img  style={{height:'50px'}}  src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
         /> <h2>CORE CONFIG</h2>
        </button>
        {firstDropdownOpen && (
          <div className="dropdown-content">
           <img src={"https://cdn.originpc.com/opc/product/opc-blob-3b1a63f7-10b4-44ac-abe7-9ea964d335a9.png"}    />
          </div>
        )}
      </div>

      <div className="dropdown" 
      style={{ marginBottom:firstDropdownOpen ? '50px' : '0' }}>
        <button  style={{width:'99%',display:'flex'}}
        onClick={() => {
          setSecondDropdownOpen(!secondDropdownOpen);
          setFirstDropdownOpen(false);
        }} 
        className="dropbtn">
             <img  style={{height:'50px'}} src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png" />
             <h2>MEMORY</h2>


        </button>
        {secondDropdownOpen && (
          <div className="dropdown-content">
          <img src={"https://cdn.originpc.com/opc/product/opc-blob-21ee87e0-5de2-4731-ba3d-462b14377019.png"}    />
          </div>
        )}
      </div> */}
          {/* <div>
            <h2 style={{ color: "white" }}>Build</h2>
            {dropdowns.map((dropdown, index) => (
              <div
                key={index}
                className="dropdown"
                style={{
                  marginBottom: dropdown.isOpen && index !== 0 ? "50px" : "0",
                }}
              >
                <button
                  style={{ width: "2000px", display: "flex" }}
                  onClick={() => toggleDropdown(index)}
                  className="dropbtn"
                >
                  <img
                    style={{ height: "50px" }}
                    src={dropdown.imgSrc}
                    alt={dropdown.title}
                  />
                  <h2>{dropdown.title}</h2>
                </button>{" "}
                <br />
                <br />
                {dropdown.isOpen && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                    }}
                  >{console.log(build[0][1])}
                    <div > 
                      <img 
                        // style={{ width: '300px', border:'5px solid white' }}
                        className="dropdown-content"
                        src={dropdown.contentSrc}
                        alt={`Content for ${dropdown.title}`}
                        onClick={() => {
                         if(build[index][1]===false) {
                          if(build[index][0]===false){
                            updateBooleanValue(index, 0, true);
                         }else
                          {
                            updateBooleanValue(index, 0, false);
                          }
                        }else{
                          updateBooleanValue(index, 1, false);


                          updateBooleanValue(index, 0, true);
                        }
                        
                        }}                      />

                     {build[index][0]? 
                    ( <AddCircleIcon
                     style={{
                       color: "green",
                       fontSize: 30,
                       marginLeft: "-45px",
                       marginBottom: "160px",
                     }}
                   />):(
                     <AddCircleOutlineIcon
                     style={{
                      color: "white",
                      fontSize: 30,
                      marginLeft: "-45px",
                      marginBottom: "160px",
                    }}
                     />)
                     }
                    </div>
                    <div>
                      <img
                        // style={{ width: '300px', backgroundColor: 'white' }}
                        className="dropdown-content"
                        src={dropdown.contentSrc}
                        alt={`Content for ${dropdown.title}`}
                        onClick={() => {
                          if(build[index][0]===false) {

                          if(build[index][1]===false){
                            updateBooleanValue(index, 1, true);
                         }else
                          {
                            updateBooleanValue(index, 1, false);
                          }
                        }else{
                          updateBooleanValue(index, 0, false);
                          updateBooleanValue(index, 1, true);
                        }}}                      />

                     {build[index][1]? 
                    ( <AddCircleIcon
                    
                     style={{
                       color: "green",
                       fontSize: 30,
                       marginLeft: "-45px",
                       marginBottom: "160px",
                     }}
                   />):(
                     <AddCircleOutlineIcon
                     style={{
                      color: "white",
                      fontSize: 30,
                      marginLeft: "-45px",
                      marginBottom: "160px",
                    }}
                     />)
                     }
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div> */}
          <br />
          <br />
          <br />
          <div></div>
        </div>
      );
    // }
  };
  return (
    <div className="AppIP">
      {/* <Toolbar sx={{ backgroundColor: "black" }}> */}

      {props.setcheck1(true)}
      {props.setselitem(i)}
      {props.setcheck(1)}
      {ChoosPC()}
      {/* </Toolbar> */}
      {/* <AppBar className="bottom">
      <Toolbar sx={{ backgroundColor: "WHITE" }}>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default LapPage;
