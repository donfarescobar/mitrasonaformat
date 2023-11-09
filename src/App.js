import React from "react";
import Nav from "./components/molecules/Navbar/Navbar"


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
