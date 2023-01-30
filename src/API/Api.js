const Api = function () {
    baseUrlApi = "http://api.openweathermap.org/data/2.5/weather?"
    city = "Kiffa"
    API_KEY = "9fcb56825244936ffd8cccee30c8db8e";

    urlAPi = baseUrlAPi + "appid=" + API_KEY + "&q=" + city ;
    return 
        fetch ( 
               `${urlAPi}`.json() 
    ).then ((res) => res.json())
     .then ((data) => data);

     console.log(data);
}

export default Api ;

