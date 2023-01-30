import { useEffect , useState} from "react";

const Api = function Api() {
  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/forecast?"
  const city = "casablanca"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";

  const [data, setData] = useState(null);
   
useEffect(() => {
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${city}&units=metric&lang=fr&cnt=3`)
    .then(res => res.json())
    .then(
      (result) => {
        setData(result);
      },
      (error) => {
        setData(null);
      }
    )
  }, [])

  return data;
}

export default Api;
 

