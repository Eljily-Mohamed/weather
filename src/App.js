import Navbar from "./Componants/navbar";
import { useEffect , useState} from "react";
import './index.css';
import Api from "./API/Api";

function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/weather?"
  const city = "kiffa"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";


useEffect(() => {
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${city}`)
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

console.log(data);

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
