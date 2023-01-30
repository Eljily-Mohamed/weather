import { useEffect , useState } from "react";
import sun from '../Images/sun.png';
import moon from '../Images/moon.png';

//notre nav 
const Navbar = function () {

const [mode , setMode] = useState('');
const [icon , setIcon] = useState('')
    
useEffect ((e) => {
    setMode (window.localStorage.getItem('mode').toString());
    setIcon (window.localStorage.getItem('icon').toS);
    document.body.style.backgroundColor =mode;

}, [])

useEffect ((e) => {
    window.localStorage.setItem('mode',mode);
    window.localStorage.setItem('icon',icon);
},[mode,icon])


//function pour faire changment de mode 
let  changeMode  = (e) => {
    if(e.target.dataset.stat === "white"){ 
       console.log("Change mode");
       setMode("black");
       setIcon(sun);
    }
    else{
        setMode("white");
        setIcon(moon);
    }
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