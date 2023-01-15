import React, { useEffect, useState } from "react";

const Navbar = function Navbar() {  
    const [stat, setStat] = useState("white");
    const ChangeMode = () => {
          if(stat === "white"){
              console.log(stat)
              setStat("black");
          }
          else{
              setStat("white");
          }      
          document.body.style.background = stat ;            
        }


    return (
        <div className={stat}>
             <div className="logo">
                <p>weather Checker</p>
             </div>
             <div className="mode">
                 <button value ={stat} id={stat} onClick={ChangeMode}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><circle cx="24" cy="24" r="16" fill="#f2ca00"/><path fill="#324561" d="M24,6c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,5.553,24.553,6,24,6z"/><path fill="#324561" d="M5,25H1c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S5.553,25,5,25z"/><path fill="#324561" d="M7.736,41.264c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C8.248,41.166,7.992,41.264,7.736,41.264z"/><path fill="#324561" d="M10.565,11.565c-0.256,0-0.512-0.098-0.707-0.293L7.029,8.443c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C11.077,11.468,10.821,11.565,10.565,11.565z"/><path fill="#324561" d="M37.435,11.565c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C37.946,11.468,37.69,11.565,37.435,11.565z"/><path fill="#324561" d="M47,25h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S47.553,25,47,25z"/><path fill="#324561" d="M40.264,41.264c-0.256,0-0.512-0.098-0.707-0.293l-2.829-2.829c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C40.775,41.166,40.52,41.264,40.264,41.264z"/><path fill="#324561" d="M24,48c-0.553,0-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,47.553,24.553,48,24,48z"/></svg></button>
             </div>
        </div>
    );
}

export default Navbar;