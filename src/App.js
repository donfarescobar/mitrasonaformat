import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from "./pages/Gallery/index"
import Location from "./pages/Location/index"
import Contact from "./pages/Contact/index"
import GeneralInsurance from "./pages/GeneralInsurance";
import Contractor from "./pages/Contractor";


function App() {
return( 
   //Routes for pages
  <BrowserRouter>
      <Routes>
      < Route path="/" element={<Home/>}/>
          {/* Product */}
          <Route path="/GeneralInsurance" element={<GeneralInsurance/>}/>
          <Route path="/ContractorInsurance" element={<Contractor/>} />
      < Route path="/Gallery" element={<Gallery/>} />
      < Route path="/Location" element={<Location/>} />
      < Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
