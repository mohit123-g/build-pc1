import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./components/CartPage.css"
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './components/listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import HistoryIcon from '@mui/icons-material/History';
import InventoryIcon from '@mui/icons-material/Inventory';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from '@mui/icons-material/Call';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

import Login from "./components/Login";
import Ecom from "./components/Ecom";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage";
import Account from "./components/Account";
import Custum from "./components/Custum"
import { useState, useEffect } from "react";
import { blue } from "@mui/material/colors";
import supabase from "./SupabaseClient";
import { Auth } from "@supabase/auth-ui-react";



function Copyright(props) {
  return (
    <Typography variant="body2" color="red" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mohit Gupta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App(props) {
  const [open, setOpen] =useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };



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

    const [existingData, setExistingData] = useState([]);
    const [newObject, setNewObject] = useState({
        q:1,
        itemid:0,
        // Add any other properties for the new JSON object
      });


  const [fatchError, setFetchError] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };
  const [searchbox,setSearchBox]=useState("")
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
        const userProfileResult = await supabase.from("Users1").select().eq('id',localStorage.getItem('userid') );
        //     const cartDataResult = await supabase.from("Cart").select().eq ('3250' );
        // const userProfileResult = await supabase.from("Users1").select().eq('3250'  );

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
    document.addEventListener('click', handleClick);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
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
       <div  style={{ height: '900px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}> 
         {children}</div>
        </div>
      </div>
    );
  };
  
  // <div className="cart-container">
  // <h2 className="cart-title">Your Shopping Cart</h2>
  
  // {cartItems.length === 0 ? (
  //   <p className="empty-cart-message">Your cart is empty</p>
  // ) : (
  //   <>
  //     <div className="cart-items-container">
  const ModalTemp=()=> {
    console.log("open")
    // if (b != 0) {
      const closeModal=()=> {
        setIsModalOpen(false);
      };
      const itemLap = []; //array of buttons
      const itemPC = [];
      var j = searchbox.length;
      if(searchbox!=""){
    for (let i = 0; i < lapData.length; i++) {
      if (
        lapData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
      ){           

      itemLap.push(
      <div>  <a href={"/IPage/" + i}>

        <div className="cart-item">
    <img   className="cart-item-image"
                         src={lapData[i].img[0]} />
            <pre><p className="cart-item-price" >₹{lapData[i].price}</p>
          <p className="cart-item-name" >{ lapData[i].name}</p>
          </pre>

        </div></a></div>
      );          
}
    }
     //array of buttons
    for (let i = 0; i < pcData.length; i++) {
      if (
        pcData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
      ){
      itemPC.push(
        <div>  <a href={"/IPage/" + i}>

        <div className="cart-item">
           <a href={"/IPage/" + i}>
            <img   className="cart-item-image"
                         src={pcData[i].img[0]} />
          </a>
        <pre>  <p className="cart-item-price">₹{pcData[i].price}</p>{" "}
          <p className="cart-item-name">{ pcData[i].name}</p>
          </pre>
        </div></a></div>
      );}
    } 
    // var bs = 20;
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* <div className="cart-container"> */}
        <h1 className="cart-title">Laptops found</h1>
          <div className='cart-items-container'>   {itemLap}</div>
          <h1 className="cart-title">Pre Build PCs found</h1>

          <div className='cart-items-container'>   {itemPC}</div>

          {/* </div> */}
          </Modal>
        </div>
      );}
    // }
  };
  // useEffect(()=>{
  //   async function getUserData() {
  //   await supabase.auth.getUser().then((value)=>{
  //     if(value.data?.user){
  //       console.log(value.data.user);
  //     }
  //   })}
  //   getUserData();
  // },[])

  async function signOutUser(){
    // props.setlog(false);
  const{error}= await supabase.auth.signOut();
  // if (!error) {
  //   // Assuming setlog is a prop passed to the component
    // props.setlog(false);
  // } else {
    console.error('Error signing out:', error);
  // }
  // console.log(error);
}



  // useEffect(() => {
  //   const fetchData = async () => {
     
  //     try {
  //       const pcDataResult = await supabase.from("PC").select();
  //       const laptopDataResult = await supabase.from("Laptop").select();
  //       const cartDataResult = await supabase.from("Cart").select().eq('uid',localStorage.getItem('userid') );
  //       const userProfileResult = await supabase.from("Users1").select().eq('id',localStorage.getItem('userid') );

  //       if (
  //         pcDataResult.error ||
  //         laptopDataResult.error ||
  //         cartDataResult.error ||
  //         userProfileResult.error
  //       ) {
  //         let errorMessage = "";
  //         if (pcDataResult.error) errorMessage += "Error in PC Fetch\n";
  //         if (laptopDataResult.error) errorMessage += "Error in Laptop Fetch\n";
  //         if (cartDataResult.error) errorMessage += "Error in Cart Fetch\n";
  //         if (userProfileResult.error) errorMessage += "Error in userProfile Fetch\n";
  //         setFetchError(errorMessage);
  //         setPcData(null);
  //         setLapData(null);
  //         setCartData(null);
  //         setUserProfile(null);

  //         console.error(
  //           pcDataResult.error || laptopDataResult.error || cartDataResult.error ||userProfileResult.error
  //         );
  //       } else {
  //         setPcData(pcDataResult.data || null);
  //         setLapData(laptopDataResult.data || null);
  //         setCartData(cartDataResult.data || null);
  //         setUserProfile( userProfileResult.data||null);
  //         setFetchError(null);

  //         if (cartDataResult.data && cartDataResult.data.length > 0) {
  //           console.log(cartDataResult.data[0].uid);
  //           console.log(cartDataResult.data[0].citem);
  //           console.log(typeof Number(userId1));
  //           console.log(typeof localStorage.getItem('userid'));

            
  //           console.log("check first",typeof t,t)
  //         }
  //       }
  //     } catch (error) {
  //       setFetchError("Error in fetching data");
  //       setPcData(null);
  //       setLapData(null);
  //       setCartData(null);
  //       setUserProfile(null);
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

//   useEffect(()=>{
//     async function getUserData() {
//     await supabase.auth.getUser().then((value)=>{
//       if(value.data?.user){
//         console.log(value.data.user);
//       }
//     })}
//     getUserData();
//   },[])

//   async function signOutUser(){
//     // props.setlog(false);
//   const{error}= await supabase.auth.signOut();
//   // if (!error) {
//   //   // Assuming setlog is a prop passed to the component
//     // props.setlog(false);
//   // } else {
//     console.error('Error signing out:', error);
//   // }
//   // console.log(error);
// }


  return (
    <ThemeProvider  theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar 
        style={{backgroundColor:'black'}}
        position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
           <Typography
              component="h1"
              variant="h4"
               
              color="red"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <a href='/' style={{color:'red'}}> ORGPC</a>
            </Typography>
           <input placeholder='Search' style={{fontSize:30,height:'50px',width:'1000px'}}
            //  checked={isChecked}
            // onClick={openModal}
            onDoubleClick={openModal}
             onChange={(e)=>{ openModal();
              setSearchBox(e.target.value);
              }}
           />
            <SearchIcon style={{height:'50px',width:'50px'}}
            />
            
             {ModalTemp()}
            <h2 style={{color:'transparent' ,cursor:'default'}}
            >-----------------------------------------</h2>
              {/* {openModal} */}
            <IconButton color="inherit">
            {props.userprofile2.name}

              <Badge 
              // badgeContent={33} 
              color="secondary">
                {/* <NotificationsIcon /> */}
                             <img
    src={props.userprofile2.pimg}
    alt="Icon"
    style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%', // Making it a circle
        marginLeft: '10px',
        backgroundColor: 'white', // Adding a background color
    }}
/>

              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            
          <React.Fragment>
          <a href="/"> <ListItemButton>
  

      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton></a>
    <a href="/cart"> <ListItemButton>
   
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItemButton></a>
    <a href="/Account">  <ListItemButton>
   
      <ListItemIcon>
   <CallIcon  />

      </ListItemIcon>
      
      <ListItemText primary="Contact us
      " />
    </ListItemButton></a>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    
  </React.Fragment>



            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
            <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
        <InventoryIcon/>
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="Order History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LoginIcon   onClick={() =>signOutUser()}
/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
    
  </React.Fragment>
          </List>
        </Drawer>
        <Box  
        // style={{ 
        //   backgroundImage: "url('https://c.wallhere.com/photos/9e/73/computer_keyboards-1150906.jpg!d')" 
        // }}
        component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'black'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        padding: '2%', // Adjust padding as needed
      }}
        >
          <Toolbar />
          <Container  
         
          maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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

                newobject={newObject}
                setnewobject={setNewObject}
                existingdata={existingData}
                setexistingdata={setExistingData}
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
                />
            }
          ></Route>
           <Route
            path="/Custum"
            index
            element={
              <Custum
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
            {/* <Grid container spacing={3}>
              Chart
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              Recent Deposits
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              Recent Orders
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid> */}
            
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>


  

    </ThemeProvider>
  );
}

export default App;