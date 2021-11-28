import React, { useState } from "react";
import './index.css'

// import Slot from "./Sloat";


const Apps=()=>{
  let time=new Date().toLocaleTimeString()
  const [ctime,setctime]=useState(time)

  function update(){
    time=new Date().toLocaleTimeString()
    setctime(time)
  }
  setInterval(update,1000)
  return(
    <>
    
    <h1 style={{color:"white",border:"4px solid white"}}>{time}</h1>
</>
  )
}
export default Apps