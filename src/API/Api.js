const Api = function () {

    const  baseUrlApi = "http://api.openweathermap.org/data/2.5/weather?"
    const city = "Kiffa"
    const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";
    const urlAPi = baseUrlApi + "appid=" + API_KEY + "&q=" + city ;
    return 
        fetch ( 
               `${urlAPi}`.json() 
    ).then ((res) => res.json())
     .then ((data) => data)
}

export default Api ;

