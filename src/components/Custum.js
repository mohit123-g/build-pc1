import { useState, useEffect } from "react";
import "./Custum.css";

import { Card, CardBody, ChakraProvider, Stack } from "@chakra-ui/react";
import supabase from "../SupabaseClient";
import "../App.css";
import { insertJsonObject } from "./Ecom";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  Img,
  RadioGroup,
  Text,
  
} from "@chakra-ui/react";
import Alert from '@mui/material/Alert';

import { ErrorMessage, Field, Form, Formik } from "formik";
import { borderColor } from "@mui/system";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlayCUS">
      <div className="modalCUS">
        <button
          style={{ color:'red' ,fontSize:22,fontWeight:'bold'}}
          className="modal-closeCUS"
          onClick={onClose}
        >
          Close
        </button>
        <div
        // style={{
        //   height: "290px",
        //   overflowY: "auto",
        //   border: "1px solid #ccc",
        //   padding: "10px",
        // }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
const CustumPage = (props) => {
  // const [Custum, props.setcustum] = useState(
  //   JSON.parse(localStorage.getItem("Custum")) || {
  //     CPU: {},
  //     Mboard: {},
  //     RAM: {},
  //     GPU: {},
  //     Storage: {},
  //     Cabinat: {},
  //     PowerS: {},
  //     CabCooler: {},
  //     CPU_Cooler: {},
  //     SoundC: {},
  //     Cname:""
  //   }
  // );

  const CalTotal = () => {
    let total = 0;
    if (Object.keys(props.custum.CPU).length !== 0) {
      total += parseFloat(props.custum.CPU.price);
    }
    if (Object.keys(props.custum.GPU).length !== 0) {
      total += parseFloat(props.custum.GPU.price);
    }
    if (Object.keys(props.custum.RAM).length !== 0) {
      total += parseFloat(props.custum.RAM.price);
    }
    if (Object.keys(props.custum.Storage).length !== 0) {
      total += parseFloat(props.custum.Storage.price);
    }
    if (Object.keys(props.custum.Cabinat).length !== 0) {
      total += parseFloat(props.custum.Cabinat.price);
    }
    if (Object.keys(props.custum.PowerS).length !== 0) {
      total += parseFloat(props.custum.PowerS.price);
    }
    if (Object.keys(props.custum.Mboard).length !== 0) {
      total += parseFloat(props.custum.Mboard.price);
    }
    if (Object.keys(props.custum.CabCooler).length !== 0) {
      total += parseFloat(props.custum.CabCooler.price);
    }
    if (Object.keys(props.custum.CPU_Cooler).length !== 0) {
      total += parseFloat(props.custum.CPU_Cooler.price);
    }
    if (Object.keys(props.custum.SoundC).length !== 0) {
      total += parseFloat(props.custum.SoundC.price);
    }
    return total;
  };
  const [choosComp, setChoosComp] = useState("");
  const [Total, setTotal] = useState(0);
  // useEffect(() => {
  //   localStorage.setItem("Custum", JSON.stringify(Custum));
  // }, [Custum]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const UpdateCustumPC = async () => {
    try {
      // Validate the Custum object and localStorage item
      if (!props.custum|| !localStorage.getItem("userid")) {
        throw new Error("Invalid data or user ID.");
      }
  
      // Update the Supabase table with the modified JSON data
      const { data, error } = await supabase
        .from("CustumPC")
        .update({
          component: {
            CPU: props.custum.CPU,
            Mboard: props.custum.Mboard,
            RAM: props.custum.RAM,
            GPU: props.custum.GPU,
            Storage: props.custum.Storage,
            Cabinat: props.custum.Cabinat,
            PowerS: props.custum.PowerS,
            CabCooler: props.custum.CabCooler,
            CPU_Cooler: props.custum.CPU_Cooler,
            SoundC: props.custum.SoundC,
            Cname: props.custum.Cname,
          },
          Tprice:CalTotal()
        })
        .eq("id", localStorage.getItem("userid"));
  
      if (error) {
        throw error;
      }
  
      // Check if the update was successful
      if (data) {
        alert("User information updated successfully.");
      } else {
        throw new Error("Update operation failed.");
      }
    } catch (error) {
      console.error("Error updating user information:", error.message);
      // Notify the user about the error
      // alert("Your PC is Added to Cart");
    }
  };
  // <div className="cart-container">
  // <h2 className="cart-title">Your Shopping Cart</h2>

  // {cartItems.length === 0 ? (
  //   <p className="empty-cart-message">Your cart is empty</p>
  // ) : (
  //   <>
  //     <div className="cart-items-container">
  const ModalTemp = () => {
    console.log("open");
    // if (b != 0) {
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const itemCPU = []; //array of buttons
    const itemGPU = [];
    const itemRam = [];
    const itemMbord = [];
    const itemCab = [];
    const itemCabcooler = [];
    const itemCPUcooler = [];
    const itemSCard = [];
    const itemPsupply = [];
    const itemStorage = [];

    // var j = searchbox.length;
    // if (searchbox != "") {

 

    let modalContent;
switch (choosComp) {
  case "CPU":
    modalContent = (
  
        <div>
        <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
          More Info
        </h2>
        {props.comp.CPU
          .filter((select) => select.name === props.custum.CPU.name)
          .map((select, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {select.name}
              </h2>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10rem",
                }}
              >
                <img
                  style={{
                    height: "13rem",
                    width: "13rem",
                    marginRight: "1rem",
                  }}
                  src={select.img}
                  alt={select.name}
                />
                <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                  Brand: {select.spec.Brand}<br />
                  Cores: {select.spec.Cores}<br />
                  Speed: {select.spec.Speed}
                  <br />
                  Model: {select.spec.Model}
                  <br />
                  Socket Type: {select.spec.SocketType}
                </p>
              </div>
            </div>
          ))}
      </div>
      
    );
    break;
  case "GPU":
    modalContent = (
      
        <div>
        <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
          More Info
        </h2>
        {props.comp.GPU
          .filter((select) => select.name === props.custum.GPU.name)
          .map((select, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {select.name}
              </h2>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10rem",
                }}
              >
                <img
                  style={{
                    height: "13rem",
                    width: "13rem",
                    marginRight: "1rem",
                  }}
                  src={select.img}
                  alt={select.name}
                />
                  <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                Brand: {select.spec.Brand}<br />
                Memory: {select.spec.Memory}<br />
                Chipset: {select.spec.Chipset}
                <br />
                Model: {select.spec.Model}
                <br />
                Interface: {select.spec.Interface}
                <br />
                ClockSpeed: {select.spec.ClockSpeed}
              </p>
              </div>
            </div>
          ))}
      </div>
      
    );
    break;
  case "RAM":
    modalContent = (
      
      <div>
      <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
        More Info
      </h2>
      {props.comp.RAM
        .filter((select) => select.name === props.custum.RAM.name)
        .map((select, index) => (
          <div key={index}>
            <h2
              style={{
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {select.name}
            </h2>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10rem",
              }}
            >
              <img
                style={{
                  height: "13rem",
                  width: "13rem",
                  marginRight: "1rem",
                }}
                src={select.img}
                alt={select.name}
              />
              <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
              Brand:{select.spec.Brand}<br/>
              RAM Size:{select.spec.RAMSize}<br/>
              RAM Type:{select.spec.RAMType}
                <br />
                Model:{select.spec.Model}
                <br />
                Quantity:{select.spec.Quantity}
              </p>
            </div>
          </div>
        ))}
    </div>
    
  );
    break;
    case "Mboard":
    modalContent = (
      
      <div>
      <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
        More Info
      </h2>
      {props.comp.Mboard
        .filter((select) => select.name === props.custum.Mboard.name)
        .map((select, index) => (
          <div key={index}>
            <h2
              style={{
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {select.name}
            </h2>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10rem",
              }}
            >
              <img
                style={{
                  height: "13rem",
                  width: "13rem",
                  marginRight: "1rem",
                }}
                src={select.img}
                alt={select.name}
              />
              <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
              Brand:{select.spec.Brand}<br/>
              Form Factor:{select.spec.FormFactor}<br/>
              Chipset:{select.spec.Chipset}
                <br />
                Model:{select.spec.Model}
                <br />
                Memory Slot:{select.spec.MemorySlot}<br/>
                Socket Type:{select.spec.SocketType}
              </p>
            </div>
          </div>
        ))}
    </div>
    
  );
    break;
    case "Cabinat":
      modalContent = (
        
        <div>
        <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
          More Info
        </h2>
        {props.comp.Cabinat
          .filter((select) => select.name === props.custum.Cabinat.name)
          .map((select, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {select.name}
              </h2>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10rem",
                }}
              >
                <img
                  style={{
                    height: "13rem",
                    width: "13rem",
                    marginRight: "1rem",
                  }}
                  src={select.img}
                  alt={select.name}
                />
                <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                Brand:{select.spec.Brand}<br/>
                Color:{select.spec.Color}<br/>
                Side Panel:{select.spec.SidePanel}
                <br />
                Model:{select.spec.Model}
                <br />
                Cabinet Type:{select.spec.CabinetType}
                </p>
              </div>
            </div>
          ))}
      </div>
      
    );
      break;
      case "PowerS":
      modalContent = (
        
        <div>
        <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
          More Info
        </h2>
        {props.comp.PowerS
          .filter((select) => select.name === props.custum.PowerS.name)
          .map((select, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {select.name}
              </h2>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10rem",
                }}
              >
                <img
                  style={{
                    height: "13rem",
                    width: "13rem",
                    marginRight: "1rem",
                  }}
                  src={select.img}
                  alt={select.name}
                />
                <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                Brand:{select.spec.Brand}<br/>
                Color:{select.spec.Color}<br/>
                Power:{select.spec.Power}
                <br />
                Model:{select.spec.Model}
                <br />
                Efficiency:{select.spec.Efficiency}
                </p>
              </div>
            </div>
          ))}
      </div>
      
    );
      break;
      case "Storage":
        modalContent = (
          
          <div>
          <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
            More Info
          </h2>
          {props.comp.Storage
            .filter((select) => select.name === props.custum.Storage.name)
            .map((select, index) => (
              <div key={index}>
                <h2
                  style={{
                    fontSize: 24,
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  {select.name}
                </h2>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10rem",
                  }}
                >
                  <img
                    style={{
                      height: "13rem",
                      width: "13rem",
                      marginRight: "1rem",
                    }}
                    src={select.img}
                    alt={select.name}
                  />
                  <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                  Brand:{select.spec.Brand}<br/>
                Type:{select.spec.Type}<br/>
                RPM:{select.spec.RPM}
                <br />
                Model:{select.spec.Model}
                <br />
                Interface:{select.spec.Interface}<br/>
                CashMemory:{select.spec.CacheMemory}
                  </p>
                </div>
              </div>
            ))}
        </div>
        
      );
        break;
        case "CPU_Cooler":
          modalContent = (
            
            <div>
            <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
              More Info
            </h2>
            {props.comp.CPU_Cooler
              .filter((select) => select.name === props.custum.CPU_Cooler.name)
              .map((select, index) => (
                <div key={index}>
                  <h2
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {select.name}
                  </h2>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10rem",
                    }}
                  >
                    <img
                      style={{
                        height: "13rem",
                        width: "13rem",
                        marginRight: "1rem",
                      }}
                      src={select.img}
                      alt={select.name}
                    />
                    <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                    Brand:{select.spec.Brand}<br/>
                  Color:{select.spec.Color}<br/>
                FanRPM:{select.spec.FanRPM}
                  <br />
                  Model:{select.spec.Model}
                  <br />
                  NoiseLevel:{select.spec.NoiseLevel}
                       </p>
                  </div>
                </div>
              ))}
          </div>
          
        );
          break;
          case "CabCooler":
            modalContent = (
              
              <div>
              <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
                More Info
              </h2>
              {props.comp. CabCooler
                .filter((select) => select.name === props.custum.CabCooler.name)
                .map((select, index) => (
                  <div key={index}>
                    <h2
                      style={{
                        fontSize: 24,
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: 0,
                      }}
                    >
                      {select.name}
                    </h2>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10rem",
                      }}
                    >
                      <img
                        style={{
                          height: "13rem",
                          width: "13rem",
                          marginRight: "1rem",
                        }}
                        src={select.img}
                        alt={select.name}
                      />
                      <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                      Brand:{select.spec.Brand}<br/>
                  Air Flow:{select.spec.Airflow}<br/>
                FanRPM:{select.spec.FanRPM}
                  <br />
                  Model:{select.spec.Model}
                  <br />
                  NoiseLevel:{select.spec.NoiseLevel}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            
          );
            break;
            case "SoundC":
              modalContent = (
                
                <div>
                <h2 style={{ textAlign: "left", fontSize: 25, fontWeight: "bold" }}>
                  More Info
                </h2>
                {props.comp.SoundC
                  .filter((select) => select.name === props.custum.SoundC.name)
                  .map((select, index) => (
                    <div key={index}>
                      <h2
                        style={{
                          fontSize: 24,
                          textAlign: "center",
                          fontWeight: "bold",
                          margin: 0,
                        }}
                      >
                        {select.name}
                      </h2>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10rem",
                        }}
                      >
                        <img
                          style={{
                            height: "13rem",
                            width: "13rem",
                            marginRight: "1rem",
                          }}
                          src={select.img}
                          alt={select.name}
                        />
                        <p style={{ textAlign: "left", fontSize: 22, fontWeight: "bold" }}>
                        Brand:{select.spec.Brand}<br/>
                    SNR:{select.spec.SNR}<br/>
                  Interface:{select.spec.Interface}
                    <br />
                    Model:{select.spec.Model}
                    <br />
                    CabinetType:{select.spec.CabinetType}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              
            );
              break;
  // Add cases for other components here
  default:
    modalContent = null;
}
    return (
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
        </Modal>
      </div>
    );
    // }
    // }
  };
  const [msg, setMsg] = useState("");
  const [components,setComponents] =useState ([
    {
      id: 1,
      type: "Processor",
      Scat: "Intel",
      cat:["Intel","AMD"]
    },
    {
      id: 2,
      type: "Motherboard",
      Scat: "MSI",
      cat:["MSI","ASUS","ASRock","Gigabyte"],
    },
    {
      id: 3,
      type: "RAM",
      Scat: "Corsair",
      cat:["Corsair","G.Skill","HyperX","ADATA"]
    },
    {
      id: 4,
      type: "Graphic Card",
      Scat: "Gigabyte",
      cat:["PNY","Gigabyte","MSI","VisionTek","ZOTAC",
      ,"Sapphire Technology","ASUS","XFX","Intel"]
    },
    {
      id: 5,
      type: "Storage",
      Scat: "Samsung",
      cat:["Samsung","Seagate","Western Digital","Crucial","Corsair","ADATA"]
    },
    {
      id: 6,
      type: "Cabinet",
      Scat: "NZXT",
      cat:["NZXT","Fractal Design","Corsair","AeroCool","ASUS","Gigabyte","Thermaltake"]
    },
    {
      id: 7,
      type: "Power Supply",
      Scat: "Corsair",
      cat:["Corsair","EVGA","Cooler Master","Thermaltake","Seasonic","ASUS","Antec","XPG","SilverStone Technology"]
    },
    {
      id: 8,
      type: "Cabinet Cooler",
      Scat: "Cooler Master",
      cat:["Cooler Master","NZXT","Corsair","Noctua","be quiet!","DEEPCOOL","Antec","Thermaltake"]
    },
    {
      id: 9,
      type: "CPU Cooler",
      Scat: "Cooler Master",
      cat:["Cooler Master","Corsair","Noctua","Thermaltake","ASUS","Scythe","Rosewill"]
    },
    {
      id: 10,
      type: "Sound Card",
      Scat: "ASUS",
      cat:["Creative","ASUS","EVGA","HT OMEGA"]
    },
  ])
// const  [Products,setProduct]=useState({
  
// })
  
// Make a copy of the components array
const updatedComponents = [...components];


  return (
    <div className="AppIP">
      {ModalTemp()}
      {props.setcheck(1)}
      <br />

      <h1
        style={{
          
          fontSize: "2vmax",
          fontWeight: "bold",
          fontFamily: "initial",
        }}
      >
        Customize Your PC
      </h1>
      <br />
      <Text style={{  fontSize: 24 }}>
        Total Amount:{" "}
        <strong 
        className="neontext"
        // style={{ color: "greenyellow" }}
        >
          ₹{CalTotal().toLocaleString("en-IN")}
        </strong>
      </Text>

      <Button
  borderRadius={0}
  // isLoading={isSubmitting}
  // type='submit'
  mt={3}
  py={4}
  className="buy"
  onClick={() => {
    let falg=true
    Object.keys(props.custum).forEach((key) => {
      if(Object.keys(props.custum[key]).length === 0){falg = false;}
    });
    if(falg===true){
   
    props.setnewobject({
      ...props.newobject,
      itemid: Number(props.custumfinal.id)

      // localStorage.getItem("userid")
       // Assuming you want to update the 'itemid' in newObject
    });
    console.log(props.newobject);
    insertJsonObject(
      props.cartdata,
      props.newobject,
      props.existingdata
    );
    UpdateCustumPC();
  }
    else{alert('Please Choose All Components')};
  }}
>
  Add to Cart
</Button>

      <ChakraProvider>
        <box
          // backgroundImage="url('/components/bgimge.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Formik
          initialValues={{
            Processor: "",
            Motherboard: "",
            RAM: "",
            Storage: "",
            Cabinet: "",
            Graphics: "",
          }}
        >
          <Box
            maxW="155rem"
            mx="auto"
            pt="0.5rem"
            pb="4rem"
            px={{ base: "1rem", md: "2rem" }}
          >
            <Grid templateColumns="repeat(6, 1fr)" gap={20} py={8}>
              <GridItem
                colSpan={{ base: 6, lg: 4 }}
                style={{
                  // overflowY: "scroll",
                  // scrollbarWidth: "0.1px",
                  // scrollbarColor: "black",
                  // height: "79rem",
                }}
              >           <p>
	<span class="input">
		<input type="text" value={props.custum.Cname} 
  onChange={(e) => {
  
      props.setcustum({
        ...props.custum, Cname: e.target.value,
      });
    
  }}    placeholder="Enter Your Custom PC Name"/>
		<span></span>	
	</span>
</p>
                <Form>
                  <Accordion alllowToggle>
                    {/* {components.map((item) => {
                return ( */}
                    {Object.keys(props.custum).map((key, index) => (
                    key ==="Cname" ? null:(
                      <AccordionItem ml={"1rem"}>
                        <h2>
                          <AccordionButton
                            _focus={{ boxShadow: "none" }}
                            bgGradient={"linear(to-l, #3e1cad, #2575e6)"}
                            _hover={{ bg: "blue.900" }}
                            py={3}
                            color="white"
                          >
                            <Box flex="1" textAlign="left">
                              {index <= 9 ? components[index].type : null}
                            </Box>
                           

                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                   

                        <AccordionPanel pb={4}>
                        <select 
  onChange={(event) => { 
    if (index <= 9) {
      updatedComponents[index] = { ...updatedComponents[index], Scat: event.target.value};

      // setComponents({...components[index], Scat: event.target.value});
      setComponents(updatedComponents);

    }
  }}
>
  {index <= 9 && components[index].cat.map((category, catIndex) => (
    <option key={catIndex} value={category}>{category}</option>
  ))}
</select>

{/* <select onChange={(event) => setComponents(components[index], { Scat: event.target.value })}>
  {index <= 9 && components[index].cat.map((category, catIndex) => (
    <option key={catIndex} value={category}>{category}</option>
  ))}
</select> */}

                          <RadioGroup
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            color="red"
                            overflowY="scroll"
                            h={"45rem"}
                            backgroundColor={'#E5E6E4'}
                          >
                            
                            {props.comp[key].map((component) => {
                              if (!component) return null; // Skip rendering if component is undefined
                              // if((index <= 9 ? components[index].Scat : null)===component.spec.Brand){
                                // if (key === "Mboard") {
                                //   for(let i=0;i<props.custum.CPU.mboard.length;i++){
                                  // if (props.custum.CPU.mboard[i]==13) {
                                  //   console.log(component.id);
                                  //   console.log(component.name);
                                  // } else {
                                    // console.log("-----------");
                                  // }
                                  // console.log(props.custum.CPU.mboard[i]);
                                
                                // }
                                // }
                                // if (key === "Mboard") {
                                //   if (props.custum.CPU.mboard.includes(Number(component.id))) {
                                //     console.log(component.id);
                                //     console.log(component.name);
                                //   }
                                // }
                                
                                
                                // console.log (props.custum.CPU.mboard[2])
                                // console.log(typeof Number(component.id),"sec")
                              return (
                                <Card
                                  onClick={() => {
                                    console.log("Clicked");
                                    if (key && component) {
                                      props.setcustum({
                                        ...props.custum,
                                        [key]: component,
                                      });
                                    }
                                  }}
                                  key={component.id}
                                  mt={3}
                                  mr={3}
                                  w={"21rem"}
                                  direction={{ base: "column", sm: "row" }}
                                  overflow="hidden"
                                  // style={{overflow:"scrol"}}

                                  variant={"filled"}
                                  bg={"white"}
                                  borderWidth={"4px"}
                                  // borderColor={'blue'}
                                  borderColor={
                                    props.custum[key]?.name === component.name &&
                                    props.custum[key] &&
                                    Object.keys(props.custum[key]).length !== 0
                                      ? "#FFD700"
                                      : "white"
                                  }
                                >
                                  <CardBody h={"25rem"}>
                                    <div style={{ height: "20.5rem" }}>
                                      <Img
                                        style={{
                                          height: "12rem",
                                          width: "15rem",
                                        }}
                                        objectFit="cover"
                                        ml="2rem"
                                        src={component.img}
                                      />
                                      <Text
                                        fontSize="0.8rem"
                                        mt={"1rem"}
                                        fontWeight="medium"
                                        textAlign="left"
                                        color={"black"}
                                        letterSpacing="1px"
                                      >
                                        {component.name}
                                      </Text>
                                    </div>
                                    {/* <Stack mt='4' spacing='3'> */}
                                    <div
                                      style={{
                                        backgroundColor: "#D2D2D2",
                                        width: "20rem",

                                        marginLeft: "-1rem",
                                        // marginBottom:'-20rem'
                                      }}
                                    >
                                      <Text className="neontext"
                                        style={{
                                          fontSize: 19,
                                          fontWeight: "bolder",
                                        }}
                                        // color={"#FFD700"}
                                      >
                                        ₹
                                        {parseFloat(
                                          component.price
                                        ).toLocaleString("en-IN")}
                                      </Text>
                                      <button
                                        onClick={() => {
                                          openModal();
                                          setChoosComp(key);
                                        }}
                                        // ml={"18rem"}
                                        // color={"black"}
                                        // fontWeight={"bold"}
                                        // fontSize={2}
                                        style={{
                                          marginLeft: "15rem",
                                          color: "black",
                                          fontWeight: "bold",
                                          fontSize: 16,
                                        }}
                                      >
                                        more info
                                      </button>
                                    </div>

                                    {/* </Stack> */}
                                  </CardBody>
                                </Card>
                              );
                            // }
                            })}
                            {/* <h8 style={{ display: "none" }}>{i++}</h8> */}
                          </RadioGroup>
                        </AccordionPanel>
                      </AccordionItem>)
                    ))}
                    {/* // )}
                // )} */}
                  </Accordion>

                  <Box my={3}></Box>
                  {msg && (
                    <Text color="green.500" fontWeight="semibold">
                      {msg}
                    </Text>
                  )}
                </Form>
              </GridItem>
              <GridItem
                colSpan={{ base: 6, lg: 2 }}
                style={{ marginRight: "-2rem" }}
              >              <button   onClick={()=>{localStorage.removeItem("Custum");
              window.location.reload();
            }}
              style={{marginTop:'1rem', display: "flex", alignItems: "center"}}
              className="button-70">Clear All</button>

                <Box bg={"#D2D2D2"} border="1px solid gray" py={0} px={3}>
                  <Box mb={6}>
                    <Text fontWeight="semibold" fontSize="20" color={"black"}>
                      Components
                    </Text>
                    
                  </Box>

                  {Object.keys(props.custum).map((key, index) => (
                                      key ==="Cname" ? null:(

                    <>
                      <Box mb={3}>
                        
                        <Text fontWeight="semibold" color=" #2575e6"
                        >
                          {index <= 9 ? components[index].type : null}
                          
                        </Text>

                        {props.custum[key] &&
                        Object.keys(props.custum[key]).length !== 0 ? (
                          <>
                         
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                style={{
                                  height: "5rem",
                                  width: "5rem",
                                  marginRight: "1rem",
                                }}
                                src={props.custum[key].img}
                                alt={props.custum[key].name}
                              />
                              <h2
                                style={{
                                  fontSize: 13,
                                  color: "black",
                                  textAlign: "left",
                                  margin: 0,
                                }}
                              >
                                {props.custum[key].name}
                              </h2>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "left",
                                marginLeft: "0.4rem",
                              }}
                            >
                                <Text className="neontext"
                                        style={{
                                          fontSize: 18,
                                          fontWeight: "bold",
                                        }}
                                        // color={"#FFD700"}
                                      >
                                        ₹
                                        {parseFloat(
                                          props.custum[key].price
                                        ).toLocaleString("en-IN")}
                                      </Text>
                            
                            
                            </div>
                         
                            <div style={{marginTop:'-2rem'}}>  <button
                            className="button-70"
                            onClick={() =>
                              props.setcustum({ ...props.custum, [key]: {} })
                            }
                          >
                            Remove
                          </button>{" "}</div>

                         
                          </>
                          
                        ) : (
                          <Text fontSize="sm" color={"black"} my={0}>
                            N/A
                          </Text>
                        )}
                        <Divider />
                      </Box>
                      {/* <h8 style={{ display: "none" }}>{i2++}</h8> */}
                    </>)
                  ))}
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Formik>
      </ChakraProvider>
      <div style={{          paddingBottom: "15rem", // Adjust the value to increase or decrease space at the bottom
}}>
      </div>
    </div>
  );
};
export default CustumPage;
