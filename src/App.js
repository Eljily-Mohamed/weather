import Navbar from "./Componants/navbar";
import { useEffect , useState} from "react";
import './index.css';
import Api from "./API/Api";
import Container from "./Componants/Container";


function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(null);


  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/forecast?"
  const city = "casablanca"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";
  

 
useEffect(() => {
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${city}&units=metric&lang=fr&cnt=3`)
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
}, [])

useEffect(() =>{
      setMode(window.localStorage.getItem('mode'));  
  })
  
  console.log(data);

  return (
    <div className="App">
      <Navbar/>
      <Container data={data} mode={mode} loading={loading} error={error} />
    </div>
  );
}

export default App;
