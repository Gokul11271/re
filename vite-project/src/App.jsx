import { useState } from 'react';
import './App.css'
import CoverflowSlider from './component/CoverFlowSlider.jsx';
import Navbar from './component/navbar.jsx';



const App = () => {


  return (
   
    <div className="App">
      <Navbar />
      <CoverflowSlider/>
      {/* Other components can be added here */}
    </div>
  
   
  );
};

export default App;
