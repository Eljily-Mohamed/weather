const Api = async () => {
  
  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/forecast?"
  const city = "casablanca"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";

  //pour recupere le image pour temparature 
  //http://openweathermap.org/img/wn/10d@2x.png

    return 
    fetch(`${baseUrlApi}appid=${API_KEY}&q=${city}&units=metric&lang=fr&cnt=3`)
    .then(res => res.json())
    .then(
      (result) => {
         return result;
      },
      (error) => {
         return error;
      }
    )
}

export default Api ;

