import Navbar from "./Componants/navbar";
import './index.css';
import Api from "./API/Api";

function App() {

  const  baseUrlApi = "https://api.openweathermap.org/data/2.5/weather?"
  const city = "kiffa"
  const API_KEY = "9fcb56825244936ffd8cccee30c8db8e";


  

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
