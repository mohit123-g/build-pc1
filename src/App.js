import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/CartPage.css";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems, secondaryListItems } from "./components/listItems";

import HistoryIcon from "@mui/icons-material/History";
import InventoryIcon from "@mui/icons-material/Inventory";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import Login from "./components/Login";
import Ecom from "./components/Ecom";
import LapPage from "./components/lapPage";
import PCPage from "./components/pcPage";
import CartPage from "./components/CartPage";
import ContactUs from "./components/ContactUs";
import CustumPage from "./components/Custum";
import PaymentPage from "./components/PaymentPage";
import OrderHistory from "./components/OrderHistory";
import OrderPage from "./components/OrderPage";
import Account from "./components/Account";
import Chatbot from "./Chatbot";
import { useState, useEffect } from "react";
import { blue } from "@mui/material/colors";
import supabase from "./SupabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import logo from "./components/logo2.png";
import profile from "./components/avatar.png"
import { LocalParking, LocalSee } from "@mui/icons-material";
import { Avatar } from "@chakra-ui/react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="red" align="center" {...props}>
     
         {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Mohit Gupta
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      
    </Typography>
    
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App(props) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [Check, setCheck] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

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
  const [Comp,setComp]=useState(
    JSON.parse(localStorage.getItem("Comp")) || {CPU:[],Mboard:[],RAM:[],GPU:[],
    CPU_Cooler:[],CabCooler:[],Cabinat:[],PowerS:[],
    SoundC:[],Storage:[]
});
const [Custum, setCustum] = useState(
  JSON.parse(localStorage.getItem("Custum")) || {
    CPU: {},
    Mboard: {},
    RAM: {},
    GPU: {},
    Storage: {},
    Cabinat: {},
    PowerS: {},
    CabCooler: {},
    CPU_Cooler: {},
    SoundC: {},
    Cname:""
  }
);
const [Custumfinal, setCustumfinal] = useState(
  JSON.parse(localStorage.getItem("CustumFinal")) || {}

);

  const [userId1, setUserId1] = useState(0);
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("userProfile")) || ""
  );

  const [existingData, setExistingData] = useState([]);
  const [newObject, setNewObject] = useState({
    q: 1,
    itemid: 0,
    // Add any other properties for the new JSON object
  });

  const [fatchError, setFetchError] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };
  const [searchbox, setSearchBox] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    localStorage.setItem("Comp", JSON.stringify(Comp));
  }, [Comp]);
  useEffect(() => {
    localStorage.setItem("Custum", JSON.stringify(Custum));
  }, [Custum]);
  useEffect(() => {
    localStorage.setItem("CustumFinal", JSON.stringify(Custumfinal));
  }, [Custumfinal]);
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);
  // const script = document.createElement('script');

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  //   script.async = true;
  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       "composerPlaceholder": "Chat with bot",
  //       "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
  //       "botId": "6f14a0dd-8596-4fde-9dc4-1a177054f266",
  //       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
  //       "messagingUrl": "https://messaging.botpress.cloud",
  //       "clientId": "6f14a0dd-8596-4fde-9dc4-1a177054f266",
  //       "webhookId": "184e3447-d3df-4a4a-92bd-4f2c7c488abb",
  //       "lazySocket": true,
  //       "themeName": "prism",
  //       "frontendVersion": "v1",
  //       "showPoweredBy": true,
  //       "theme": "prism",
  //       "themeColor": "#2563eb"
  //     });
  //   };
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  let t = Number(userId1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const pcDataResult = await supabase.from("PC").select();
        const laptopDataResult = await supabase.from("Laptop").select();
        const customDataResult= await supabase
        .from("CustumPC")
        .select()
        .eq("id", localStorage.getItem("userid"));

        const conpDataResult1= await supabase.from("CPU").select();
        const conpDataResult2= await supabase.from("GPU").select();
        const conpDataResult3= await supabase.from("RAM").select();
        const conpDataResult4= await supabase.from("Mboard").select();
        const conpDataResult5= await supabase.from("PowerS").select();
        const conpDataResult6= await supabase.from("Storage").select();
        const conpDataResult7= await supabase.from("Cabinat").select();
        const conpDataResult8= await supabase.from("CPU_Cooler").select();
        const conpDataResult9= await supabase.from("CabCooler").select();
        const conpDataResult10= await supabase.from("SoundC").select();

        const cartDataResult = await supabase
          .from("Cart")
          .select()
          .eq("uid", localStorage.getItem("userid"));
        const userProfileResult = await supabase
          .from("Users1")
          .select()
          .eq("id", localStorage.getItem("userid"));
        //     const cartDataResult = await supabase.from("Cart").select().eq ('3250' );
        // const userProfileResult = await supabase.from("Users1").select().eq('3250'  );

        if (
          pcDataResult.error ||
          laptopDataResult.error ||
          customDataResult.error ||
          cartDataResult.error ||
          userProfileResult.error ||
          conpDataResult1.error ||
          conpDataResult2.error ||
          conpDataResult3.error ||
          conpDataResult4.error ||
          conpDataResult5.error ||
          conpDataResult6.error ||
          conpDataResult7.error ||
          conpDataResult8.error ||
          conpDataResult9.error ||
          conpDataResult10.error 
        ) {
          let errorMessage = "";
          if (pcDataResult.error) errorMessage += "Error in PC Fetch\n";
          if (laptopDataResult.error) errorMessage += "Error in Laptop Fetch\n";
          if (cartDataResult.error) errorMessage += "Error in Cart Fetch\n";
          if (customDataResult.error) errorMessage += "Error in Custum  Builder Fetch\n";

          if (userProfileResult.error) errorMessage += "Error in userProfile Fetch\n";
          if (conpDataResult1.error ) errorMessage += "Error in Components1 Fetch\n";
          if (conpDataResult2.error ) errorMessage += "Error in Components2 Fetch\n";
          if (conpDataResult3.error ) errorMessage += "Error in Components3 Fetch\n";
          if (conpDataResult4.error ) errorMessage += "Error in Components4 Fetch\n";
          if (conpDataResult5.error ) errorMessage += "Error in Components5 Fetch\n";
          if (conpDataResult6.error ) errorMessage += "Error in Components6 Fetch\n";
          if (conpDataResult7.error ) errorMessage += "Error in Components7 Fetch\n";
          if (conpDataResult8.error ) errorMessage += "Error in Components8 Fetch\n";
          if (conpDataResult9.error ) errorMessage += "Error in Components9 Fetch\n";
          if (conpDataResult10.error ) errorMessage += "Error in Components10 Fetch\n";
     

          setFetchError(errorMessage);
          setPcData(null);
          setLapData(null);
          setCartData(null);
          setUserProfile(null);
          setCustumfinal(null)
           setComp(null)
          console.error(
            pcDataResult.error ||
              laptopDataResult.error ||
              cartDataResult.error ||
              userProfileResult.error ||
              customDataResult.error||
              conpDataResult1.error ||
              conpDataResult2.error ||
              conpDataResult3.error ||
              conpDataResult4.error ||
              conpDataResult5.error ||
              conpDataResult6.error ||
              conpDataResult7.error ||
              conpDataResult8.error ||
              conpDataResult9.error ||
              conpDataResult10.error 
          );
        } else {
          setPcData(pcDataResult.data || null);
          setLapData(laptopDataResult.data || null);
          setCartData(cartDataResult.data || null);
          setUserProfile(userProfileResult.data || null);
          setCustumfinal(customDataResult.data[0] || null);
          setComp({
            ...Comp,
            CPU: conpDataResult1.data,
            GPU: conpDataResult2.data,
            RAM: conpDataResult3.data,
            Mboard: conpDataResult4.data,
            PowerS: conpDataResult5.data,
            Storage: conpDataResult6.data,
            Cabinat: conpDataResult7.data,
            CPU_Cooler: conpDataResult8.data,
            CabCooler: conpDataResult9.data,
            SoundC: conpDataResult10.data
          });
         

          setFetchError(null);

          if (cartDataResult.data && cartDataResult.data.length > 0) {
            console.log(cartDataResult.data[0].uid);
            console.log(cartDataResult.data[0].citem);
            console.log(typeof Number(userId1));
            console.log(typeof localStorage.getItem("userid"));
            // console.log(Comp.CPU[0].img);
           
          }
          console.log(Custumfinal.id);
        }
      } catch (error) {
        setFetchError("Error in fetching data");
        setPcData(null);
        setLapData(null);
        setCartData(null);
        setUserProfile(null);
        setCustumfinal(null)
        setComp(null)
        console.error(error);
      }
    };

    fetchData();
  }, [props.log]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    // Function to handle click event
    function handleClick() {
      setIsModalOpen(false);
      //  setOpen(!open);
      // Toggle the state
    }

    // Adding event listener to the entire document
    document.addEventListener("click", handleClick);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlaySER">
        <div className="modalSER">
          <button
            style={{ color: "black" }}
            className="modal-closeSER"
            onClick={onClose}
          >
            Close
          </button>
          <div
         
            className="cart-containerSER"
          >
            {children}
          </div>
        </div>
      </div>
    );
  };


  const ModalTemp = () => {
    console.log("open");
    // if (b != 0) {
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const itemLap = []; //array of buttons
    const itemPC = [];
    var j = searchbox.length;
    if (searchbox != "") {
      for (let i = 0; i < lapData.length; i++) {
        if (
          lapData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
        ) {
          itemLap.push(
            <div 
            >
              {" "}
              <a href={"/lapPage/" + i}>
                <div className="cart-itemSER">
                  <img className="cart-item-imageSER" src={lapData[i].img[0]} />
                  <pre>
                    <p className="cart-item-priceSER">₹{lapData[i].price}</p>
                    <p className="cart-item-nameSER">{lapData[i].name}</p>
                  </pre>
                </div>
              </a>
            </div>
          );
        }
      }
      //array of buttons
      for (let i = 0; i < pcData.length; i++) {
        if (
          pcData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
        ) {
          itemPC.push(
            <div 
            // onClick={setSel("PC")}
            >
              {" "}
              <a href={"/pcPage/" + i}>
                <div className="cart-itemSER">
                  {/* <a href={"/IPage/" + i}> */}
                    <img className="cart-item-imageSER" src={pcData[i].img[0]} />
                  {/* </a> */}
                  <pre>                    
                    <p className="cart-item-priceSER">₹{pcData[i].price}</p>
                    <p className="cart-item-nameSER">{pcData[i].name}</p>
                  </pre>
                </div>
              </a>
            </div>
          );
        }
      }
      // var bs = 20;
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* <div className="cart-container"> */}
            <h1 className="cart-titleSER">Laptops found</h1>
            <div className="cart-items-containerSER"> {itemLap}</div>
            <h1 className="cart-titleSER">Pre Build PCs found</h1>

            <div className="cart-items-containerSER"> {itemPC}</div>

            {/* </div> */}
          </Modal>
        </div>
      );
    }
    // }
  };


  async function signOutUser() {
    // props.setlog(false);
    const { error } = await supabase.auth.signOut();
    // if (!error) {
    //   // Assuming setlog is a prop passed to the component
    // props.setlog(false);
    // } else {
   
      localStorage.clear();

    console.error("Error signing out:", error);
    // }
    // console.log(error);
  }

 
  return (   <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "black" }}
          className="AppBar"
          position="absolute"
          // backgroundColor="black"
          open={open}
        >
          <Toolbar
            sx={{
              pr: "35px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "16px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              color="red"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <a href="/" >
                <img className="logo" src={logo}/>
                {/* ORGPC */}
              </a>
            </Typography>
            <input
              placeholder="Search"
              // style={{ fontSize: 30, height: "50px", width: "1000px" }}
              className="searchInput"
              //  checked={isChecked}
              // onClick={openModal}
              onDoubleClick={openModal}
              onChange={(e) => {
                openModal();
                setSearchBox(e.target.value);
              }}
            />
            <SearchIcon />

            {ModalTemp()}
           
            {/* {openModal} */}
          <a style={{color:'white'}} href="/Account"> <IconButton color="inherit">
           <label className="Profilename"> {props.userprofile2.name !== undefined ? props.userprofile2.name:"User"}</label> 
 
              <Badge
                // badgeContent={33}
                color="secondary"
              >
                {/* <NotificationsIcon /> */}
                <img
src={props.userprofile2.pimg !== undefined ? props.userprofile2.pimg : profile}
// {props.userprofile2.pimg}
    alt="Icon"
   className="Profileimg"
/>
              </Badge>
            </IconButton></a> 
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              <a href="/" style={{ textDecoration: "none" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Home
                      </span>
                    }
                  />
                </ListItemButton>
              </a>
              <a href="/cart" style={{ textDecoration: "none" }}>
                {" "}
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Cart
                      </span>
                    }
                  />
                </ListItemButton>
              </a>
              <a href="/ContactUs" style={{ textDecoration: "none" }}>
                {" "}
                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Contact us
                      </span>
                    }
                  />
                </ListItemButton>
              </a>
              {/* <ListItemButton>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton> */}
            </React.Fragment>

            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
            <React.Fragment>
              {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
              <a href="/OrderPage" style={{ textDecoration: "none" }}>
                <ListItemButton>
                  <ListItemIcon>
                    {/* <AssignmentIcon /> */}
                    <InventoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Orders
                      </span>
                    }
                  />
                </ListItemButton>
              </a>
              <a href="/Account" style={{ textDecoration: "none" }}>
                <ListItemButton>
                  <ListItemIcon>
                    {/* <AssignmentIcon /> */}
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Account
                      </span>
                    }
                  />
                </ListItemButton>
              </a>
              
              {/* <a href="/OrderHistory" style={{ textDecoration: "none" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Order History
                      </span>
                    }
                  />
                </ListItemButton>
              </a> */}
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon onClick={() => signOutUser()} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          style={{
            // backgroundImage: "url(https://images.pexels.com/photos/5185159/pexels-photo-5185159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 )"
backgroundColor:'white'
          }}
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "black"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            // padding: "2%", // Adjust padding as needed
          }}
        >
            {/* <Chatbot /> */}
          <Toolbar />
        
          <Container maxWidth="200rem" sx={{ mb: 4 }}>
            
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
              newobject={newObject}
              setnewobject={setNewObject}
              existingdata={existingData}
              setexistingdata={setExistingData}
            />

            <BrowserRouter>
              <Routes>
                <Route path="/login" index element={<Login />}></Route>

          

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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                    />
                  }
                ></Route>

                <Route
                  path="/lapPage/:id"
                  index
                  element={
                    <LapPage
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                    />
                  }
                ></Route>
                <Route
                  path="/pcPage/:id"
                  index
                  element={
                    <PCPage
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      userprofile={userProfile} 
                      setuserprofile={setUserProfile}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      custumfinal={Custumfinal}
                      setcustumfinal={setCustumfinal}
                      // cartitems={cartItems}
                      // setcartitems={setCartItems} 

                    />
                  }
                ></Route>
                <Route
                  path="/ContactUs"
                  index
                  element={
                    <ContactUs
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                    />
                  }
                ></Route>
                <Route
                  path="/Custum"
                  index
                  element={
                    <CustumPage
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      custumfinal={Custumfinal}
                      setcustumfinal={setCustumfinal}
                    />
                  }
                ></Route>
                <Route
                  path="/OrderPage"
                  index
                  element={
                    <OrderPage
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      custumfinal={Custumfinal}
                      setcustumfinal={setCustumfinal}
                    />
                  }
                ></Route>
                <Route
                  path="/OrderHistory"
                  index
                  element={
                    <OrderHistory
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      custumfinal={Custumfinal}
                      setcustumfinal={setCustumfinal}
                    />
                  }
                ></Route>
         <Route
                  path="/PaymentPage"
                  index
                  element={
                    <PaymentPage
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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      userprofile={userProfile} 
                      setuserprofile={setUserProfile}
                      // comp={Comp}
                      // setcomp={setComp}
                      // custum={Custum}
                      // setcustum={setCustum}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      custumfinal={Custumfinal}
                      setcustumfinal={setCustumfinal}
                      //   cartitems={cartItems}
                      // setcartitems={setCartItems}
                      

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
                      newobject={newObject}
                      setnewobject={setNewObject}
                      existingdata={existingData}
                      setexistingdata={setExistingData}
                      userprofile={userProfile} 
                      setuserprofile={setUserProfile}
                      comp={Comp}
                      setcomp={setComp}
                      custum={Custum}
                      setcustum={setCustum}
                      //   cartitems={cartItems}
                      // setcartitems={setCartItems} 

                    />
                  }
                ></Route>
           
              </Routes>
            </BrowserRouter>
            
           </Container>
           <Chatbot /> 
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default App;
