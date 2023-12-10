import React from "react";

import Nav from "../navbar"; 
import Footer from "../footer"; 


const Layout = ({ children }) => {
  return (
    <div>
      <Nav  />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;