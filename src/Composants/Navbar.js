import React, { useEffect, useState } from "react";


const Navbar = function Navbar() {  
    const [stat, setStat] = useState("black");
    const [icon, setIcon] = useState('<i class="fa-regular fa-sun"></i>');
    const ChangeMode = () => {
          if(stat=="black"){
              setStat("white");
          }
          else{
              setStat("black");
              setIcon('<i class="fa-solid fa-sun"></i>')
          }      
          document.body.style.background = stat;
    }


    return (
        <div className="navbar">
             <div className="logo">
                <p>weather Checker</p>
             </div>
             <div className="mode-light">
                 <button onClick={ChangeMode}><image src="http://www.w3.org/2000/svg"/></button>
             </div>
        </div>
    );
}

export default Navbar;