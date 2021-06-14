import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const [scriptLoaded, setScriptLoaded] = useState (initalState: false);
  
  useEffect ( effect () => {
     const googleMapScript = loadMapApi ();
     googleMapScript.add
  }, deps:[]);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
