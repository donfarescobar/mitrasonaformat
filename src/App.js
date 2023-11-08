import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from "./pages/Gallery/index"
import Location from "./pages/Location/index"
import Contact from "./pages/Contact/index"

function App() {
return( 
   //Routes for pages
  <BrowserRouter>
      <Routes>
      < Route path="/" element={<Home/>}/>
          {/* Product */}
          <Route path="/GeneralInsurance" element={<Home/>}/>
          <Route path="/ContractorInsurance" element={<Home/>} />
      < Route path="/Gallery" element={<Gallery/>} />
      < Route path="/Location" element={<Location/>} />
      < Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
