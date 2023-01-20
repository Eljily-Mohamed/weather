import React, { useEffect, useState } from "react";
import moon from "./Images/moon.svg";
import solie from "./Images/solie.svg";

const Navbar = function Navbar() {  
    const [stat,setStat] = useState("white");
    const [icon,setIcon] = useState(moon);

    const ChangeMode = () => {
          if(stat === "white"){
              setStat("black");
              setIcon(moon);
          }
          else{
              setStat("white");
              setIcon(solie);
          }      
          document.body.style.background = stat ;            
        }
        
    

    return (
        <div className={stat}>
             <div className="logo">
                <p>lighter</p>
             </div>
             <div className="mode">
                 <button value ={stat} id={stat} onClick={ChangeMode}> <img src={icon} alt="Your icon four mode" /></button>
             </div>
        </div>
    );
}

export default Navbar;