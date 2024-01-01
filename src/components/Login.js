import App from "../App";
import { useState,useEffect } from 'react';

const Login=(props)=>{
  const [Log,setLog]=useState( JSON.parse(localStorage.getItem("L"))||false);

    const myemail="r";
    const myPass="123";
    var e="",p="";
  const performTask=()=>
  {
    if(e===""|| p==="")
    {
      alert("Please enter email & password");
    }
    else if(e==myemail && p==myPass)
    { 
     alert("WELCOME! ENJOY SHOPPING😁")
     setLog(true)
   
    //  {<Login/>}
    }
    else
    {
      alert("LOGIN FAILED");
    }
  } 

  useEffect(()=>{
    localStorage.setItem('L',JSON.stringify(Log))
    ;
  },[Log]);
   
  const login1=()=>{
    if(!Log){
      return (
      <div className="App">
        <br></br><br></br>
        <h2 style={{ width: '100%', color: 'black' }}> Login </h2>
        <input placeholder="Email"  onChange={(event)=>
    {
       e=event.target.value;
    }}/>
        <br />
        <input  type="password" placeholder="Password" onChange={(event)=>{
          p=event.target.value;
        }}/>
        <br />
              
        <button  style={{ width: '10%', backgroundColor: 'black', color: 'white' }}
        onClick={performTask}>Login</button>
        
      </div>
   );
  }
  else{return(<div> <App log={Log} setlog={setLog}/></div>);}
  }

   return(
    <div>
      <div>{}</div>
      <div>{login1()}</div>
    </div>
   )

}
export default Login;