import { useEffect } from "react";
import { useState } from "react";
import Api from "../API/Api";
import searchBlack from "../Images/SearchBlack.png";
import searchwhite from "../Images/Searchwhite.png";
import lodingblack from "../Images/lodingblack.svg";
import lodingwhite from "../Images/lodingwhite.svg";

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