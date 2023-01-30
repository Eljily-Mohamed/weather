const Api = async () => {
 
    const  baseUrlApi = "https://api.openweathermap.org/data/2.5/weather?"
    const city = "kiffa"
    const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";
    return 
        fetch (       
        `${baseUrlApi}.json?appid=${API_KEY}&q=${city}`
    ).then ((res) => res.json())
     .then ((data) => console.log(data))
}

export default Api ;

