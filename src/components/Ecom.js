import "../App.css";
import "./ItemPage.css";
import "./Ecom.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemPage from "./lapPage";
import { checkboxClasses } from "@mui/material";
import supabase from "../SupabaseClient";
import { json } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const insertJsonObject = async (
  cartdataex,
  newobjectex,
  existingdataex
) => {
  let flag = 0;

  //  for(let k=0;k<props.cartdata.length;k++){
  //   if(props.cartdata[k].uid===t){
  for (let i = 0; i < cartdataex[0].citem.length; i++) {
    var cidtemp = Number(cartdataex[0].citem[i].itemid);
    var idtemp = Number(newobjectex.itemid);
    console.log(cidtemp, "", idtemp, "  ");
    console.log(typeof cartdataex[0].uid);
    if (idtemp === cidtemp) {
      flag = 1;
    }
  }
  // }}
  if (flag === 0) {
    // Add the new object to the existing JSON data
    const updatedData = [...existingdataex, newobjectex];
    try {
      // Update the Supabase table with the modified JSON data
      const { error } = await supabase
        .from("Cart") // Replace with your actual table name
        .update({ citem: updatedData })

        .eq("uid", localStorage.getItem("userid")); // Replace 'id' with your unique identifier column and 'rowId' with the actual ID
      // .insert(
      //   {
      //     citem: updatedData,
      //     // ... other columns and their values
      //   },
      // );

      if (error) {
        throw error;
      }

      console.log("New object added to JSON:", newobjectex);
      alert("Item is Added to Cart");

      window.location.reload();

      // Perform any actions after successful insertion
    } catch (error) {
      console.error("Error inserting object:", error.message);
    }
  }
};


const SliderComponent = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    adaptiveHeight: true,
  
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <Slider {...sliderSettings} ref={sliderRef} >
      <div className="slide">
        <img alt='sample_file' src='https://origincdnv2.blob.core.windows.net/img/home/slides/2024/nvidia-4080-super/nvidia-4080-super.jpg' />
      </div>
      <div className="slide">
        <img alt='sample_file' src='https://origincdnv2.blob.core.windows.net/img/home/slides/2024/jan-update/January-promo.jpg' />
      </div>
      <div className="slide">
        <img alt='sample_file' src='https://cdn.originpc.com/img/home/slides/2023/full-uv-print/full-uv-print-1.jpg' />
      </div>
      <div className="slide">
        <img alt='sample_file' src='https://origincdnv2.blob.core.windows.net/img/home/slides/2024/jan-update/January-promo.jpg' />
      </div>
      <div className="slide">
        <img alt='sample_file' src='https://cdn.originpc.com/img/home/slides/2023/full-uv-print/full-uv-print-1.jpg' />
      </div>
    </Slider>
  );
};


const Ecom = (props) => {
    // const [SelectData,setSelectData]=useState([]);
  // // const [Check1,setCheck1]=useState(JSON.parse(localStorage.getItem("che"))||true)
  // // useEffect(()=>{
  // //       localStorage.setItem('che',JSON.stringify(Check1));
  // //     },[Check1]);

  var [budget, setbudget] = useState(
    JSON.parse(localStorage.getItem("Budget")) || 0
  );
  var [Work, setWork] = useState("");

  //    const [existingData, setExistingData] = useState([]);
  // const [newObject, setNewObject] = useState({
  //     q:1,
  //     itemid:0,
  // Add any other properties for the new JSON object
  // });

  var t = Number(props.userid1);

  useEffect(() => {
    fetchData(); // Fetch the existing JSON data when component mounts
    // setExistingData(props.cartdata[1].citem);
  }, []);

  useEffect(() => {
    localStorage.setItem("Budget", JSON.stringify(budget));
  }, [budget]);
  const fetchData = async () => {
    // let rowNo=-1;

    try {
      // Fetch the existing JSON data from Supabase
      const { data, error } = await supabase
        .from("Cart") // Replace with your actual table name
        .select("citem") // Replace with the actual column name
        .eq("uid", localStorage.getItem("userid"));
      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        //  console.log("fatch"+props.rowno)
        // Set the existing JSON data to state
        props.setexistingdata(data[0].citem);
      }
      // break;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const itemsLap = () => {
    const item = []; //array of buttons
    for (let i = 0; i < props.lapdata.length; i++) {
      item.push(
        <div className="my-grid-item">
          <h7 style={{ color: "black",fontWeight:'bolder',fontSize:17}}>{props.lapdata[i].name}  </h7><br></br>
          <h7 id="pricetext" 
          // style={{ color: "white"}}
          >₹{parseFloat(props.lapdata[i].price).toLocaleString('en-IN')}</h7>

          <h7><br/><pre>
          {/* <a href="PaymentPage"><button 
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
          className="buy" role="button">Buy Now</button></a>   */}
          <button 
              className="buy" role="button"
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
          </h7><br/>
          <div>

          <a href={"/lapPage/" + i}  style={{textDecoration: "none"}}>
            <img id="but2" src={props.lapdata[i].img[0]} />
            <h5  style={{ color: "black",fontWeight:'bold',fontSize:15 }}>{props.lapdata[i].desc}</h5>
          </a>
          </div>
        </div>
      );
    }
    console.log(props.sel);

    return item;
  };
  const itemsPC = () => {
    const item = []; //array of buttons
    for (let i = 0; i < props.pcdata.length; i++) {
      if ( parseFloat(props.pcdata[i].price) < budget) {
        item.push(
          <div className="my-grid-item">
            <h7   style={{color: "black"}}>{props.pcdata[i].name}  </h7><br/>
            <h7 id="pricetext"
            // style={{ color: "white" }}
            >₹{parseFloat(props.pcdata[i].price).toLocaleString('en-IN')}</h7>
            <h7><br/>
            <pre> 
               {/* <a href="PaymentPage"><button  
             onClick={() => {
              props.setnewobject({
                ...props.newobject,
                itemid: Number(props.pcdata[i].id), // Assuming you want to update the 'itemid' in newObject
              });
              console.log(props.newobject);
              insertJsonObject(
                props.cartdata,
                props.newobject,
                props.existingdata
              );
            }}
            className="buy">Buy Now</button></a>   */}
            <button
                className="buy"
                onClick={() => {
                  props.setnewobject({
                    ...props.newobject,
                    itemid: Number(props.pcdata[i].id), // Assuming you want to update the 'itemid' in newObject
                  });
                  console.log(props.newobject);
                  insertJsonObject(
                    props.cartdata,
                    props.newobject,
                    props.existingdata
                  );
                  // alert("Item is Added to Cart");

                }}
              >
                Add to Cart
              </button></pre>
            </h7><br/>
            <div >
              <a href={"/pcPage/" + i}style={{textDecoration: "none"}}>
                {" "}
                <img id="but2" src={props.pcdata[i].img[0]} />
                <h5 style={{ color: "black",fontWeight:'bold',fontSize:15 }}>{props.pcdata[i].desc}</h5>
              </a>
            </div>
          </div>
        );
      }
    }
    console.log(props.sel);

    return item;
  };

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

  const select = () => {
    if (!props.check) {
      if (props.sel === "PC") {
        return itemsPC();
      }
      if (props.sel === "L") {
        return itemsLap();
      }
    }
  };
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
          <button
            style={{ color: "black" }}
            className="modal-close"
            onClick={onClose}
          >
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
  const Budget = () => {
    if (b != 0) {
      const closeModal = () => {
        setIsModalOpen(false);
      };
      var bs = 20;
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h5>
              <form>
                <label style={{ color: "black" }}>Enter Your Budger:</label>
                <br />
                <input
                  type="number"
                  onChange={(event) => {
                    bs = event.target.value;
                  }}
                />
                <br />
                <label style={{ color: "black" }}>
                  For Which Work You are Buying PC :
                </label>
                <br />
                {/* <input
                  type="text"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                /> */}
                <select>
                  <option selected>Office</option>
                  <option selected>Coding</option>
                  <option selected>Gaming</option>
                  <option selected>Editing</option>

                </select>
                <br />
                <br />
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  onClick={() => {
                    props.setsel("PC");
                    setb(0);
                    setbudget(bs);
                    closeModal();
                  }}
                >
                  GO
                </button>
              </form>
            </h5>
          </Modal>
        </div>
      );
    }
  };

  const Choos = () => {
    if (props.check == 0) {
      //     return(<div className="App1">
      //   <h2 > <button onClick={()=>{props.setsel("PC")}}>PC</button>
      //                  <button onClick={()=>{props.setsel("L")}}>Laptop</button>
      //                            </h2>
      //     </div>)
      return (
        <div>
            <SliderComponent/>
          <div className="App1">
            <h2 >Select What You Want To See</h2><br/>
          </div>
          <div className="page-container ">
            <div className="centered-items">
              <div className="item">
                <h4 style={{ color: "black" }}>PreBuild PC</h4>
                <button
                  onClick={() => {
                    setb(1);
                    openModal();
                    props.setsel("o");
                  }}
                >
                  {" "}
                  <img
                    id="but3"
                    src="https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672"
                  />{" "}
                </button>
              </div>
              <div className="item">
                <h4 style={{ color: "black" }}>Custom PC</h4>
                <a href="/Custum">
                  {" "}
                  <button
                    onClick={() => {
                      // props.setsel("PC");
                      //  setbudget(300000)
                    }}
                  >
                    {" "}
                    <img
                      id="but3"
                      src="https://themvp.in/catalog/view/assets/img/PC-Avinash-Singh.webp"
                    />
                  </button>{" "}
                </a>
              </div>
              <div className="item">
                <h4 style={{ color: "black" }}>Laptop</h4>
                <button
                  onClick={() => {
                    props.setsel("L");
                  }}
                >
                  <img
                    id="but3"
                    src="https://cdn.originpc.com/opc/product/opc-blob-b21e30ad-cbca-4fe3-886e-37f6292bd0f4.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // )}else{}

  return (
    // <div style={{marginTop:'-680px'}}>
    //   <SliderComponent />
    <div className="App">
      
      {/* <SelectDropdown/> */}
      {}
      {/* <SliderComponent/> */}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <div>{Budget()}</div>
      <div>{Choos()}</div>

      <div className="my-grid-container">{select()}</div>
      
    </div>
    // </div>
  );
};

export default Ecom;
