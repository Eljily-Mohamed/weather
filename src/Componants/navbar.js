import { useEffect , useState } from "react";
import sun from '../Images/sun.png';
import moon from '../Images/moon.png';

//notre nav 
const Navbar = function () {

const [mode , setMode] = useState("white");
const [icon , setIcon] = useState(moon);

useEffect (() => {
    document.body.style.backgroundColor = window.localStorage.getItem('mode');
    setMode (window.localStorage.getItem('mode'));
    setIcon(window.localStorage.getItem('icon'));
})

//function pour faire changment de mode

let  changeMode  = (e) => {
    if(e.target.dataset.stat === "white"){
       console.log("Change mode");
       setMode("black");
       setIcon(sun);
       window.localStorage.setItem("mode","black");
       window.localStorage.setItem("icon",sun);
    }
    else{
        setMode("white");
        setIcon(moon);
        window.localStorage.setItem("mode","white");
        window.localStorage.setItem("icon",moon);
    }
    document.location.reload();
}
    return (
        <nav className ={mode}>
            <div className="nav-div">
                 <div className="petite-div">
                     <div className="title-div">
                        <p>App Eljily</p>
                     </div>
                     <div className="icon-div">
                        <img src={icon} data-stat={mode}
                               onClick={(e) => {
                                   changeMode(e);
                               }}></img>
                     </div>
                 </div>
            </div>
        </nav>
    );
}

export default Navbar; 