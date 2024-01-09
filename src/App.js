import Login from "./components/Login";
import Ecom from "./components/Ecom";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage";
import Account from "./components/Account";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

import mongoose from "mongoose";
// import 'dotenv/config';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from '@mui/icons-material/History';
import { Menu, colors } from "@mui/material";
import { FaChartLine } from "react-icons/fa"; // Import the chart line icon from react-icons

// import React from 'react';
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import CodeIcon from "@rsuite/icons/Code";
import PageIcon from "@rsuite/icons/Page";
import DetailIcon from "@rsuite/icons/Detail";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import FileUploadIcon from "@rsuite/icons/FileUpload";

import { useState, useEffect } from "react";
import { blue } from "@mui/material/colors";
import supabase from "./SupabaseClient";

function App(props) {
  // const mongoose=require('mongoose');
  // const URL = "mongodb+srv://mg53689:mohit111gupta@cluster0.pkm5lgo.mongodb.net/Mydatabase?retryWrites=true&w=majority";
  // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  // mongoose.connect(URL);
  // var db=mongoose.connect;
  // db.on('error',console.error.bind(console,'connection error'));
  // db.once('open',function callback(){
  //   console.log('db connected')
  // });const dbOptions={useNewUrlParser:true, useUnifiedTopology:true}

  //   const [Litems,setLitem]=useState([
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},
  //   {name:"EVO14-S 14-inch Gaming Laptop",price:"$999",desc:"14 1800p 90Hz 100% sRGB narrow-bezel display Weighs 2.4 lbs and 0.61 inches thin Intel Core i7-12700H 14-Core (6P+8E) processor 4.7GHz with Turbo Boost Max",img:"https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"},

  // ])

  // const [Pitems,setPitem]=useState([
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS, or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS, or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS, or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS, or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  //   {name:"NEURON Premium Desktop Gaming PC",price:" $1,716",
  //   desc:"5000X, 5000T, and 7000X case options with tempered glass panels,Up to an Intel Core i9-13900KS, or AMD Ryzen 9 7950X3D, Soft tube or hardline options for CPU and GPU Cooling,Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled,Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM,Up to 3 year warranty + 24/7 tech support and lifetime labor included",
  //   img:"https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png"},
  // ])
  const [Check, setCheck] = useState(0);
  const [Sel, setSel] = useState(
    JSON.parse(localStorage.getItem("sel")) || "N"
  );
  const [Check1, setCheck1] = useState(
    JSON.parse(localStorage.getItem("chec")) || false
  );
  const [Selitem, setSelitem] = useState(0);

  const [pcData, setPcData] = useState(
    JSON.parse(localStorage.getItem("pcData")) || []
  );
  const [lapData, setLapData] = useState(
    JSON.parse(localStorage.getItem("lapData")) || []
  );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const [userId1, setUserId1] = useState(
  0
  );
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("userProfile")) ||'');

 


  const [fatchError, setFetchError] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  useEffect(() => {
    localStorage.setItem("sel", JSON.stringify(Sel));
  }, [Sel]);

  useEffect(() => {
    localStorage.setItem("chec", JSON.stringify(Check1));
  }, [Check1]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);
  useEffect(() => {
    localStorage.setItem("pcData", JSON.stringify(pcData));
  }, [pcData]);
  useEffect(() => {
    localStorage.setItem("lapData", JSON.stringify(lapData));
  }, [lapData]);
  useEffect(() => {
    // if (props.userid) {
      setUserId1(props.userid);
    // }
  }, [props.userid]);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);
 
  let t=Number(userId1);
 

  //  console.log(SelectData)
  // const axiosFatchData=async (processing)=>{
  // //    const options={
  // //     id:id,
  // //     name:name,
  // //     price:price,
  // //     img:img,
  // //     desc:desc
  // //    }

  //     await axios.get('ITEMS')
  //    .then(res=>{
  //     if (processing){
  //     setSelectData(res.data)}
  // })
  //    .then(err=>console.log(err))
  //    .catch(error => {
  //     console.error('Axios Error:', error);
  //   });
  //  }

  //  useEffect(()=>{
  //     let processing=true
  //     axiosFatchData(processing)
  //     return ()=>{
  //         processing=false
  //     }

  // },[]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from('PC')
  //         .select();

  //       if (error) {
  //         setFatchError("Error in Fetch");
  //         setPcData(null);
  //         console.error(error);
  //       }

  //       if (data) {
  //         setPcData(data);
  //         setFatchError(null);
  //       }
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from('Laptop')
  //         .select();

  //       if (error) {
  //         setFatchError("Error in Fetch");
  //         setLapData(null);
  //         console.error(error);
  //       }

  //       if (data) {
  //         setLapData(data);
  //         setFatchError(null);
  //       }
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from('Cart')
  //         .select();

  //       if (error) {
  //         setFatchError("Error in Fetch");
  //         setCartData(null);
  //         console.error(error);
  //       }

  //       if (data) {
  //         setCartData(data);
  //         setFatchError(null);
  //         console.log(cartData[0].id);
  //         console.log(cartData[0].itemid);
  //       }
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const pcDataResult = await supabase.from("PC").select();
        const laptopDataResult = await supabase.from("Laptop").select();
        const cartDataResult = await supabase.from("Cart").select().eq('uid',localStorage.getItem('userid') );
        const userProfileResult = await supabase.from("Users").select().eq('id',localStorage.getItem('userid') );

        if (
          pcDataResult.error ||
          laptopDataResult.error ||
          cartDataResult.error ||
          userProfileResult.error
        ) {
          let errorMessage = "";
          if (pcDataResult.error) errorMessage += "Error in PC Fetch\n";
          if (laptopDataResult.error) errorMessage += "Error in Laptop Fetch\n";
          if (cartDataResult.error) errorMessage += "Error in Cart Fetch\n";
          if (userProfileResult.error) errorMessage += "Error in userProfile Fetch\n";
          setFetchError(errorMessage);
          setPcData(null);
          setLapData(null);
          setCartData(null);
          setUserProfile(null);

          console.error(
            pcDataResult.error || laptopDataResult.error || cartDataResult.error ||userProfileResult.error
          );
        } else {
          setPcData(pcDataResult.data || null);
          setLapData(laptopDataResult.data || null);
          setCartData(cartDataResult.data || null);
          setUserProfile( userProfileResult.data||null);
          setFetchError(null);

          if (cartDataResult.data && cartDataResult.data.length > 0) {
            console.log(cartDataResult.data[0].uid);
            console.log(cartDataResult.data[0].citem);
            console.log(typeof Number(userId1));
            console.log(typeof localStorage.getItem('userid'));

            
            console.log("check first",typeof t,t)
          }
        }
      } catch (error) {
        setFetchError("Error in fetching data");
        setPcData(null);
        setLapData(null);
        setCartData(null);
        setUserProfile(null);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* {connectDB()} */}
    
      <AppBar className="AppBar">
        <Toolbar sx={{ backgroundColor: "black" }}>
          {/* <a href="/Dashboard"> */}
        
          <IconButton
            onClick={toggleDashboard}
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/*                     
                     <Dropdown  style={{width:'10'}} id="drop"   icon={<MenuIcon />} >
                                                                                                                                                                    
                <Dropdown.Item id='DropItem'>
                    <Dropdown  id="drop" title={'Gamimg PCs'}  ></Dropdown>
                </Dropdown.Item>
                <Dropdown.Item id='DropItem' >
                       <Dropdown  id="drop"  title={'Workstation PCs'}></Dropdown>
                </Dropdown.Item>
                <Dropdown.Item id='DropItem'  >
                      <Dropdown  id="drop" title={'Accessories'}></Dropdown>
                </Dropdown.Item>
                <Dropdown.Item  id='DropItem'>
                      <Dropdown id="drop"  title={'Special Offers'}></Dropdown>
                </Dropdown.Item>
                <Dropdown.Item id='DropItem' >
                      <Dropdown  id="drop" title={'Outlet Store'}></Dropdown>
                </Dropdown.Item>
                <Dropdown.Item id='DropItem' >
                     <Dropdown  id="drop" title={'More'}></Dropdown>
                </Dropdown.Item>
            </Dropdown> */}
            
            <div className={`dashboard ${showDashboard ? "active" : ""}`}
            style={{ background: "black" ,color:"white"}}
            >
              {/* Your dashboard content */}
              
              <h4 style={{ textAlign: "center" }}>PROFILE  </h4>
              <pre> 
                <img  
              src={userProfile[0].img}
              alt="Icon"
              style={{ width: '35px', height: '35px' }}
              /> {userProfile[0].UserN}
              </pre>
              <hr />   
              <h5 style={{ textAlign: "left" }}> ORDERS        </h5>   <br />
              <h5 style={{ textAlign: "left" }}>ORDER HISTORY  </h5>   <br />
              <h5 style={{ textAlign: "left" }}>ACCOUNT SETTING   </h5>   <br />
              <h5 style={{ textAlign: "left" }}  onClick={() => {  props.setlog(false); }}>LOGOUT </h5>   <br />

              {/* <p>This is the content of the dashboard...</p> */}
            </div>

            <DashboardIcon style={{ color: "white" }} />
          </IconButton>
        
          {/* </a> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">
              {" "}
              <button
                onClick={() => {
                  setCheck(0);
                }}
                style={{ background: "black", color: "white" }}
              >
                ORG PC
              </button>
            </a>
          </Typography>
          {/* <a> */}
         
          <IconButton
            size="medium"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

          >
            <input
              style={{
                color: "black",
                width: "200px",
                height: "22px",
                fontSize: 15,
              }}
            />

            <SearchIcon style={{ background: "black" ,color:"white"}} />
          </IconButton>
        <h5 style={{color:'black'}}>s</h5>
          
          {/* </a> */}
          <a href="/cart">
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon style={{ color: "white" }} />
            </IconButton>
          </a>
          <h5 style={{color:'black'}}>s</h5>
          <a href="/Account">
            <IconButton
              size="medium"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <AccountCircleIcon style={{ color: "white" }} /> */}
              <img  
              src={userProfile[0].img}
              alt="Icon"
              style={{ width: '35px', height: '35px',color:'white' }}
              />
            </IconButton>
          </a>
          <h5 style={{color:'black'}}>s</h5>
          {/* <a> */}
          <Button 
            // color="inherit"
            onClick={() => {
              props.setlog(false);
            }}
            style={{ background: "black", color: "white" }}
          >
            Logout
          </Button>
          {/* </a> */}
        </Toolbar>
      </AppBar>

      <Ecom
        //  litem={Litems} setlitem={setLitem}
        // pitem={Pitems} setpitem={setPitem}
        check={Check}
        setcheck={setCheck}
        sel={Sel}
        setsel={setSel}
        check1={Check1}
        setcheck1={setCheck}
        pcdata={pcData}
        setpcdata={setPcData}
        lapdata={lapData}
        setlapdata={setLapData}
        selitem={Selitem}
        setselitem={setSelitem}
        cartdata={cartData}
        setcartdata={setCartData}
        userid1={userId1}
        setuserid1={setUserId1}
      
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />}></Route>

          {/* <Route
      path="/"
      index element={<Ecom 
      //    litem={Litems} setlitem={setLitem} 
      // pitem={Pitems} setpitem={setPitem} 
      check={Check} setcheck={setCheck}
      sel={Sel} setsel={setSel}
      check1={Check1} setcheck1={setCheck}
      pcdata={pcData} setpcdata={setPcData}        
      lapdata={lapData} setlapdata={setLapData}
      selitem={Selitem}  setselitem={setSelitem}
      cartdata={cartData} setcartdata={setCartData}
      />}
      ></Route> */}

          <Route
            path="/Ecom"
            index
            element={
              <Ecom
                //    litem={Litems} setlitem={setLitem}
                // pitem={Pitems} setpitem={setPitem}
                check={Check}
                setcheck={setCheck}
                sel={Sel}
                setsel={setSel}
                check1={Check1}
                setcheck1={setCheck}
                pcdata={pcData}
                setpcdata={setPcData}
                lapdata={lapData}
                setlapdata={setLapData}
                selitem={Selitem}
                setselitem={setSelitem}
                cartdata={cartData}
                setcartdata={setCartData}
                userid1={userId1}
                setuserid1={setUserId1}
                
              />
            }
          ></Route>

          <Route
            path="/IPage/:id"
            index
            element={
              <ItemPage
                check={Check}
                setcheck={setCheck}
                sel={Sel}
                setsel={setSel}
                check1={Check1}
                setcheck1={setCheck}
                pcdata={pcData}
                setpcdata={setPcData}
                lapdata={lapData}
                setlapdata={setLapData}
                selitem={Selitem}
                setselitem={setSelitem}
                cartdata={cartData}
                setcartdata={setCartData}
                userid1={userId1}
                setuserid1={setUserId1}
                
              />
            }
          ></Route>

          <Route
            path="/cart"
            index
            element={
              <CartPage
                pcdata={pcData}
                setpcdata={setPcData}
                lapdata={lapData}
                setlapdata={setLapData}
                selitem={Selitem}
                setselitem={setSelitem}
                cartdata={cartData}
                setcartdata={setCartData}
                check={Check}
                setcheck={setCheck}
                sel={Sel}
                setsel={setSel}
                check1={Check1}
                setcheck1={setCheck}
                userid1={userId1}
                setuserid1={setUserId1}
                
              />
            }
          ></Route>
          <Route
            path="/Account"
            index
            element={
              <Account
                check={Check}
                setcheck={setCheck}
                sel={Sel}
                setsel={setSel}
                check1={Check1}
                setcheck1={setCheck}
                pcdata={pcData}
                setpcdata={setPcData}
                lapdata={lapData}
                setlapdata={setLapData}
                selitem={Selitem}
                setselitem={setSelitem}
                cartdata={cartData}
                setcartdata={setCartData}
                userid1={userId1}
                setuserid1={setUserId1}
                             />
            }
          ></Route>

          {/* <Route
      path="/Dashboard"
      index element={<Dashboard
        check={Check} setcheck={setCheck} 
        sel={Sel} setsel={setSel}
        check1={Check1} setcheck1={setCheck}
        pcdata={pcData} setpcdata={setPcData}          
        lapdata={lapData} setlapdata={setLapData}
        selitem={Selitem}  setselitem={setSelitem}
        cartdata={cartData} setcartdata={setCartData}
      />}
      ></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <div>
      <h1>What you Klike to see</h1>
     <button>pPC</button> 
     </div> */}
    </div>
  );
}

export default App;
