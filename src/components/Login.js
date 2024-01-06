import App from "../App";
import React, { useState, useEffect } from "react";
import "./Login.css"; // Import your CSS file
import supabase from "../SupabaseClient";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = (props) => {
  const [Log, setLog] = useState(
    JSON.parse(localStorage.getItem("L")) || false
  );
  var [userId,setUserId]=useState(JSON.parse(localStorage.getItem("userid"))|| 0);
  // var [rowNo,setRowNo]=useState(JSON.parse(localStorage.getItem("rowNo"))||0);
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("userProfile")) ||[]);
  const [Sign, setSign] = useState("in");
  // const myemail = 'r';
  // const myPass = '123';
  // let e = "";
  // let p = "";
  // let n="";
  let flag = false;
  let t=0;
  const [userDate, setUserData] = useState([]);

  const [fetchError, setFetchError] = useState(null);
  const [inputN,setInputN]=useState('');
  const [inputE,setInputE]=useState('');
  const [pimg,setPimg]=useState('');
  const [LinputE,setLInputE]=useState('');
  const [LinputP,setLInputP]=useState('');
  

  const [password, setPassword] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);


  // useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Users").select();

        if (error) {
          setFetchError("Error in Fetch");
          setUserData(null);
          console.error(error);
        }

        if (data) {
          setUserData(data);
          setUserProfile(data);
          setFetchError(null);
          // console.log(userDate);
          // window.location.reload();

        }
      } finally {
      }
    };


    

  //   fetchData();
  // }, []);

const GoogleSignIn=()=>{
  return(<div>  <GoogleOAuthProvider clientId="614067921294-kniaho3so0lts0gju5b3h7pq2idjq794.apps.googleusercontent.com">
  <GoogleLogin
onSuccess={(credentialResponse) => {
  var decoded=jwtDecode(credentialResponse.credential);
  console.log(decoded);

  setInputN(decoded.name);
  setInputE(decoded.email);
  setPimg(decoded.picture);

  // setInputP(decoded.email);
}}
onError={() => {
  console.log('Login Failed');
}}
/>;
    </GoogleOAuthProvider></div>
)

}

  const performTask = () => {
    // fetchData();
    // console.log(inputE,inputP);
    if (LinputE === "" || LinputP === "") {
      alert("Please enter email & password");
    } else {
      for (let i = 0; i < userDate.length; i++) {
        if (LinputE === userDate[i].Email && LinputP === userDate[i].Password) {
          flag = true;
         
           t=Number(userDate[i].id);
          setUserId(userDate[i].id);
          setUserProfile(userDate =>userDate.filter(item => item.id !== userDate[i].id)); 
          insertNewRow('Cart', { uid: userDate[i].id, citem: [{ "q": 1, "itemid": 0 }] });
    
          // break;
        }
      }
      if (flag === true) {
        // for(let k=0;k<cartData1.length;k++){
        //   if(cartData1[k].uid===t){
        //    setRowNo(k);
        //    break;
        //   }}
        alert("WELCOME! ENJOY SHOPPING😁");
        // insertNewRow('Cart', { uid: userId, citem: [{ "q": 1, "itemid": 0 }] });
        setLog(true);

        // console.log(userId);
      } else {
        alert("LOGIN FAILED");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("L", JSON.stringify(Log));
  }, [Log]);
  useEffect(() => {
    localStorage.setItem("userid", JSON.stringify(userId));
  }, [userId]);
 
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);
  

  const login1 = () => {
    fetchData();
    // setLInputE(""); setLInputP("CB "); 
    return (
      <div>
        <br />
        <br />
        <h2 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
          {" "}
          Login{" "}
        </h2>
        <br />
        <br />
        <input
          className="inputbox"
          placeholder="Email"
          value={LinputE}
          onChange={(event) => {
            setLInputE( event.target.value);
          }}
        />
        <br />
        <br />
        <OutlinedInput
      type={showPassword ? 'text' : 'password'}
      value={LinputP}
      style={{ backgroundColor: 'white', color:"black" }}      className="inputbox"
     onChange={(e)=>{setLInputP(e.target.value)}}
      placeholder="Password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={togglePasswordVisibility} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>}/>
        <br />
      </div>
    );
  };

  const register = () => {
    fetchData();
    return (
      <div>
        <br />
        <br />
        <h2 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
          {" "}
          Sign Up{" "}
        </h2>
        <br />
        <br />

        <input  value={inputN} onChange={(e)=>setInputN(e.target.value)} className="inputbox" placeholder="User Name" />
        <br />
        <br />
        <input  value={inputE} onChange={(e)=>setInputE(e.target.value)} className="inputbox" type="Email" placeholder="Email" />
        <br />
        <br />
        <OutlinedInput
      type={showPassword ? 'text' : 'password'}
      value={password}
      style={{ backgroundColor: 'white', color:"black" }}      className="inputbox"
     onChange={
      handlePasswordChange
    // setPassword(e.target.value);
    }
      placeholder="Enter password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={togglePasswordVisibility} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>}/>
        <br />
        {GoogleSignIn()}
      </div>
    );
  };

  const isGoogleEmail = (email) => {
    const googleEmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return googleEmailRegex.test(email);
  };

  const insertNewRow = async (table,obj) => {
    try {
      const { data, error } = await supabase
        .from(table) // Replace 'your_table_name' with your table's name
        .insert([obj]);

      if (error) {
        console.error('Error inserting row:', error);
        return;
      }
      window.location.reload();

      console.log('Row inserted successfully:', data);
      // Optionally, you can perform additional actions upon successful insertion
    } catch (error) {
      console.error('Error inserting row:', error.message);
    }
  };



  const choos = () => {
    if (!Log) {
      if (Sign === "in") {
        // setLInputE(""); setLInputP(""); 
        return (<div>
          
         { login1()}
          <br />
       <pre>   <button
            className="button"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
            }}
            onClick={() =>{ 
              if (Sign==="in") {
                setInputN(""); setInputE(""); setPassword("");
                setSign("up");
              } else if(inputN === "" || password === ""||inputE==="") 
              { alert("Please enter email & password");}
              else if(!isGoogleEmail(inputE)){alert('Not a valid Google email');}
              else
              {insertNewRow('Users',{UserN:inputN,Email:inputE,Password:password,img:pimg})
              alert("Registration successfull");
              }
            }}
             
          >
            Sign Up
          </button>    <button
            className="button"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
            }}
            onClick={() => {
              if (Sign === "up") {
                        setLInputE(""); setLInputP(""); 

                setSign("in");
                window.location.reload();

                console.log("in");
              } else {
                console.log("Task");
                performTask();
              }
            }}
          >
            Login
          </button></pre>
        </div>) 
      }

      if (Sign === "up") {
      //  setInputN(""); setInputE(""); setInputP("");
        return (<div>
          
          { register()}
           <br />
          <pre> <button
             className="button"
             style={{
               backgroundColor: "black",
               color: "white",
               fontSize: "20px",
             }}
             onClick={() =>{ 
              if (Sign==="in") {
                      setInputN(""); setInputE(""); setPassword("");

                setSign("up");
              } else if(inputN === "" || password === ""||inputE==="") 
              { alert("Please enter email & password");} 
              else if(!isGoogleEmail(inputE)){alert('Not a valid Google email');}
              else
              {insertNewRow('Users',{UserN:inputN,Email:inputE,Password:password,img:pimg})
              alert("Registration successfull");
              }
             }}
              
           >
             Sign Up
           </button>    <button
             className="button"
             style={{
               backgroundColor: "black",
               color: "white",
               fontSize: "20px",
             }}
             onClick={() => {
               if (Sign === "up") {
                setLInputE(""); setLInputP(""); 
                 setSign("in");
                 window.location.reload();

                 console.log("in");
               } else {
                 console.log("Task");
                 performTask();
               }
             }}
           >
             Login
           </button></pre>
         </div>) 
      }
  
    } else {
      return (
        <div>
          {" "}
          <App log={Log} setlog={setLog} userid={userId} setuserid={setUserId} />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="log-Container">
        <div>
          {fetchData}
          
          {choos()}</div>
        
      </div>
    </div>
  );
};

export default Login;
