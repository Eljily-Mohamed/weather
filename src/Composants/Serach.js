import { useState } from "react";


const Serach = () => {
  
    const [city , setCity] = useState('');
     
     return (
          <div className="Serach">
             {/*on cree notre input   */}
             <input type="text" className="city-input" placeholder="Entre Your City">

             </input>
          </div>
     );
}

export default Serach;