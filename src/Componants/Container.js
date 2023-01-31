import { useEffect } from "react";
import { useState } from "react";
import Api from "../API/Api";
import searchBlack from "../Images/SearchBlack.png";
import searchwhite from "../Images/Searchwhite.png";
import lodingblack from "../Images/lodingblack.svg";
import lodingwhite from "../Images/lodingwhite.svg";
import weathericon from "../Images/weathe.png";
import win from "../Images/win.png";
import  humidity from "../Images/humidity.png";

const Container =  function (props){ 
    const mode = props.mode;
        
    const [iconContainer , setIconContainer] = useState("");
    const [loding , setLoding ] = useState("");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ ville , setCity] = useState("");


    const  baseUrlApi = "https://api.openweathermap.org/data/2.5/forecast?"
    const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";
  

 
useEffect(() => {
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${ville}&units=metric&lang=fr&cnt=3`)
    .then(res => res.json())
    .then(
      (result) => {
        setLoading(true);
        setData(result);
      },
      (error) => {
        setLoading(true);
        setError(error);
      }
    )
}, [])


const cityname = ((e) => {
     setCity(e.target.value);
})

console.log(ville);
console.log(data);


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
                                <input type="text" placeholder="Serch for a location" 
                                    onChange={(e)=> cityname(e)}/>
                                { loading &&  <img src={loding} ></img> }
                            </div>
                      </div>
                      <div className="child-div">
                           <div className="info-local-now">
                               <span>Kiffa,Mr</span>
                               <p>Tuesday, 12:49 PM, Moderate rain</p>
                           </div>
                           <div className="info-temp-now">
                              <div className="child-temp-now">
                                  <span>6°</span>
                                  <p>Feels like 3°</p>
                              </div>
                              <div className="icon-temp-now">
                                   <img src = {weathericon} ></img>
                              </div>                              
                           </div>
                           <div className="info-win-now">
                              <img src={win} /><p>11m/s</p><img src={humidity} /><p>75% humidity</p>
                           </div>
                           <div className="border-div"> 
                           </div>
                      </div>
                      <div className="child-div">
                            <div className="procain-days">
                             <ul><li>
                                <span>Wednesday</span>
                                <span><img src = {win} ></img></span>
                                <span>8°/8°</span>
                             </li></ul>
                             <ul><li></li></ul>
                             <ul><li></li></ul>
                             <ul><li></li></ul>
                            </div>
                      </div>
                </div>   
            </div>
    );
}

export default Container;