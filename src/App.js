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

 
useEffect(() => {
      setData(Api());
      if (data) {
        setLoading(true);
        setData(result);
      }
      else {
        setLoading(true);
        setError(error);
      }
}, [])

useEffect(() =>{
      setMode(window.localStorage.getItem('mode'));  
  })
  
  return (
    <div className="App">
      <Navbar/>
      <Container data={data} mode={mode}/>
    </div>
  );
}

export default App;
