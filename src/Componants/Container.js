import { useEffect } from "react";
import { useState } from "react";
import Api from "../API/Api";
import searchBlack from "../Images/SearchBlack.png";
import searchwhite from "../Images/Searchwhite.png";
import lodingblack from "../Images/lodingblack.svg";
import lodingwhite from "../Images/lodingwhite.svg";

const Container =  function (props){ 
    const data = props.data;
    const mode = props.mode;
    
    const [iconContainer , setIconContainer] = useState("");
    const [loding , setLoding ] = useState("");
    useEffect(() =>{
        mode === "white" ? setIconContainer(searchwhite) : setIconContainer(searchBlack);
        mode === "white" ? setLoding(lodingwhite) : setLoding(lodingblack);
    })

     return ( 
            <div className={mode}>
                <div className="container-child-div">
                      <div className="search-div">
                            <div className="search-contnent">
                                <img src={iconContainer} ></img>
                                <input type="text" placeholder="Serch for a location" />
                                <img src={loding} ></img>
                            </div>
                      </div>
                      <div className="child-div">
                           {/* <p>div curent informations  </p> */}
                      </div>
                      <div className="child-div">
                             {/* <p>div les autres joure  </p> */}
                      </div>
                </div>   
            </div>
    );
}

export default Container;