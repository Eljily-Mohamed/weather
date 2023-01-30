import Navbar from "./Componants/navbar";
import './index.css';
import Api from "./API/Api";

function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/weather?"
  const city = "kiffa"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

useEffect(() => {
  fetch(`${baseUrlApi}appid=${API_KEY}&q=${city}`)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setData(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
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
