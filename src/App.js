import Navbar from "./Componants/navbar";
import { useEffect , useState} from "react";
import './index.css';
import Api from "./API/Api";
import Container from "./Componants/Container";


function App() {
  
  const [mode, setMode] = useState(null);

useEffect(() =>{
      setMode(window.localStorage.getItem('mode'));  
  })

  return (
    <div className="App">
      <Navbar/>
      <Container mode={mode} />
    </div>
  );
}

export default App;
