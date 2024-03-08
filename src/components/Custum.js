import { useState, useEffect } from "react";
import "./Custum.css";

const Custum = (props) => {
  const [Custum, setCustom] = useState(
    JSON.parse(localStorage.getItem("Custum")) || {
      CPU: {},
      GPU: {},
      RAM: {},
      CPU_Cooler: {},
      CabCooler: {},
      Cabinat: {},
      Mboard: {},
      PowerS: {},
      SoundC: {},
      Storage: {},
    }
  );
  const [choosComp,setChoosComp]=useState("");

  useEffect(() => {
    localStorage.setItem("Custum", JSON.stringify(Custum));
  }, [Custum]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  // useEffect(() => {
  //   // Function to handle click event
  //   function handleClick() {
  //     setIsModalOpen(false);
  //     //  setOpen(!open);
  //     // Toggle the state
  //   }

  //   // Adding event listener to the entire document
  //   document.addEventListener("click", handleClick);

  //   // Cleanup function to remove event listener when component unmounts
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);
  // Empty dependency array to run the effect only once on mount

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlayCUS">
        <div className="modalCUS">
          <button
            style={{ color: "black" }}
            className="modal-closeCUS"
            onClick={onClose}
          >
            Close
          </button>
          <div
            style={{
              height: "990px",
              overflowY: "auto",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {children}
          </div>
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
    for (let i = 0; i < props.comp.CPU.length; i++) {
      // if (
      //   lapData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
      // ) {
      itemCPU.push(
        <div
          style={{ textAlign: "left" }}
          // onClick={setSel("L")}
        >
          <div className="cart-item">
            <img className="cart-item-image" src={props.comp.CPU[i].img} />
            <pre>
              <p className="cart-item-price">₹{props.comp.CPU[i].price}</p>
              <p className="cart-item-name">{props.comp.CPU[i].name}</p>
              <p className="cart-item-name">
                Brand:{props.comp.CPU[i].spec.Brand}
                {"  "}Cores:{props.comp.CPU[i].spec.Cores}
                {"  "}Speed:{props.comp.CPU[i].spec.Speed}
                <br />
                Model:{props.comp.CPU[i].spec.Model}
                <br />
                Socket Type:{props.comp.CPU[i].spec.SocketType}
              </p>{"                                                        "}
              <a href={Custum.CPU.link} target="_blank">
              <button style={{ fontSize: 25, width: "200px" }}>
                View On Amazon
              </button>{" "}</a>
              <button
                onClick={() => {
                  setCustom({ ...Custum, CPU: props.comp.CPU[i] });
                  closeModal();
                }}
                style={{ fontSize: 25, width: "200px" }}
              >
                Add
              </button>
            </pre>
          </div>
        </div>
      );
      // }
    }
    for (let i = 0; i < props.comp.GPU.length; i++) {
      // if (
      //   lapData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
      // ) {
      itemGPU.push(
        <div
          style={{ textAlign: "left" }}
          // onClick={setSel("L")}
        >
          <div className="cart-item">
            <img className="cart-item-image" src={props.comp.GPU[i].img} />
            <pre>
              <p className="cart-item-price">₹{props.comp.GPU[i].price}</p>
              <p className="cart-item-name">{props.comp.GPU[i].name}</p>
              <p className="cart-item-name">
                Brand:{props.comp.GPU[i].spec.Brand}
                {"  "}Memory:{props.comp.GPU[i].spec.Memory}
                {"  "}Chipset:{props.comp.GPU[i].spec.Chipset}
                <br />
                Model:{props.comp.GPU[i].spec.Model}
                <br />
                Interface:{props.comp.GPU[i].spec.Interface}
                ClockSpeed:{props.comp.GPU[i].spec.ClockSpeed}
              </p>{"                                                        "}
              <a href={Custum.GPU.link} target="_blank">
              <button style={{ fontSize: 25, width: "200px" }}>
                View On Amazon
              </button>{" "}</a>
              <button
                onClick={() => {
                  setCustom({ ...Custum, GPU: props.comp.GPU[i] });
                  closeModal();
                }}
                style={{ fontSize: 25, width: "200px" }}
              >
                Add
              </button>
            </pre>
          </div>
        </div>
      );
      // }
    }

   
    //array of buttons
    // for (let i = 0; i < pcData.length; i++) {
    //   // if (
    //   //   pcData[i].name.slice(0, j).toLowerCase() === searchbox.toLowerCase()
    //   // ) {
    //     itemPC.push(
    //       <div
    //       // onClick={setSel("PC")}
    //       >
    //         {" "}

    //           <div className="cart-item">
    //             {/* <a href={"/IPage/" + i}> */}
    //               <img className="cart-item-image" src={pcData[i].img[0]} />
    //             {/* </a> */}
    //             <pre>
    //               <p className="cart-item-price">₹{pcData[i].price}</p>
    //               <p className="cart-item-name">{pcData[i].name}</p>
    //             </pre>
    //           </div>
    //       </div>
    //     );
    //   // }
    // }
    // var bs = 20;
    return (
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* <div className="cart-container"> */}
          {/* <h1 className="cart-title">Laptops found</h1>
          <div className="cart-items-container"> {itemLap}</div>
          <h1 className="cart-title">Pre Build PCs found</h1>

          <div className="cart-items-container"> {itemPC}</div> */}

          {/* </div> */}
          {choosComp === "CPU" ? (
    <div>
        <h2>Choose CPU</h2>
        <div className="cart-items-container">{itemCPU}</div>
    </div>
) : null}

{choosComp === "GPU" ? (
    <div>
        <h2>Choose GPU</h2>
        <div className="cart-items-container">{itemGPU}</div>
    </div>
) : null}

        </Modal>
      </div>
    );
    // }
    // }
  };

  return (
    <div className="AppIP">
      {props.setcheck(1)}
      <br />
      <br />
      <br />
      <h2 style={{ color: "white" }}>Custum Your PC</h2>
      {ModalTemp()}
      <table
        style={{
          width: "1700px",
          marginLeft: "50px",
          //   marginTop:'500px',
          backgroundColor: "white",
          textAlign: "center",
          borderCollapse: "collapse", // Ensure borders collapse properly
          border: "2px solid white", // Set border to white
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                color: "white",
                border: "1px solid black",
                width: "200px",
              }}
            >
              Component
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Product
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>Title</th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Specification
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>Price</th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Product Link
            </th>
            <th style={{ color: "white", border: "1px solid black" }}>
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "100px" }}>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              {" "}
              <h2>Processor</h2>
              {/* {item.name} */}
            </td>

            {Object.keys(Custum.CPU).length === 0 ? (
               <td
               style={{
                 color: "black",
                 fontWeight: "bold",
                 border: "1px solid black",
               }}
             >
              <button
                onClick={() => {
                  openModal();
                  setChoosComp("CPU");
                  // setCustom({...Custum, CPU: props.comp.CPU[0]});
                }}
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 28,
                  // marginTop: "40px",
                  // marginLeft: "-80px",
                }}
              >
                + Add Component
              </button></td>
            ) : (
              <>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <img style={{ height: "100px" }} src={Custum.CPU.img} />
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>{Custum.CPU.name}</h3>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  <h5 style={{ marginBottom: "-20px", marginTop: "10px" }}>
                    Brand:{Custum.CPU.spec.Brand}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Cores:{Custum.CPU.spec.Cores}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Model:{Custum.CPU.spec.Model}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Speed:{Custum.CPU.spec.Speed}
                  </h5>
                  <h5 style={{ marginBottom: "-10px" }}>
                    Type: {Custum.CPU.spec.SocketType}
                  </h5>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>{Custum.CPU.price}</h3>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <a href={Custum.CPU.link} target="_blank">
                    <h3>
                      <button>View on Amazon</button>
                    </h3>
                  </a>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>
                    <button onClick={() => setCustom({ ...Custum, CPU: {} })}>
                      Remove
                    </button>
                  </h3>
                </td>
              </>
            )}
          </tr>
          {/* {
  "Brand": "AMD",
  "Cores": "64",
  "Model": "Ryzen Threadripper 3990X",
  "Speed": "4.3 GHz",
  "Socket Type": "sTRX4"
} */}

          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Motherboard</h2>
              {/* {item.name} */}
            </td>
          
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Cabinet</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>RAM</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Storage</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Graphics Card</h2>
              {/* {item.name} */}
            </td>
            {Object.keys(Custum.GPU).length === 0 ? (
               <td
               style={{
                 color: "black",
                 fontWeight: "bold",
                 border: "1px solid black",
               }}
             >
              <button
                onClick={() => {
                  setChoosComp("GPU");
                  openModal();
                  // setCustom({...Custum, CPU: props.comp.CPU[0]});
                }}
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 28,
                  // marginTop: "40px",
                  // marginLeft: "-80px",
                }}
              >
                + Add Component
              </button></td>
            ) : (
              <>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <img style={{ height: "100px" }} src={Custum.GPU.img} />
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>{Custum.GPU.name}</h3>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  <h5 style={{ marginBottom: "-20px", marginTop: "10px" }}>
                    Brand:{Custum.GPU.spec.Brand}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Cores:{Custum.GPU.spec.Memory}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Model:{Custum.GPU.spec.Model}
                  </h5>
                  <h5 style={{ marginBottom: "-20px" }}>
                    Speed:{Custum.GPU.spec.ClockSpeed}
                  </h5>
                  <h5 style={{ marginBottom: "-10px" }}>
                    Type: {Custum.GPU.spec.Interface}
                  </h5>
                  <h5 style={{ marginBottom: "-10px" }}>
                    Type: {Custum.GPU.spec.Chipset}
                  </h5>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>{Custum.GPU.price}</h3>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <a href={Custum.GPU.link} target="_blank">
                    <h3>
                      <button>View on Amazon</button>
                    </h3>
                  </a>
                </td>
                <td
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <h3>
                    <button onClick={() => setCustom({ ...Custum, GPU: {} })}>
                      Remove
                    </button>
                  </h3>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Power Supply</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Cabinet Cooler</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>CPU Cooler</h2>
              {/* {item.name} */}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              <h2>Sound Card</h2>
              {/* {item.name} */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Custum;
