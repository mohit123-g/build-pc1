import "../App.css";
import "./ItemPage.css"
import "./Ecom.css"
import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import ItemPage from "./ItemPage";
import { checkboxClasses } from "@mui/material";
import supabase from "../SupabaseClient";

const Ecom=(props)=>{
   
    // const [SelectData,setSelectData]=useState([]);
    // // const [Check1,setCheck1]=useState(JSON.parse(localStorage.getItem("che"))||true)
    // // useEffect(()=>{
    // //       localStorage.setItem('che',JSON.stringify(Check1));
    // //     },[Check1]);
   
       
  var [budget,setbudget]=useState(20000)
  var [Work,setWork]=useState("")
  
  const [existingData, setExistingData] = useState([]);
  const [newObject, setNewObject] = useState({
    q:1,
    itemid:0,
    // Add any other properties for the new JSON object
  });

  useEffect(() => {
    fetchData(); // Fetch the existing JSON data when component mounts
  }, []);


  const fetchData = async () => {
    try {
      // Fetch the existing JSON data from Supabase
      const { data, error } = await supabase
        .from('Cart') // Replace with your actual table name
        .select('citem'); // Replace with the actual column name

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        // Set the existing JSON data to state
        setExistingData(data[0].citem);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };


  const insertJsonObject = async () => {
   let flag=0;
    for (let i = 0; i < props.cartdata[0].citem.length; i++) {
      var cidtemp = Number(props.cartdata[0].citem[i].itemid);
      var idtemp = Number(newObject.itemid );
      console.log(cidtemp,"",idtemp);
    if(idtemp=== cidtemp){flag=1;}
    }
      if (flag===0) {
        // Add the new object to the existing JSON data
        const updatedData = [...existingData, newObject];
      try {
      // Update the Supabase table with the modified JSON data
      const { error } = await supabase
        .from('Cart') // Replace with your actual table name
        .update({ citem: updatedData })
        .eq('uid', 11 ); // Replace 'id' with your unique identifier column and 'rowId' with the actual ID
        // .insert(
        //   {
        //     citem: updatedData,
        //     // ... other columns and their values
        //   },
        // );
  

      if (error) {
        throw error;
      }
    
      console.log('New object added to JSON:', newObject);
      window.location.reload();

      // Perform any actions after successful insertion
    } catch (error) {
      console.error('Error inserting object:', error.message);
    }}
  };


    const itemsLap=()=>{
    const item = []; //array of buttons
    for (let i =0; i < props.lapdata.length; i++) {
        item.push(
            <div className="my-grid-item"   >
              
            <h6 style={{color:'white'}}>{props.lapdata[i].name}</h6>
            <h6  style={{color:'white'}}>${props.lapdata[i].price}</h6>
            <h6 ><button className="buy" >Buy Now</button>
            <button className="buy"   onClick={()=>{setNewObject({
                          
                          ...newObject,itemid:Number(props.lapdata[i].id) // Assuming you want to update the 'itemid' in newObject
                       
                        });
                        console.log(newObject)
                      
                        insertJsonObject();
                        }}>Add to Cart</button></h6>
           <a href={"/IPage/"+i} ><img   id='but2' src={props.lapdata[i].img}  />
            <h6  style={{color:'white'}}>{props.lapdata[i].desc}</h6></a> 
            
            </div>
        )
        
    }
    console.log(props.sel)
   
    return item;
 }
 const itemsPC=()=>{

    const item = []; //array of buttons
    for (let i = 0; i < props.pcdata.length; i++) {
      if(props.pcdata[i].price<budget){
        item.push(
           <div className="my-grid-item"  >
              
            <h6  style={{color:'white'}}>{props.pcdata[i].name}</h6>
            <h6  style={{color:'white'}}>${props.pcdata[i].price}</h6>
            <h6 ><button className="buy" >Buy Now</button>
            <button className="buy" onClick={()=>{setNewObject({
                          
                  ...newObject,itemid:Number(props.pcdata[i].id) // Assuming you want to update the 'itemid' in newObject
               
                });
                console.log(newObject)
                insertJsonObject();
                }}>Add to Cart</button></h6><div>
            <a href={"/IPage/"+i}>  <img  id='but2' src={props.pcdata[i].img}  />
            <h6  style={{color:'white'}}>{props.pcdata[i].desc}</h6>
            
            </a></div>
            </div>
        )
      }
    }
    console.log(props.sel)

    return item;
 }
 


//  const fatchData=async (processing)=>{
//     await fetch('http://localhost:3001/users')
//    .then(res=>res.json())
//    .then(data=>{if (processing){
//     setSelectData(data)}
// })
//    .then(err=>console.log(err))
//  }


// const axiosFatchData=async (processing)=>{
// //    const options={
// //     id:id,
// //     name:name,
// //     price:price,
// //     img:img,
// //     desc:desc
// //    }

//     await axios.get('http://localhost:3002/users')
//    .then(res=>{
//     if (processing){
//     setSelectData(res.data)}
// })
//    .then(err=>console.log(err))
//    .catch(error => {
//     console.error('Axios Error:', error);
//   });
//  }
// //  const SelectDropdown=()=>{
// //     return(
// //         <select>
// //             {
// //             SelectData.map((item)=>(
// //                 <option value={item.name} key={item.id}>{item.name}</option>
// //             ))
// //             }
// //         </select>
// //     )
// //  }
  
//   useEffect(()=>{
//     let processing=true
//     axiosFatchData(processing)
//     return ()=>{
//         processing=false
//     }
    
// },[]);




 const select=()=>{
    if(!props.check){
      
      if(props.sel==="PC")
      {return itemsPC()}
      if(props.sel==="L")
      {return itemsLap()}    
    }
    }
   //  const [inputValue, setInputValue] = useState("");
    const [b, setb] = useState(0);

//   const handleInputChange = (event) => {
//     const inputText = event.target.value;
//     const alphabetOnly = inputText.replace(/[^A-Za-z]/g, ""); // Remove non-alphabet characters
//     setInputValue(alphabetOnly);
//   };
 
  
  const Modal = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;
 
   return (
     <div className="modal-overlay">
       <div className="modal">
         <button style={{  color: 'black' }} className="modal-close" onClick={onClose}>
           Close
         </button>
         {children}
       </div>
     </div>
   );
 };
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
    setIsModalOpen(true);
  };
    const Budget=()=>{
      
  if(b!=0){
  

  const closeModal = () => {
    setIsModalOpen(false);
  };
    var bs=20000;
      return(
         <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
           <h5>  
            <form>
               
              <label style={{  color: 'black' }}>Enter Your Budger:</label><br/>
               <input type="number" onChange={(event)=>{
          bs=event.target.value;  
        }}/><br/>
               <label style={{  color: 'black' }}>For Which Work You are Buying PC :</label><br/>
               <input  type="text"
      //   value={inputValue}
      //   onChange={handleInputChange}
        /><br/><br/>
       <button style={{ width: '100%', backgroundColor: 'black', color: 'white' }}
       onClick={()=>{props.setsel("PC"); setb(0); setbudget(bs); closeModal();}}
       >GO</button>



            </form></h5>
            </Modal>
         </div>
      )}
    }

 const Choos=()=>{
    if(props.check==0){
//     return(<div className="App1">
//   <h2 > <button onClick={()=>{props.setsel("PC")}}>PC</button>
//                  <button onClick={()=>{props.setsel("L")}}>Laptop</button>
//                            </h2>
//     </div>)
return(
   <div> 
       <div className="App1"><h3 style={{color:"white"}}>Select What You Want To See</h3></div>
    <div className="page-container ">
    <div  className="centered-items">   
   <div  className="item" >
       <h4  style={{color:"black"}}>Custum PC</h4>
       <button  onClick={()=>{props.setsel("PC"); setbudget(300000) }}> <img id="but3"  src="https://themvp.in/catalog/view/assets/img/PC-Avinash-Singh.webp"/></button>                                   
   </div>
   <div  className="item">
       <h4  style={{color:"black"}}>PreBuild PC</h4>
      <button  onClick={()=>{setb(1); openModal(); props.setsel("o")}}> <img id="but3" src="https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672"/> </button>                                  
   </div>
   <div  className="item">
       <h4  style={{color:"black"}}>Laptop</h4>
      < button onClick={()=>{props.setsel("L")}}><img id="but3" src="https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"/></button>                                   
   </div>
   </div>
   </div>
</div>)
    }
    
 }

 
       
    // )}else{}
 
    return(
        <div className="App">
        <br></br><br></br><br></br><br></br>
        {/* <SelectDropdown/> */}
        <div>{Budget()}</div>
        <div>{Choos()}</div>
          
           <div className="my-grid-container" >
              {select()}

           </div>
        </div>
    );
    }
export default Ecom;