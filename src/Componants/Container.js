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
    const [date , setDate] = useState(null);

    
    const  baseUrlApi = "https://api.openweathermap.org/data/2.5/forecast?"
    const API_KEY = "51bfcbcf6bc7e5b0e0a900567753dae7";
  
    
 
useEffect(() => {
console.log(ville);
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${ville}&units=metric&lang=fr`)
    .then(res => res.json())
    .then(
      (result) => {
        setLoading(false);
        setData(result);
      },
      (error) => {
        setLoading(true);
        setError(error);
      }
    )
}, [ville])


const cityname = ((e) => {
     setCity(e.target.value);
     setLoading(true);

})


let  datetext  = [];
useEffect (() => {
         fetch(`https://api.ipgeolocation.io/timezone?apiKey=7b0e4e4badf549fea14bf0b4b84bee6f&location=kiffa`)
            .then(res => res.json())
            .then(
              (result) => {
                setDate(result);
              },
              (error) => {
                setError(error);
              }
            )
           
}, [ville])

console.log(data);

 if(date!=null && date.date_time_txt !=null){
     datetext = date.date_time_txt.split(",");
 }


    useEffect(() =>{
        mode === "white" ? setIconContainer(searchwhite) : setIconContainer(searchBlack);
        mode === "white" ? setLoding(lodingwhite) : setLoding(lodingblack);
    })

    let dateString;
  if(data !=null && data.list !=null){
       dateString = data.list[1].dt_txt.split(" ")[0];
  }
   

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    
    let desc ;
      if(data !=null && data.list !=null){
      const filteredResult = data.list[0].weather.find((e) => e.description );
      desc=filteredResult.description;
    }
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
                              { data && data.city && <span> {data.city.name},{data.city.country}</span>}
                              { date && date.time_12  && <p className="grie"> {datetext[0]+"  "}{date.time_12+","} {desc}</p>}
                           </div>
                           <div className="info-temp-now">
                              <div className="child-temp-now">
                                 { data && data.list && data.list[0].main.temp && <span>{Math.floor(data.list[0].main.temp)}°</span>}
                                  {data && data.list && data.list[0].main.feels_like && <p className="grie">Feels like {Math.ceil(data.list[0].main.feels_like)}°</p>}
                              </div>
                              <div className="icon-temp-now">
                                   <img src = {weathericon} ></img>
                              </div>                              
                           </div>
                           <div className="info-win-now">
                              { data && data.list && data.list[0].wind.speed && <p> <img src={win}/> {Math.floor(data.list[0].wind.speed)}m/s </p>} {data && data.list && data.list[0].main.humidity && <p> <img src={humidity} />{data.list[0].main.humidity}% humidity</p>}
                           </div>
                           <div className="border-div"> 
                           </div>
                      </div>

                      {/* <div className="child-div">
                            <div className="procain-days">
                             <ul><li>
                                <span className="span-day">Wednesday</span>
                                <span className="span-image"><img src = {win} ></img></span>
                                <span className="span-temp">8°/8°</span>
                             </li></ul>
                             <ul><li>
                                <span className="span-day">Thursday</span>
                                <span className="span-image"><img src = {win} ></img></span>
                                <span className="span-temp">8°/8°</span>
                             </li></ul>
                             <ul><li>
                                <span className="span-day">Friday</span>
                                <span className="span-image"><img src = {win} ></img></span>
                                <span className="span-temp">8°/8°</span>
                             </li></ul>
                             <ul><li>
                                <span className="span-day">Saturday</span>
                                <span className="span-image"><img src = {win} ></img></span>
                                <span className="span-temp">8°/8°</span>
                             </li></ul>
                             <ul><li>
                                <span className="span-day">Sunday</span>
                                <span className="span-image"><img src = {win} ></img></span>
                                <span className="span-temp">8°/8°</span>
                             </li></ul>
                            </div> */}
                        
                      </div>
                </div>   
    );
}

export default Container;