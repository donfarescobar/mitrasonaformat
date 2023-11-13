import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/index"
import Location from "./pages/Location/index"
import Contact from "./pages/Contact/index"
import GeneralInsurance from "./pages/GeneralInsurance";
import Contractor from "./pages/Contractor";
import AllMarine from "./pages/Subpages/all-marine";
import Engineering from "./pages/Subpages/engineering";
import MotorVehicle from "./pages/Subpages/motor-vehicle"
import Property from "./pages/Subpages/property"
import SuretyBond from "./pages/Subpages/surety-bond"
import Liability from "./pages/Subpages/liability"

function App() {
return( 
   //Routes for pages
  <BrowserRouter>
      <Routes>
      < Route path="/" element={<Home/>}/>
          {/* Product */}
          <Route path="/GeneralInsurance" element={<GeneralInsurance/>}/>
          <Route path="/ContractorInsurance" element={<Contractor/>} />
                <Route path="/AllMarine" element={<AllMarine/>}/>
                <Route path="/Engineering" element={<Engineering/>} />
                <Route path="/Liability" element={<Liability/>} /> 
                <Route path="/MotorVehicle" element={<MotorVehicle/>}/>
                <Route path="/Property" element={<Property/>} />
                <Route path="/SuretyBond" element={<SuretyBond/>}/>
      < Route path="/Gallery" element={<Gallery/>} />
      < Route path="/Location" element={<Location/>} />
      < Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
