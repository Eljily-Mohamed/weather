import { useEffect } from "react";
import { useState } from "react";
import Api from "../API/Api";
import search from "../Images/search.png";

const Container =  function (props){ 
    const data = props.data;
    const mode = props.mode;
    console.log(mode);
    console.log(data);
     return ( 
            <div className={mode}>
                <div className="container-child-div">
                      <div className="search-div">
                            <div className="search-contnent">
                                <img src={search} ></img>
                                <input type="text" />
                            </div>
                      </div>
                      <div className="child-div">
                           <p>div curent informations  </p>
                      </div>
                      <div className="child-div">
                             <p>div les autres joure  </p>
                      </div>
                </div>   
            </div>
    );
}

export default Container;