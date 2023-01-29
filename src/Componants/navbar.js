import { useEffect , useStat } from "react";
import sun from '../Images/sun.png';
import moon from '../Images/moon.png';

// useEffect(() => {
      
// },stat);

const stat = window.localStorage.getItem('stat');

 useStat [mode , setMode] = setMode(stat);
 useStat [icon , setIcon] = setIcon(moon)


//function pour faire changment de mode 

let  changeMode  = (e) => {
     if(e.target.)
}

//notre nav 
const Navbar = function () {
    return (
        <nav className ="black">
            <div className="nav-div">
                 <div className="petite-div">
                     <div className="title-div">
                        <p>App Eljily</p>
                     </div>
                     <div className="icon-div">
                        <img src={moon} data-stat="lala"
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