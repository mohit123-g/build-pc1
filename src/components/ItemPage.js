import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import "../App.css";
import { red } from "@material-ui/core/colors";
import { border, color } from "@mui/system";
import Dropdown from "rsuite/Dropdown";
import App from "../App";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
// import { Select } from "@mui/material";
const ItemPage = (props) => {
  const [value, setValue] = useState(0);
  const [i, setI] = useState(useParams()["id"]);

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
          <div style={{ textAlign: "left" }}>
            <h3>Technology</h3>
            <h5>{props.lapdata[i].spec.features.Technology}</h5>
            <h3>Display</h3>
            <h5>{props.lapdata[i].spec.features.Display}</h5>
            <h3>Special</h3>
            <h5>{props.lapdata[i].spec.features.Special}</h5>
          </div>
        );
      }
      if (c == 1) {
        return (
          <div style={{ textAlign: "left" }}>
            <h3>Dimensions & Weight</h3>
            <h5>{props.lapdata[i].spec.size.Dimensions}</h5>
          </div>
        );
      }
      if (c == 2) {
        return (
          <div style={{ textAlign: "left" }}>
            <h3>Bays</h3>
            <h5>{props.lapdata[i].spec.ports.Bays}</h5>
            <h3>USB</h3>
            <h5>{props.lapdata[i].spec.ports.USB}</h5>
            <h3>Ports</h3>
            <h5>{props.lapdata[i].spec.ports.Port}</h5>
          </div>
        );
      }
      if (c == 3) {
        return (
          <div style={{ textAlign: "left" }}>
            <h3>Power & Battery</h3>
            <h4>{props.lapdata[i].spec.power}</h4>
          </div>
        );
      }
    } else {
      return <div>No image available</div>;
    }
  };

  const ChoosPC = () => {
    if (props.sel == "PC") {
      return (
        <div className="App1">
          <div>
            <h2>Which Type of PC You Want:</h2>
          </div>
          {/* <div className="App1"> */}
          <div className="my-grid-container1">
            <div className="my-grid-item1">
              <h3>Custum PC</h3>
              <img
                id="but3"
                src="https://themvp.in/catalog/view/assets/img/PC-Avinash-Singh.webp"
              />
            </div>
            <div className="my-grid-item1">
              <h3>PreBuild PC</h3>
              <img
                id="but3"
                src="https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672"
              />
            </div>
            <div className="my-grid-item1">
              <h3>Laptop</h3>
              <img
                id="but3"
                src="https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      );
    } else {
      return (
        <div>
          <h1 style={{color:'white'}}>{props.lapdata[i].name}</h1>
          <h2 style={{color:'black'}}><button>Buy Now</button>{" "} <button>Add to Cart</button></h2>
          {/* <div className="centered-container"> */}
          <div className="centered-content">
            {props.lapdata && props.lapdata.length > i ? (
              <img
                className="top-image" // Add a class for styling the image
                src={props.lapdata[i].img}
              />
            ) : (
              <div>No image available</div>
            )}
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
          <div className="hollow-tab">
            <img
              className="w-100"
              src="https://cdn.originpc.com/opc/product/opc-blob-ddbeb457-efde-4a15-a6b1-2a8bc5749b63.png"
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
            />
            <h2
              style={{ color: "white" }}
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
            >
              Operating System
            </h2>
            <div
              onClick={() => {
                setOptionsVisible(!optionsVisible);
              }}
              className="arrow-down"
            >
              ▼
            </div>
            {optionsVisible && (
              <div className="options" id="options">
                <Paper className="page-container1">
                  <Tabs
                    style={{ color: "white", backgroundColor: "black" }}
                    // className="centered-tabs" // Add a class for styling the tabs
                    value={value}
                    // textColor="green"
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
                {/* </DropdownItem> */}

                {/* Add more options as needed */}
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
          <div>
            <h2>Build</h2>
            {dropdowns.map((dropdown, index) => (
              <div
                key={index}
                className="dropdown"
                style={{
                  marginBottom: dropdown.isOpen && index !== 0 ? "50px" : "0",
                }}
              >
                <button
                  style={{ width: "99%", display: "flex" }}
                  onClick={() => toggleDropdown(index)}
                  className="dropbtn"
                >
                  <img
                    style={{ height: "50px" }}
                    src={dropdown.imgSrc}
                    alt={dropdown.title}
                  />
                  <h2>{dropdown.title}</h2>
                </button> <br/><br/>
                {dropdown.isOpen && (
                  <div className="dropdown-content">
                    <img
                      src={dropdown.contentSrc}
                      alt={`Content for ${dropdown.title}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="App">
      {props.setcheck1(true)}
      {props.setselitem(i)}
      {props.setcheck(1)}
      {ChoosPC()}
    </div>
  );
};

export default ItemPage;
