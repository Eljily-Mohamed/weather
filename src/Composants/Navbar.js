import React, { useEffect, useState } from "react";
import moon from "./Images/moon.png";
import solie from "./Images/solie.png";


const Navbar = function Navbar() {  
    const [stat,setStat] = useState("white");
    const [icon,setIcon] = useState(moon);
    let tousEelemnets = document.getElementsByTagName('div');

    useEffect (() => {
        for (let i = 0; i< tousEelemnets.length; i++) {
            tousEelemnets[i].classList.add("white-color");
        }
         document.body.style.backgroundColor = stat ;
    },[stat,moon])

    //function  on change mode 
    const ChangeMode = (e) => {
          if(e.target.parentNode[0].value.toString() === "white"){
             setStat ("black");
             setIcon(solie);  
             for(let i = 0 ; i<tousEelemnets.length ; i++){
                tousEelemnets[i].classList.remove("white-color");
             }
             for (let i = 0; i< tousEelemnets.length; i++) {
                tousEelemnets[i].classList.add("black-color");
            
             }
          }
          else{
            setStat("white");
            setIcon(moon);
            for(let i = 0 ; i<tousEelemnets.length ; i++){
                   tousEelemnets[i].classList.remove("black-color");
            }
            for (let i = 0; i< tousEelemnets.length; i++) {
                   tousEelemnets[i].classList.add("white-color");
               
            }
          }
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